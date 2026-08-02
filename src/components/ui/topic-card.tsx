import Link from 'next/link';

export function TopicCard({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <div
      key={slug}
      className="group bg-[var(--bg-card)] border border-[var(--border)] rounded-2xl p-6 flex flex-col hover:border-[var(--border-dark)] hover:shadow-sm transition-all"
    >
      {children}
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display font-bold text-2xl text-[var(--text-primary)] mb-6">
      {children}
    </h2>
  );
}

function Description({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[var(--text-muted)] text-sm leading-relaxed flex-1 mb-4">
      {children}
    </p>
  );
}

function CardLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <Link href={href!}>{children}</Link>;
}

TopicCard.Title = Title;
TopicCard.Description = Description;
TopicCard.Link = CardLink;
