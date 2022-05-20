export const getFormattedClassName = (
  activeClass: string,
  value: string,
  styles: { [key: string]: string },
  activeDirection: string
) => {
  return activeClass === value
    ? `${styles.wrapperIcon} ${styles[activeDirection]} ${styles.active}`
    : styles.wrapperIcon;
};
