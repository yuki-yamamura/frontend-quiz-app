/* eslint-disable @next/next/no-img-element */

import axios from 'axios';
import useSWR from 'swr';

import type { ResponseDataType } from './api/quizzes';
import type { AxiosError } from 'axios';

import styles from './index.module.scss';

const Page = () => {
  const { data, isLoading, error } = useSWR<ResponseDataType, AxiosError>(
    '/api/quizzes',
    async (url: string) => {
      const res = await axios.get<ResponseDataType>(url);

      return res.data;
    },
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data || error) {
    return <div>Something went wrong</div>;
  }

  return (
    <main>
      <div className={styles.hero}>
        <h1 className={styles.heading}>
          Welcome to the <strong>Frontend Quiz</strong>
        </h1>
        <div className={styles.description}>Pick a subject to get started.</div>
      </div>

      <ul className={styles.list}>
        {data.quizzes.map((quiz) => (
          <li key={quiz.title} className={styles.listitem}>
            <a
              href={`/quizzes/${quiz.title.toLowerCase()}`}
              className={styles.link}
            >
              <img
                src={quiz.icon}
                alt=""
                aria-hidden
                className={`${styles.image} ${
                  styles[quiz.title.toLowerCase()]
                }`}
              />
              {quiz.title}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Page;
