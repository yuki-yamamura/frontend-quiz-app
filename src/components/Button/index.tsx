type Props = React.ComponentPropsWithoutRef<'button'>;

import styles from './index.module.scss';

const Button = (props: Props) => (
  <button {...props} className={styles.module}></button>
);

export default Button;
