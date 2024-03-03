import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from "./Contact.module.css";

const Contact = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onClassesTextClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  return (
    <div className={styles.contact}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.rectangle2} />
      <div className={styles.rectangle3} />
      <div className={styles.rectangle4} />
      <div className={styles.rectangle5} />
      <div className={styles.rectangle6} />
      <div className={styles.rectangle7} />
      <div className={styles.rectangle8} />
      <div className={styles.rectangle9} />
      <div className={styles.rectangle10} />
      <div className={styles.rectangle11} />
      <div className={styles.rectangle12} />
      <div className={styles.rectangle13} />
      <div className={styles.rectangle14} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangle15} />
      <div className={styles.rectangle16} />
      <div className={styles.rectangle17} />
      <div className={styles.image} />
      <div className={styles.rectangle18} />
      <div className={styles.rectangle19} />
      <div className={styles.rectangle20} />
      <div className={styles.rectangle21}>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.rectangle22} />
      <div className={styles.rectangle23}>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.rectangle24} />
      <div className={styles.rectangle25}>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.rectangle26} />
      <div className={styles.rectangle27} />
      <div className={styles.rectangle28}>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.rectangle29} />
      <div className={styles.rectangle30} />
      <div className={styles.rectangle31}>
        <input type="text" className="form-control" />
      </div>
      <div className={styles.rectangle32} />
      <div className={styles.rectangle33} />
      <div className={styles.rectangle34} />
      <div className={styles.rectangle35} />
      <div className={styles.rectangle36} />
      <div className={styles.rectangle37} />
      <div className={styles.rectangle38} />
      <div className={styles.rectangle39} />
      <div className={styles.rectangle40} />
      <div className={styles.rectangle41} />
      <div className={styles.rectangle42} />
      <div className={styles.rectangle43} />
      <div className={styles.rectangle44} />
      <div className={styles.rectangle45} />
      <div className={styles.brauss}>BRAUSS</div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.classes} onClick={onClassesTextClick}>
        Classes
      </div>
      <div className={styles.syllabus}>Syllabus</div>
      <div className={styles.news}>News</div>
      <div className={styles.contactUs}>Contact Us</div>
      <div className={styles.getInTouch}>GET IN TOUCH</div>
      <div className={styles.reachUsAnytime}>Reach Us Anytime</div>
      <div className={styles.weAreAlways}>
        We are always happy to hear from prospective students, parents, or
        anyone interested in our programs. If you have any questions about our
        curriculum or admission process, please feel free to reach out to us.
      </div>
      <div className={styles.firstName}>First Name</div>
      <div className={styles.lastName}>Last Name</div>
      <div className={styles.email}>Email</div>
      <div className={styles.subject}>Subject</div>
      <div className={styles.message}>Message</div>
      <div className={styles.send}>Send</div>
      <div className={styles.brauss1}>BRAUSS</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.infomysitecom}>info@mysite.com</div>
      <div className={styles.terryFrancineStreet}>
        000 ABC Street, XY City, PQ Country, 000000
      </div>
    </div>
  );
};

export default Contact;
