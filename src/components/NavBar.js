import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import styles from "./styles/NavBar.module.scss";

library.add(fab);

const NavBar = () => {
  return (
    <nav className={styles["nav-bar"]}>
      {/* <img src="https://i.pinimg.com/originals/90/ca/23/90ca238d91c96dc486dd8c618ebbf925.jpg" /> */}
      <div className={styles["top-div"]}>
        <div className={styles["image"]}>Image</div>
        <ul className={styles["nav-list"]}>
          <li>MODELS</li>
          <li>LIFESTYLE</li>
          <li>SHOP</li>
          <li>TEST DRIVE</li>
        </ul>
      </div>
      <div className={styles["bottom-div"]}>
        <ul className={styles["social-links"]}>
          <li>
            <FontAwesomeIcon icon={["fab", "twitter"]} />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "google-plus-g"]} />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "vimeo-v"]} />
          </li>
          <li>
            <FontAwesomeIcon icon={["fab", "pinterest-p"]} />
          </li>
        </ul>
        <small className={styles["copyright-info"]}>
          &#169; 2015 PIAGGIO & C.S.P.A - P.I.V.A
        </small>
      </div>
    </nav>
  );
};

export default NavBar;
