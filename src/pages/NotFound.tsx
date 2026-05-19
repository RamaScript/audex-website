import { Button } from '../components/ui/Button'
import { Container } from '../components/ui/Container'
import { useDocumentMeta } from '../hooks/useDocumentMeta'

export function NotFoundPage() {
  useDocumentMeta(
    'Page Not Found | Audex',
    'The page you requested could not be found.',
  )

  return (
    <section className="hero-surface min-h-[70vh] py-24 text-deepsea">
      <Container className="flex min-h-[50vh] flex-col items-start justify-center">
        <p className="text-xs font-bold uppercase tracking-[0.32em] text-[var(--color-sky)]">
          404
        </p>
        <h1 className="mt-5 font-[var(--font-display)] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          This route is outside the current Audex map.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-deepsea/72">
          Return to the homepage or continue to the contact page to begin a
          diagnostic conversation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="ghost">
            Contact Audex
          </Button>
        </div>
      </Container>
    </section>
  )
}
