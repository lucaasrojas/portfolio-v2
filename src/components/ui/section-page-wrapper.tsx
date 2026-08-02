'use client';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const SectionPageWrapper = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href=""
        onClick={() => window.history.back()}
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
