import React, {ReactNode} from 'react';
import clsx from "clsx";
import styles from "./Button.module.scss"

type ButtonVariant = 'primary' | 'outlined'


interface IProps {
    variant?: ButtonVariant
    onClick?: () => void;
    isDisabled?: boolean
    children: ReactNode;
    fullWidth?: boolean
    className?: string
}

export const Button = (props: IProps) => {
    const {children, className, variant = "primary", fullWidth, isDisabled, onClick} = props;
    return (
        <button onClick={onClick} disabled={isDisabled} className={clsx(styles.btn, styles[variant], className, {
            [styles.fullWidth]: fullWidth,
        })}>
            {children}
        </button>
    );
};
