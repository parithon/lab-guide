import React from "react"

import styles from "./switch.module.scss"

export const Switch = ({ className, isChecked, rounded, onClick }) => (
  <div className={className}>
    <label className={styles.switch}>
      <input type="checkbox" checked={isChecked} onClick={onClick} onChange={() => {}} />
      <span className={`${styles.slider} ${rounded ? styles.sliderRounded : ""}`}></span>
    </label>
  </div>
)
