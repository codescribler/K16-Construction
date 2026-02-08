'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface LightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function Lightbox({ src, alt, children }: LightboxProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isOpen, close]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/92"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="relative max-h-[90%] max-w-[90%]">
            <button
              onClick={close}
              className="absolute -top-12 right-0 flex h-11 w-11 items-center justify-center text-white opacity-70 transition-all hover:scale-110 hover:opacity-100 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={800}
              className="rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              style={{ width: 'auto', height: 'auto', maxHeight: '85vh' }}
            />
          </div>
        </div>
      )}
    </>
  );
}
