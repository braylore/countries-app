import styles from './loaderRound.module.scss';
import { useColorMode } from '../../../hooks/useColorMode';

const LoaderRound = () => {
  const { mode } = useColorMode();

  return (
    <svg
      className={styles.loader}
      viewBox="0 0 50 50"
    >
      <circle
        stroke={mode === 'light' ? '#7c7b6a' : '#48699b'}
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="5"
      />
    </svg>
  );
};

export default LoaderRound;
