import { useState } from "react";
import styles from "./style.module.css";
import { VscChevronDown } from "react-icons/vsc";

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
  const [open, setOpen] = useState(false);

  const linkContent = (
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
  );

  return (
    <div className={styles.container}>
      <button className={styles.titleButton} onClick={() => setOpen(!open)}>
        <p className={styles.title}>{title}</p>
        <VscChevronDown className={styles.downButton} />
      </button>
      <div className={styles.linksContainer}>
        <div className={styles.linksBorderWrapper}>
          <div className={styles.linksBorder} />
        </div>
        <div className={styles.linkWrapper}>{linkContent}</div>
        <div className={styles.linkWrapperSmall}>{open && linkContent}</div>
      </div>
    </div>
  );
};

export default CommonFooterLinks;
