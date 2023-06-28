import React from "react";

import styles from "./NotFoundBlock.module.scss"; 

console.log(styles);

const NotFoundBlock = () => {
    return (
        <div className={styles.root}>
            <h1>Ничего не найдено</h1>
        </div>
    )
}

export default NotFoundBlock;
