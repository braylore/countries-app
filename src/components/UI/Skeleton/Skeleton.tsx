import ContentLoader from 'react-content-loader';
import { useColorMode } from '../../../hooks/useColorMode';

const Skeleton = () => {
  const { mode } = useColorMode();

  return (
    <ContentLoader
      speed={2}
      width={325}
      height={415}
      viewBox="0 0 325 415"
      backgroundColor={mode === 'light' ? '#d4cfbc' : '#2a446b'}
      foregroundColor={mode === 'light' ? '#ebe3e3' : '#bbc7cf'}
    >
      <rect
        x="20"
        y="305"
        rx="5"
        ry="5"
        width="200"
        height="13"
      />
      <rect
        x="0"
        y="0"
        rx="20"
        ry="20"
        width="325"
        height="200"
      />
      <rect
        x="0"
        y="180"
        rx="0"
        ry="10"
        width="325"
        height="20"
      />
      <rect
        x="40"
        y="217"
        rx="10"
        ry="10"
        width="250"
        height="20"
      />
      <rect
        x="20"
        y="340"
        rx="5"
        ry="5"
        width="200"
        height="13"
      />
      <rect
        x="20"
        y="375"
        rx="5"
        ry="5"
        width="200"
        height="13"
      />
    </ContentLoader>
  );
};

export default Skeleton;
