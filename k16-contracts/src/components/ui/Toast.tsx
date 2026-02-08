'use client';

import { useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export function Toast({ message, type, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        'fixed top-4 left-1/2 z-[9999] flex -translate-x-1/2 items-center gap-3 rounded-lg px-6 py-4 shadow-lg',
        type === 'success' ? 'bg-success text-white' : 'bg-danger text-white'
      )}
    >
      {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      <span>{message}</span>
      <button onClick={onClose} className="ml-2 cursor-pointer opacity-70 hover:opacity-100">
        <X size={18} />
      </button>
    </div>
  );
}
