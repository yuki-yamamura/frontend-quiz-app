import type { Question } from '@/types/Question';

export type Quiz = {
  title: 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';
  icon: string;
  questions: Question[];
};
