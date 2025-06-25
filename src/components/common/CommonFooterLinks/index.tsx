import styles from "./style.module.css";

const CommonFooterLinks = ({
  title,
  links,
}: {
  title: string;
  links: {
    name: string;
    href: string;
  }[];
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <div className={styles.linksContainer}>
        <div className={styles.linksBorderWrapper}>
          <div className={styles.linksBorder} />
        </div>
        <div className={styles.links}>
          {links.map((link, i) => (
            <div key={i} className={styles.link}>
              <div className={styles.linkBorder} />
              <a href={link.href} className={styles.linkA}>
                {link.name}
              </a>
            </div>
          ))}
          <div className={styles.linkEnd}>
            <div className={styles.linkEndBorder} />
            <div className={styles.linkEndPoint}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonFooterLinks;
