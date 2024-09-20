import clsx from 'clsx';
import css from './Alert.module.css';

export const Alert = ({ children, variant, elevated, outlined }) => {
  return (
    <p
      className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};
