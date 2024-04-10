import fs from 'node:fs/promises';
import path from 'path';

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
  console.log(title);
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
  const questionNumber = 1;
  const question = quiz.questions[questionNumber];
  const totalQuestions = quiz.questions.length;

  return (
    <main>
      <div
        className={styles.currentQuestion}
      >{`Question ${questionNumber.toString()} of ${totalQuestions}`}</div>
      <h1 className={styles.question}>{question.question}</h1>
      {/* todo: implement the progressbar */}
      <div className={styles.progressbar}>progressbar</div>
      <ul className={styles.list}>
        {question.options.map((option) => (
          <li key={option} className={styles.listitem}>
            <div className={styles.optionSymbol}>A</div>
            <div>{option}</div>
          </li>
        ))}
      </ul>
      <button type="button" className={styles.button}>
        Submit Answer
      </button>
    </main>
  );
};

export default Page;
