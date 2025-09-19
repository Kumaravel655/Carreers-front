import React from 'react';
import styles from './appliedJobs.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = () => {
  return (
    <div className={styles.pagination}>
      <button className={`${styles.pageButton} ${styles.prevButton}`}>
        <FaChevronLeft />
      </button>
      <button className={`${styles.pageButton} ${styles.active}`}>1</button>
      <button className={styles.pageButton}>2</button>
      <button className={styles.pageButton}>3</button>
      <button className={styles.pageButton}>4</button>
      <button className={styles.pageButton}>5</button>
      <button className={`${styles.pageButton} ${styles.nextButton}`}>
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;