
//module that solves the problem of merging tailwind classes with clsx and tailwind-merge
import { twMerge } from 'tailwind-merge';

//clsx is a utility for constructing className strings conditionally
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
