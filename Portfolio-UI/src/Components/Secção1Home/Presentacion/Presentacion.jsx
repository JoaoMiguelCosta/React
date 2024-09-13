import React from 'react';
import styles from "./presenta.module.css";

// UserProfile component definition
const UserProfile = ({ name, title, subtitle }) => {
  return (
    <div>
      <div>Hi, I am {name},</div>
      <div>{title}</div>
      {subtitle && <div>{subtitle}</div>}
    </div>
  );
};

export const Presentacion1 = () => {
  return (
    <div className={styles.profileNelson}>
      <UserProfile
        name="Nelson"
        title="Front-end Developer"
      />
    </div>
  );
};

export const Presentacion2 = () => {
  return (
    <div className={styles.profileJohn}>
      <UserProfile
        name="John"
        title="Creative"
        subtitle="Technologist"
      />
    </div>
  );
};