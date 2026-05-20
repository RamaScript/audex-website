import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { AlertCircle, CheckCircle2, LoaderCircle } from 'lucide-react'
import { firebaseConfigured } from '../../lib/firebase'
import { submitContactSubmission } from '../../lib/contactService'
import type { ContactSubmission } from '../../lib/contactService'
import { Button } from '../ui/Button'

type ContactFormProps = {
  sourcePage: string
}

type FormValues = {
  fullName: string
  email: string
  phone: string
  companyName: string
  jobTitle: string
  interestType: ContactSubmission['interestType']
  annualFreightSpend: string
  message: string
  consent: boolean
}

type FormErrors = Partial<Record<keyof FormValues, string>>

const initialValues: FormValues = {
  fullName: '',
  email: '',
  phone: '',
  companyName: '',
  jobTitle: '',
  interestType: 'diagnostic',
  annualFreightSpend: '',
  message: '',
  consent: false,
}

function validate(values: FormValues) {
  const errors: FormErrors = {}

  if (!values.fullName.trim()) {
    errors.fullName = 'Full name is required.'
  }

  if (!values.email.trim()) {
    errors.email = 'Work email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!values.companyName.trim()) {
    errors.companyName = 'Company name is required.'
  }

  if (!values.message.trim()) {
    errors.message = 'Tell us what you want diagnosed.'
  }

  if (!values.consent) {
    errors.consent = 'Please confirm that we can contact you.'
  }

  return errors
}

export function ContactForm({ sourcePage }: ContactFormProps) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState(false)

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value, type } = event.target
    const nextValue =
      type === 'checkbox'
        ? (event.target as HTMLInputElement).checked
        : value

    setValues((current) => ({
      ...current,
      [name]: nextValue,
    }))
    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }))
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsSubmitting(true)
    setSubmitError('')

    try {
      await submitContactSubmission({
        fullName: values.fullName.trim(),
        email: values.email.trim(),
        phone: values.phone.trim() || undefined,
        companyName: values.companyName.trim(),
        jobTitle: values.jobTitle.trim() || undefined,
        interestType: values.interestType,
        annualFreightSpend: values.annualFreightSpend.trim() || undefined,
        message: values.message.trim(),
        consent: values.consent,
        sourcePage,
        createdAt: new Date().toISOString(),
      })

      setSubmitSuccess(true)
      setValues(initialValues)
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your request.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-deepsea/10 bg-deepsea/5 p-6 shadow-2xl sm:p-8"
    >

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="fullName"
          value={values.fullName}
          onChange={handleChange}
          error={errors.fullName}
          placeholder="Name"
        />
        <Field
          label="Work email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          error={errors.email}
          placeholder="name@company.com"
        />
        <Field
          label="Phone number"
          name="phone"
          value={values.phone}
          onChange={handleChange}
          error={errors.phone}
          placeholder="+91"
        />
        <Field
          label="Company name"
          name="companyName"
          value={values.companyName}
          onChange={handleChange}
          error={errors.companyName}
          placeholder="Company"
        />
        <Field
          label="Job title / role"
          name="jobTitle"
          value={values.jobTitle}
          onChange={handleChange}
          error={errors.jobTitle}
          placeholder="Role"
        />
        <div className="space-y-2">
          <label
            htmlFor="interestType"
            className="text-sm font-semibold text-deepsea/90"
          >
            Interest type
          </label>
          <select
            id="interestType"
            name="interestType"
            value={values.interestType}
            onChange={handleChange}
            className="h-12 w-full rounded-2xl border border-deepsea/10 bg-white px-4 text-sm text-deepsea outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
          >
            <option value="diagnostic">Book Diagnostic</option>
            <option value="demo">Request Demo</option>
            <option value="freight_audit">Freight Audit Assessment</option>
            <option value="consulting">Consulting</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <Field
          label="Annual freight spend / logistics scale"
          name="annualFreightSpend"
          value={values.annualFreightSpend}
          onChange={handleChange}
          error={errors.annualFreightSpend}
          placeholder="Optional"
        />
      </div>

      <div className="mt-5 space-y-2">
        <label
          htmlFor="message"
          className="text-sm font-semibold text-deepsea/90"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={values.message}
          onChange={handleChange}
          rows={6}
          placeholder="Tell us where cost, control or visibility feels weakest."
          className="w-full rounded-[1.5rem] border border-deepsea/10 bg-white px-4 py-3 text-sm text-deepsea outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
        />
        {errors.message ? (
          <p className="text-sm text-red-600">{errors.message}</p>
        ) : null}
      </div>

      <label className="mt-5 flex items-start gap-3 rounded-[1.25rem] border border-deepsea/10 bg-white px-4 py-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          checked={values.consent}
          onChange={handleChange}
          className="mt-1 h-4 w-4 rounded border-deepsea/10 text-blue focus:ring-blue"
        />
        <span className="text-sm leading-6 text-deepsea/80">
          I consent to Audex contacting me about diagnostics, freight audits,
          demos, or consulting support.
        </span>
      </label>
      {errors.consent ? (
        <p className="mt-2 text-sm text-red-600">{errors.consent}</p>
      ) : null}

      {!firebaseConfigured ? (
        <div className="mt-5 flex gap-3 rounded-[1.25rem] border border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Firebase environment variables are not configured yet. The form UI
            is ready, but submissions will fail until the environment values are
            added.
          </p>
        </div>
      ) : null}

      {submitSuccess ? (
        <div className="mt-5 flex gap-3 rounded-[1.25rem] border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          <p>
            Your request has been received. We will review it and come back with
            the next diagnostic step.
          </p>
        </div>
      ) : null}

      {submitError ? (
        <div className="mt-5 flex gap-3 rounded-[1.25rem] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-900">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <p>{submitError}</p>
        </div>
      ) : null}

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          className="w-full sm:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending
            </>
          ) : (
            'Send Diagnostic Request'
          )}
        </Button>
      </div>

    </form>
  )
}

type FieldProps = {
  label: string
  name: keyof Omit<FormValues, 'interestType' | 'message' | 'consent'>
  value: string
  onChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => void
  error?: string
  placeholder?: string
  type?: string
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: FieldProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="text-sm font-semibold text-deepsea/90"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-12 w-full rounded-2xl border border-deepsea/10 bg-white px-4 text-sm text-deepsea outline-none transition focus:border-blue focus:ring-2 focus:ring-blue/20"
      />
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </div>
  )
}
