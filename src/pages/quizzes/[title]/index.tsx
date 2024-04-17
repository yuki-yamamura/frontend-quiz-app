import Button from '@/components/Button';
import { alphabets } from '@/constants';
import fs from 'node:fs/promises';
import path from 'path';
import { useState } from 'react';

import type { Progress } from '@/types/Progress';
import type { Quiz } from '@/types/Quiz';
import type { GetServerSideProps } from 'next';

import styles from './index.module.scss';

type Params = {
  title: Quiz['title'];
};

type Props = {
  quiz: Quiz;
};

export const getServerSideProps: GetServerSideProps<Props> = async ({
  params,
}) => {
  const { title } = params as Params;
  const json = (
    await fs.readFile(path.join(process.cwd(), 'data/quizzes.json'))
  ).toString();
  const data = JSON.parse(json) as { quizzes: Quiz[] };
  const quiz = data.quizzes.find((quiz) => quiz.title.toLowerCase() === title);

  if (!quiz) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      quiz,
    },
  };
};

const Page = ({ quiz }: Props) => {
  const initialProgress: Progress = quiz.questions.map((question) => ({
    selectedAnswer: undefined,
    isChecked: false,
    ...question,
  }));
  const [progress, setProgress] = useState<Progress>(initialProgress);
  const currentQuestion = progress.find((question) => !question.isChecked);
  const currentQuestionNumber =
    progress.findIndex((question) => !question.isChecked) + 1;
  const totalQuestions = progress.length;
  const buttonLabel =
    typeof currentQuestion?.selectedAnswer === 'undefined'
      ? 'Submit Answer'
      : 'Next Question';

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e.currentTarget.value);
  };

  if (!currentQuestion) {
    return <div>finished!</div>;
  }

  return (
    <main>
      <div
        className={styles.currentQuestion}
      >{`Question ${currentQuestionNumber} of ${totalQuestions}`}</div>
      <h1 className={styles.question}>{currentQuestion.question}</h1>
      {/* todo: implement the progressbar */}
      <ul className={styles.list}>
        {currentQuestion.options.map((option, index) => (
          <li key={option} onClick={() => {}} className={styles.listitem}>
            <div className={styles.optionSymbol}>{alphabets.at(index)}</div>
            <div>{option}</div>
          </li>
        ))}
      </ul>
      <Button type="button" onClick={handleButtonClick}>
        {buttonLabel}
      </Button>
    </main>
  );
};

export default Page;
