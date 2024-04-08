import React from 'react';
import styles from "./Loader.module.scss"
import clsx from "clsx";


type SizeVariant = 'small' | 'medium'  | 'large' | 'extra-small'

interface IProps {
    size?: SizeVariant
}

export const Loader = (props: IProps) => {
    const {   size = 'small'} = props;
    return (
        <div className={clsx(styles.loader, styles[size])} />
    );
};
