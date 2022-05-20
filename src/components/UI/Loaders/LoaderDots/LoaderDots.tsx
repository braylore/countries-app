import styles from './loaderDots.module.scss';
import { useColorMode } from '../../../../hooks/useColorMode';

const Loader = () => {
  const { mode } = useColorMode();

  return (
    <div className={`${styles.lds} ${styles[mode]}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
