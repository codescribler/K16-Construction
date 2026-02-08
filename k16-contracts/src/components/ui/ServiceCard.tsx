import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
      <div className="h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          width={400}
          height={250}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-3 text-xl font-bold text-primary">{service.title}</h3>
        <p className="mb-4 text-gray">{service.description}</p>
        <ul className="mb-6 space-y-1">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <Check size={16} className="text-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Link
          href={`/services#${service.id}`}
          className="mt-auto inline-block rounded-md border-2 border-primary bg-transparent px-6 py-3 text-center font-primary font-medium text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
