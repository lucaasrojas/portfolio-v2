'use client';
import Image from 'next/image';

export function DesignerSection({
  designer,
}: {
  designer: { season: string; designer: string; images: string[] };
}) {
  return (
    <div>
      <p className="text-2xl font-semibold my-2 border-2 border-[var(--text-secondary)] p-2 rounded-md">
        {designer.season} - {designer.designer}
      </p>
      <div className="flex flex-wrap  gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {designer.images.map((img) => (
          <Image
            key={img}
            src={img}
            alt={''}
            width={400}
            height={300}
            className="mx-auto"
          />
        ))}
      </div>
    </div>
  );
}
