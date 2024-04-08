import React from 'react';
import styles from "./Auth.module.scss"
interface IProps {
    children: React.ReactNode
}

export const AuthWrapper = ({ children }: IProps) => {
    return (
        <div className={styles.AuthWrapper}>
            {children}
        </div>
    );
};
