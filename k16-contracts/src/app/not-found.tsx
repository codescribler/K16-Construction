import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center pt-20">
      <Container>
        <div className="text-center">
          <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
          <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
          <p className="mb-8 text-lg text-gray">
            Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="lg">Go Home</Button>
            <Button href="/contact" variant="outline-primary" size="lg">Contact Us</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
