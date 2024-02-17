import { forwardRef } from 'react';
import { IField } from './Field.interface';
import cn from 'clsx';
import styles from './Field.module.scss';

const Field = forwardRef<HTMLInputElement, IField>((
    { error, style, Icon, className, ...rest }, 
    ref) => {

	return (
        <div className={cn(styles.field, className)} style={style}>
            {Icon && (
                <div className={styles.icon}>
                    <Icon />
                </div>
            )}

            <input ref={ref} {...rest} />

            {error && <div className={styles.error}>{error.message}</div>}
        </div>
    );
});

export default Field;
