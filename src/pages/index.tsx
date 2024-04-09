/* eslint-disable @next/next/no-img-element */
import styles from './index.module.scss';

const Page = () => (
  <main>
    <div className={styles.hero}>
      <h1 className={styles.heading}>
        Welcome to the <strong>Frontend Quiz</strong>
      </h1>
      <div className={styles.description}>Pick a subject to get started.</div>
    </div>

    <ul className={styles.list}>
      <li className={styles.listitem}>
        <a href="/subjects/html" className={styles.link}>
          <img
            src="/assets/images/icon-html.svg"
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.html}`}
          />
          HTML
        </a>
      </li>
      <li className={styles.listitem}>
        <a href="/subjects/css" className={styles.link}>
          <img
            src="/assets/images/icon-css.svg"
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.css}`}
          />
          CSS
        </a>
      </li>
      <li className={styles.listitem}>
        <a href="/subjects/javascript" className={styles.link}>
          <img
            src="/assets/images/icon-js.svg"
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.javascript}`}
          />
          JavaScript
        </a>
      </li>
      <li className={styles.listitem}>
        <a href="/subjects/accessibility" className={styles.link}>
          <img
            src="/assets/images/icon-accessibility.svg"
            alt=""
            aria-hidden
            className={`${styles.image} ${styles.accessibility}`}
          />
          Accessibility
        </a>
      </li>
    </ul>
  </main>
);

export default Page;
