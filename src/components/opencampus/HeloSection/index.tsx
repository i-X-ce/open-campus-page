import styles from "./style.module.css";

const HeloSection = () => {
  return (
    <section className={styles.section} id="hero-section">
      <div className={styles.container}>
        <div className={`${styles.textContainer} big-s`}>
          <div className={styles.leftLine} />
          <div className={styles.leftLine2} />
          <div>
            <p>OPEN</p>
            <p>CAMPUS</p>
            <div className={styles.date}>
              2025 <div className={styles.day}>8/12-15</div>
            </div>
          </div>
        </div>
        {/* <div className={styles.windowContainer}>
          <WindowTop />
        </div> */}
        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                className={styles.img}
                style={{
                  gridArea: `i${i + 1}`,
                  backgroundImage: `url("/images/image (${i + 1}).jpeg")`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeloSection;
