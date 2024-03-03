import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Classes.module.css";

const Classes = () => {
  const navigate = useNavigate();

  const onRectangle6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.classes}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.rectangle2} />
      <div className={styles.rectangle3} />
      <div className={styles.rectangle4} />
      <div className={styles.rectangle5} />
      <div className={styles.rectangle6} onClick={onRectangle6Click} />
      <div className={styles.rectangle7} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.image} />
      <div className={styles.rectangle8} />
      <div className={styles.rectangle9} />
      <div className={styles.rectangle10} />
      <div className={styles.rectangle11} />
      <img className={styles.rectangleIcon1} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangle12} />
      <div className={styles.rectangle13} />
      <div className={styles.rectangle14} />
      <div className={styles.rectangle15} />
      <div className={styles.image1} />
      <img className={styles.rectangleIcon2} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangle16} />
      <div className={styles.rectangle17} />
      <div className={styles.rectangle18} />
      <div className={styles.rectangle19} />
      <div className={styles.rectangle20} />
      <div className={styles.rectangle21} />
      <div className={styles.rectangle22} />
      <div className={styles.rectangle23} />
      <div className={styles.rectangle24} />
      <div className={styles.rectangle25} />
      <div className={styles.rectangle26} />
      <div className={styles.rectangle27} />
      <div className={styles.rectangle28} />
      <div className={styles.rectangle29} />
      <div className={styles.rectangle30} />
      <div className={styles.rectangle31} />
      <div className={styles.rectangle32} />
      <div className={styles.rectangle33} />
      <div className={styles.rectangle34} />
      <div className={styles.brauss}>BRAUSS</div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.classes1}>Classes</div>
      <div className={styles.syllabus}>Syllabus</div>
      <div className={styles.news}>News</div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact Us
      </div>
      <div className={styles.ourServices}>OUR SERVICES</div>
      <div className={styles.whatYouNeed}>What You Need</div>
      <div className={styles.atBraussWe}>
        At BRAUSS, we offer a variety of services to help you succeed in
        college. Our services are designed to meet your unique needs and help
        you achieve your academic goals. Explore our services below to learn
        more.
      </div>
      <div className={styles.academicTutoring}>Academic Tutoring</div>
      <div className={styles.ourAcademicTutoring}>
        Our academic tutoring services are designed to help you excel in your
        coursework. Our experienced tutors work one-on-one with you to provide
        personalized support and guidance. Whether you need help with a specific
        assignment or want to improve your overall academic performance, we're
        here to help.
      </div>
      <div className={styles.ourTestPrep}>
        Our test prep services are designed to help you prepare for important
        exams like the SAT, ACT, and GRE. We offer comprehensive test prep
        materials and expert guidance to help you feel confident and prepared on
        test day.
      </div>
      <div className={styles.careerServices}>Career Services</div>
      <div className={styles.atBraussWe1}>
        At BRAUSS, we believe that college is about more than just academics.
        That's why we offer a range of career services to help you prepare for
        life after graduation. From resume writing and interview skills to job
        search strategies, we're here to help you launch your career.
      </div>
      <div className={styles.ourStudyAbroad}>
        Our study abroad programs provide you with the opportunity to explore
        new cultures and gain valuable international experience. We offer a
        variety of programs to fit your interests and schedule, so you can make
        the most of your time abroad.
      </div>
      <div className={styles.researchSupport}>Research Support</div>
      <div className={styles.researchIsA}>
        Research is a critical component of college life, and we're here to help
        you navigate the process. Our research support services provide you with
        the tools and resources you need to conduct effective research, from
        finding sources to organizing your findings.
      </div>
      <div className={styles.ourWritingCenter}>
        Our writing center offers personalized support to help you become a
        stronger writer. Whether you need help with grammar and mechanics or
        want to improve your overall writing skills, our experienced tutors are
        here to help.
      </div>
      <div className={styles.learnMore}>Learn More</div>
      <div className={styles.brauss1}>BRAUSS</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.infomysitecom}>info@mysite.com</div>
      <div className={styles.terryFrancineStreet}>
        000 ABC Street, XY City, PQ Country, 000000
      </div>
    </div>
  );
};

export default Classes;
