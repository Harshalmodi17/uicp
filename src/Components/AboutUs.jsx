import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onRectangle5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHomeTextClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onClassesTextClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.rectangle2} />
      <div className={styles.rectangle3} />
      <div className={styles.rectangle4} />
      <div className={styles.rectangle5} onClick={onRectangle5Click} />
      <div className={styles.rectangle6} />
      <div className={styles.rectangle7} />
      <div className={styles.rectangle8} />
      <div className={styles.rectangle9} />
      <div className={styles.rectangle10} />
      <div className={styles.rectangle11} />
      <div className={styles.image} />
      <div className={styles.rectangle12} />
      <img className={styles.rectangleIcon} alt="" src="/rectangle@2x.png" />
      <div className={styles.image1} />
      <div className={styles.rectangle13} />
      <div className={styles.rectangle14} />
      <div className={styles.rectangle15} />
      <div className={styles.rectangle16} />
      <div className={styles.rectangle17} />
      <img className={styles.rectangleIcon1} alt="" src="/rectangle@2x.png" />
      <div className={styles.rectangle18} />
      <div className={styles.image2} />
      <div className={styles.rectangle19} />
      <div className={styles.image3} />
      <div className={styles.rectangle20} />
      <div className={styles.rectangle21} />
      <div className={styles.rectangle22} />
      <div className={styles.rectangle23} />
      <div className={styles.rectangle24} />
      <div className={styles.rectangle25} />
      <div className={styles.rectangle26} />
      <div className={styles.rectangle27} />
      <div className={styles.rectangle27} />
      <div className={styles.rectangle28} />
      <div className={styles.rectangle28} />
      <div className={styles.rectangle28} />
      <div className={styles.rectangle31} />
      <div className={styles.rectangle32} />
      <div className={styles.rectangle33} />
      <div className={styles.rectangle34} />
      <div className={styles.image5} />
      <div className={styles.rectangle35} />
      <div className={styles.image6} />
      <div className={styles.rectangle36} />
      <div className={styles.image7} />
      <div className={styles.rectangle37} />
      <div className={styles.image8} />
      <div className={styles.rectangle38} />
      <div className={styles.rectangle39} />
      <div className={styles.rectangle40} />
      <div className={styles.rectangle41} />
      <div className={styles.rectangle42} />
      <div className={styles.rectangle43} />
      <div className={styles.rectangle44} />
      <div className={styles.rectangle45} />
      <div className={styles.rectangle46} />
      <div className={styles.rectangle47} />
      <div className={styles.rectangle48} />
      <div className={styles.rectangle49} />
      <div className={styles.rectangle50} />
      <div className={styles.rectangle51} />
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.rectangle52} />
      <div className={styles.rectangle53} />
      <div className={styles.rectangle54} />
      <div className={styles.rectangle55} />
      <div className={styles.rectangle56} />
      <img className={styles.frameIcon1} alt="" src="/frame.svg" />
      <div className={styles.rectangle57} />
      <div className={styles.rectangle58} />
      <div className={styles.rectangle59} />
      <div className={styles.rectangle60} />
      <div className={styles.rectangle61} />
      <div className={styles.rectangle62} />
      <div className={styles.rectangle63} />
      <div className={styles.rectangle64} />
      <img className={styles.frameIcon2} alt="" src="/frame.svg" />
      <div className={styles.rectangle65} />
      <div className={styles.rectangle66} />
      <div className={styles.rectangle67} />
      <div className={styles.rectangle68} />
      <div className={styles.rectangle69} />
      <img className={styles.frameIcon3} alt="" src="/frame.svg" />
      <div className={styles.rectangle70} />
      <div className={styles.rectangle71} />
      <div className={styles.rectangle72} />
      <div className={styles.rectangle73} />
      <div className={styles.rectangle74} />
      <div className={styles.rectangle75} />
      <div className={styles.image9} />
      <div className={styles.rectangle76} />
      <div className={styles.image10} />
      <div className={styles.rectangle77} />
      <div className={styles.rectangle78} />
      <div className={styles.rectangle79} />
      <div className={styles.rectangle80} />
      <div className={styles.rectangle81} />
      <div className={styles.rectangle82} />
      <div className={styles.rectangle83} />
      <div className={styles.rectangle84} />
      <div className={styles.rectangle85} />
      <div className={styles.rectangle86} />
      <div className={styles.rectangle87} />
      <div className={styles.rectangle88} />
      <div className={styles.rectangle89} />
      <div className={styles.rectangle90} />
      <div className={styles.rectangle91} />
      <div className={styles.rectangle92} />
      <div className={styles.brauss}>BRAUSS</div>
      <div className={styles.home} onClick={onHomeTextClick}>
        Home
      </div>
      <div className={styles.about}>About</div>
      <div className={styles.classes} onClick={onClassesTextClick}>
        Classes
      </div>
      <div className={styles.syllabus}>Syllabus</div>
      <div className={styles.news}>News</div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact Us
      </div>
      <div className={styles.ourStory}>OUR STORY</div>
      <div className={styles.whoWeAre}>Who We Are</div>
      <div className={styles.atBraussWe}>
        At BRAUSS, we believe that every student has the potential to succeed.
        Our college was founded in San Francisco in 2000, and we're proud to
        reflect the vibrant energy of the area. Our team is passionate and
        skilled, and we're committed to helping our students become successful
        professionals who can make a real impact on the world. Whether you're
        looking to start a new career or advance in your current one, we're here
        to help you reach your potential.
      </div>
      <div className={styles.atBraussWe1}>
        At BRAUSS, we believe that every student has the potential to succeed.
        Our college was founded in San Francisco in 2000, and we're proud to
        reflect the vibrant energy of the area. Our team is passionate and
        skilled, and we're committed to helping our students become successful
        professionals who can make a real impact on the world. Whether you're
        looking to start a new career or advance in your current one, we're here
        to help you reach your potential.
      </div>
      <div className={styles.whyChooseBrauss}>WHY CHOOSE BRAUSS</div>
      <div className={styles.makingADifference}>Making a Difference</div>
      <div className={styles.atBraussWere}>
        At BRAUSS, we're passionate about providing transformative learning
        experiences that help our students grow both inside and outside the
        classroom. Our college is committed to excellence, and our team members
        are dedicated to helping our students become successful professionals
        who can make a real impact on the world. If you're ready to take your
        future into your own hands, join us today.
      </div>
      <div className={styles.learnMore}>Learn More</div>
      <div className={styles.ourValues}>OUR VALUES</div>
      <div className={styles.excellenceInEducation}>
        Excellence in Education
      </div>
      <div className={styles.atBraussWere1}>
        At BRAUSS, we're committed to providing an enriched learning environment
        that helps our students get ahead. Our college was founded in San
        Francisco in 2000, and we're proud to reflect the diverse backgrounds
        and cultures of the area. We're here to help our students learn, create,
        and grow together, and we're always eager to help you prepare for your
        future.
      </div>
      <div className={styles.learnMore1}>Learn More</div>
      <div className={styles.howWeTeach}>HOW WE TEACH</div>
      <div className={styles.aDetailedExplanation}>A Detailed Explanation</div>
      <div className={styles.atBraussWere2}>
        At BRAUSS, we're committed to making sure that our students get the best
        possible education. We provide a range of courses and programs that are
        designed to help our students succeed, both inside and outside the
        classroom. Whether you're looking to start a new career or advance in
        your current one, we're here to help you reach your potential.
      </div>
      <div className={styles.atBraussWere3}>
        At BRAUSS, we're committed to making sure that our students get the best
        possible education. We provide a range of courses and programs that are
        designed to help our students succeed, both inside and outside the
        classroom. Whether you're looking to start a new career or advance in
        your current one, we're here to help you reach your potential.
      </div>
      <div className={styles.whatWeOffer}>WHAT WE OFFER</div>
      <div className={styles.exceptionalEducation}>Exceptional Education</div>
      <div className={styles.atBraussWere4}>
        At BRAUSS, we're proud to offer a range of benefits and special features
        that set us apart from the competition. Our college is committed to
        excellence, and we're dedicated to helping our students achieve their
        goals. Whether you're looking for personalized attention, outstanding
        quality, or a nationally recognized education, we've got you covered.
      </div>
      <div className={styles.personalAttention}>PERSONAL ATTENTION</div>
      <div className={styles.outstandingQuality}>Outstanding Quality</div>
      <div className={styles.atBraussWe2}>
        At BRAUSS, we believe that every student deserves personalized attention
        and support. That's why we're committed to providing a learning
        environment that's focused on the needs of each individual student.
      </div>
      <div className={styles.onTime}>ON TIME</div>
      <div className={styles.topNotch}>Top-Notch</div>
      <div className={styles.atBraussWere5}>
        At BRAUSS, we're committed to providing outstanding quality in
        everything we do. Whether it's our courses, programs, or services, we
        strive to exceed your expectations and deliver the best possible
        experience.
      </div>
      <div className={styles.nationalRecognition}>NATIONAL RECOGNITION</div>
      <div className={styles.excellence}>Excellence</div>
      <div className={styles.atBraussWere6}>
        At BRAUSS, we're proud to offer nationally recognized courses and
        programs that are designed to help our students succeed. We're committed
        to excellence, and we're here to help you achieve your goals.
      </div>
      <div className={styles.locallyOwned}>LOCALLY OWNED</div>
      <div className={styles.outstandingQuality1}>Outstanding Quality</div>
      <div className={styles.atBraussWere7}>
        At BRAUSS, we're proud to be a locally owned and operated college that's
        committed to providing outstanding quality in everything we do. Whether
        you're looking for a nationally recognized education or personalized
        attention, we've got you covered.
      </div>
      <div className={styles.studentExperience}>STUDENT EXPERIENCE</div>
      <div className={styles.excellenceInEducation1}>
        Excellence in Education
      </div>
      <div className={styles.atBraussWere8}>
        At BRAUSS, we're committed to providing an enriched learning environment
        that helps our students get ahead. Our college was founded in San
        Francisco in 2000, and we're proud to reflect the diverse backgrounds
        and cultures of the area. We're here to help our students learn, create,
        and grow together, and we're always eager to help you prepare for your
        future.
      </div>
      <div className={styles.learnMore2}>Learn More</div>
      <div className={styles.brauss1}>BRAUSS</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.infomysitecom}>info@mysite.com</div>
      <div className={styles.terryFrancineStreet}>
        000 ABC Street, XY City, PQ Country, 000000
      </div>
      <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
      <img className={styles.image5Icon} alt="" src="/image-5@2x.png" />
    </div>
  );
};

export default AboutUs;
