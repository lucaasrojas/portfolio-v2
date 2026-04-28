import { cn } from '@/lib/utils';

interface MarqueeProps {
  items: string[];
  className?: string;
  bgColor?: string;
  textColor?: string;
  speed?: string;
}

export default function Marquee({
  items,
  className,
  bgColor = 'bg-[var(--accent)]',
  textColor = 'text-[var(--text-primary)]',
  speed = '20s',
}: MarqueeProps) {
  // Duplicate to create seamless loop
  const doubled = [...items, ...items, ...items];

  return (
    <div
      className={cn('overflow-hidden py-3 pause-on-hover', bgColor, className)}
    >
      <div
        className={cn('flex w-max animate-marquee', textColor)}
        style={{ animationDuration: speed }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-display font-bold text-base whitespace-nowrap flex items-center gap-3 mr-3"
          >
            {item}
            <span className="text-[var(--accent-dark)] text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
