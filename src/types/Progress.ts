import type { Question } from '@/types/Question';

export type Progress = (Question & {
  selectedAnswer: string | undefined;
  isChecked: boolean;
})[];
