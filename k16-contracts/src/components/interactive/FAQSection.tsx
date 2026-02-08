'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '@/types';
import { cn } from '@/lib/utils';

interface FAQSectionProps {
  faqs: FAQ[];
  columns?: 1 | 2;
}

export function FAQSection({ faqs, columns = 1 }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  if (columns === 2) {
    const mid = Math.ceil(faqs.length / 2);
    const col1 = faqs.slice(0, mid);
    const col2 = faqs.slice(mid);

    return (
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {col1.map((faq, i) => (
            <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
          ))}
        </div>
        <div className="space-y-3">
          {col2.map((faq, i) => (
            <FAQItem
              key={i + mid}
              faq={faq}
              isOpen={openIndex === i + mid}
              onToggle={() => toggle(i + mid)}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((faq, i) => (
        <FAQItem key={i} faq={faq} isOpen={openIndex === i} onToggle={() => toggle(i)} />
      ))}
    </div>
  );
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-light bg-white">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between p-4 text-left font-primary font-medium transition-colors hover:bg-light cursor-pointer"
      >
        <span>{faq.question}</span>
        <ChevronDown
          size={20}
          className={cn('shrink-0 transition-transform duration-200', isOpen && 'rotate-180')}
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-200',
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        )}
      >
        <div className="overflow-hidden">
          <div className="px-4 pb-4 text-gray">{faq.answer}</div>
        </div>
      </div>
    </div>
  );
}
