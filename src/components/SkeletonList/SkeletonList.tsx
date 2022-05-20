import { Grid } from '@mui/material';
import Skeleton from '../UI/Skeleton/Skeleton';
import styles from './skeletonList.module.scss';

const SkeletonList = () => {
  return (
    <Grid
      justifyContent="center"
      container
      spacing={4}
      component="ul"
      sx={{
        mb: '25px'
      }}
    >
      <Grid
        component="li"
        item
        xl={4}
      >
        <div className={styles.wrapper}>
          <Skeleton />
        </div>
      </Grid>
      <Grid
        component="li"
        item
        xl={4}
      >
        <div className={styles.wrapper}>
          <Skeleton />
        </div>
      </Grid>
      <Grid
        component="li"
        item
        xl={4}
      >
        <div className={styles.wrapper}>
          <Skeleton />
        </div>
      </Grid>
    </Grid>
  );
};

export default SkeletonList;
