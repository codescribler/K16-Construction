import { Container } from '@/components/ui/Container';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

export function PageHeader({
  title,
  subtitle,
  backgroundImage = '/images/british-home.jpg',
}: PageHeaderProps) {
  return (
    <section
      className="bg-cover bg-center px-0 pt-28 pb-20 text-white md:pt-32 md:pb-20"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(44, 82, 130, 0.9), rgba(26, 54, 93, 0.9)), url('${backgroundImage}')`,
      }}
    >
      <Container>
        <div className="max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">{title}</h1>
          <p className="text-lg font-light leading-relaxed">{subtitle}</p>
        </div>
      </Container>
    </section>
  );
}
