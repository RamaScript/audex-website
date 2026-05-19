import { addDoc, collection } from 'firebase/firestore'
import { db, firebaseConfigured } from './firebase'

export type ContactSubmission = {
  fullName: string
  email: string
  phone?: string
  companyName: string
  jobTitle?: string
  interestType: 'diagnostic' | 'demo' | 'freight_audit' | 'consulting' | 'other'
  annualFreightSpend?: string
  message: string
  consent: boolean
  sourcePage: string
  createdAt: string
}

export async function submitContactSubmission(submission: ContactSubmission) {
  if (!firebaseConfigured || !db) {
    throw new Error('Firebase is not configured in this environment.')
  }

  await addDoc(collection(db, 'contact_submissions'), submission)
}
