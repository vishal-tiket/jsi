import Link from "next/link";

import styles from "../styles/Home.module.css";

export const Header = ({ title, previousUrl }) => {
  return (
    <>
      <div className={styles.safe_area}></div>
      <div className={styles.header}>
        {previousUrl ? (
          <Link className={styles.backButton} href={previousUrl}>{`<`}</Link>
        ) : (
          <div className={styles.backButton} />
        )}
        <span>{title}</span>
      </div>
    </>
  );
};
