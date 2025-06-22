import styles from "./style.module.css";

const SectionTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className={styles.container}>
      {Array.from({ length: 2 }, (_, i) => (
        <div
          className={`${styles.titleContainer} ${i === 1 ? styles.titleContainer1 : ""}`}
          key={i}
        >
          <p className={styles.subTitle}>{subTitle}</p>
          <p className={`${styles.title} big-s`}>{title}</p>
        </div>
      ))}
    </div>
  );
};

export default SectionTitle;
