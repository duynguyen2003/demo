"use client";
import styles from "../css/page.module.css";
import VideoFeed from "../components/VideoFeed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCompass, faUser, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className={styles.container}>
      <aside className={styles.sidebar}>
        <div className={styles.logo}>VIDEOSHORT</div>
        <nav className={styles.menu}>
          <div className={`${styles.menuItem} ${styles.menuItemActive}`}>
            <FontAwesomeIcon icon={faHouse} className={styles.menuIcon} />
            <span>Trang chủ</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faCompass} className={styles.menuIcon} />
            <span>Khám phá</span>
          </div>
          <div className={styles.menuItem}>
            <FontAwesomeIcon icon={faUser} className={styles.menuIcon} />
            <span>Hồ sơ</span>
          </div>
        </nav>
      </aside>

      <main className={styles.main}>
        <VideoFeed /> 
      </main>

      <nav className={styles.bottomNav}>
        <div className={`${styles.navItem} ${styles.menuItemActive}`}>
          <FontAwesomeIcon icon={faHouse} className={styles.bottomNavIcon} />
          <span>Trang chủ</span>
        </div>
        <div className={styles.navItem}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.bottomNavIcon} />
          <span>Tìm kiếm</span>
        </div>
        <div className={styles.navItem}>
          <FontAwesomeIcon icon={faUser} className={styles.bottomNavIcon} />
          <span>Hồ sơ</span>
        </div>
      </nav>
    </div>
  );
}

