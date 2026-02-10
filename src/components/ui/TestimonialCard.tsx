import { Star } from 'lucide-react';
import type { Testimonial } from '@/types';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'dark' | 'light';
}

export function TestimonialCard({ testimonial, variant = 'dark' }: TestimonialCardProps) {
  const isDark = variant === 'dark';

  return (
    <div
      className={cn(
        'h-full rounded-xl p-6 transition-all duration-250',
        isDark
          ? 'border-t-[3px] border-white/30 bg-white/10 backdrop-blur-md hover:-translate-y-1 hover:bg-white/15'
          : 'bg-white text-dark shadow-md hover:-translate-y-1 hover:shadow-lg'
      )}
    >
      <div className="mb-3 flex gap-0.5">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className={cn('fill-current', isDark ? 'text-warning' : 'text-warning')} />
        ))}
      </div>
      <p className={cn('mb-6 italic leading-relaxed', isDark ? 'text-white' : 'text-gray')}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div>
        <strong className={cn('block', isDark ? 'text-white' : 'text-dark')}>{testimonial.author}</strong>
        <span className={cn('text-sm', isDark ? 'opacity-80' : 'text-gray')}>{testimonial.project}</span>
      </div>
    </div>
  );
}
