'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const SectionPageWrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const handleBack = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (typeof window !== 'undefined' && window.history.length > 1) {
      router.back();
      return;
    }

    router.push('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="#"
        onClick={handleBack}
        className="flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors mb-8"
      >
        <ArrowLeft size={16} />
        Volver
      </Link>
      <h1 className="font-display font-bold text-5xl text-[var(--text-primary)] mb-4">
        {title}
      </h1>
      <p className="text-[var(--text-muted)] text-base leading-relaxed max-w-xl">
        {description}{' '}
      </p>

      {children}
    </div>
  );
};
