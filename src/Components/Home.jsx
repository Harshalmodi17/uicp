import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const onRectangle6Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onClassesTextClick = useCallback(() => {
    navigate("/classes");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.home}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.rectangle2} />
      <div className={styles.rectangle3} />
      <div className={styles.rectangle4} />
      <div className={styles.rectangle5} />
      <div className={styles.rectangle6} onClick={onRectangle6Click} />
      <div className={styles.rectangle7} />
      <div className={styles.rectangle8} />
      <div className={styles.rectangle9} />
      <div className={styles.rectangle10} />
      <div className={styles.image} />
      <div className={styles.rectangle11} />
      <img className={styles.imageIcon} alt="" src="/image@2x.png" />
      <div className={styles.image1} />
      <div className={styles.rectangle12} />
      <div className={styles.rectangle13} />
      <div className={styles.rectangle14} />
      <div className={styles.rectangle15} />
      <div className={styles.rectangle16} />
      <div className={styles.rectangle17} />
      <div className={styles.rectangle18} />
      <div className={styles.rectangle19} />
      <img className={styles.imageIcon1} alt="" src="/image@2x.png" />
      <img className={styles.imageIcon2} alt="" src="/image@2x.png" />
      <div className={styles.image2} />
      <div className={styles.image3} />
      <div className={styles.rectangle20} />
      <div className={styles.rectangle21} />
      <div className={styles.rectangle22} />
      <div className={styles.rectangle23} />
      <div className={styles.rectangle24} />
      <div className={styles.rectangle25} />
      <div className={styles.image4} />
      <div className={styles.rectangle26} />
      <div className={styles.rectangle27} />
      <div className={styles.rectangle28} />
      <div className={styles.rectangle29} />
      <div className={styles.rectangle30} />
      <div className={styles.rectangle31} />
      <div className={styles.rectangle32} />
      <div className={styles.rectangle33} />
      <div className={styles.rectangle34} />
      <div className={styles.image5} />
      <div className={styles.rectangle35} />
      <div className={styles.image6} />
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
      <div className={styles.rectangle46} />
      <div className={styles.rectangle47} />
      <div className={styles.rectangle48} />
      <div className={styles.rectangle49} />
      <div className={styles.rectangle50} />
      <div className={styles.rectangle51} />
      <div className={styles.rectangle52} />
      <div className={styles.rectangle53} />
      <div className={styles.rectangle54} />
      <div className={styles.rectangle55} />
      <img className={styles.frameIcon} alt="" src="/frame.svg" />
      <div className={styles.rectangle56} />
      <div className={styles.rectangle57} />
      <div className={styles.rectangle58} />
      <div className={styles.rectangle59} />
      <div className={styles.rectangle60} />
      <img className={styles.frameIcon1} alt="" src="/frame.svg" />
      <div className={styles.rectangle61} />
      <div className={styles.rectangle62} />
      <div className={styles.rectangle63} />
      <div className={styles.rectangle64} />
      <div className={styles.rectangle65} />
      <div className={styles.rectangle66} />
      <div className={styles.rectangle67} />
      <div className={styles.rectangle68} />
      <img className={styles.frameIcon2} alt="" src="/frame.svg" />
      <div className={styles.rectangle69} />
      <div className={styles.rectangle70} />
      <div className={styles.rectangle71} />
      <div className={styles.rectangle72} />
      <div className={styles.rectangle73} />
      <img className={styles.frameIcon3} alt="" src="/frame.svg" />
      <div className={styles.rectangle74} />
      <div className={styles.rectangle75} />
      <div className={styles.rectangle76} />
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
      <div className={styles.brauss}>BRAUSS</div>
      <div className={styles.home1}>Home</div>
      <div className={styles.about} onClick={onAboutTextClick}>
        About
      </div>
      <div className={styles.classes} onClick={onClassesTextClick}>
        Classes
      </div>
      <div className={styles.syllabus}>Syllabus</div>
      <div className={styles.news}>News</div>
      <div className={styles.contactUs} onClick={onContactUsTextClick}>
        Contact Us
      </div>
      <div className={styles.discoverYourPotential}>
        DISCOVER YOUR POTENTIAL
      </div>
      <div className={styles.educationThatInspires}>
        Education that Inspires
      </div>
      <div className={styles.atBraussWe}>
        At BRAUSS, we believe that every student has the potential to achieve
        greatness. Our passionate educators and engaging curriculum inspire a
        love of learning that will stay with you for life. Come see for yourself
        what makes BRAUSS the right choice for your future success.
      </div>
      <div className={styles.learnMore}>Learn More</div>
      <div className={styles.aboutUs}>ABOUT US</div>
      <div className={styles.ourVision}>Our Vision</div>
      <div className={styles.braussIsA}>
        BRAUSS is a vibrant community of passionate educators and learners,
        dedicated to creating a brighter future for all. Our transformative
        learning experiences will help you grow both in and out of the
        classroom, and our skilled team members are here to support you every
        step of the way. Join us and become part of something truly special.
      </div>
      <div className={styles.discoverMore}>Discover More</div>
      <div className={styles.whatsHappening}>WHAT'S HAPPENING?</div>
      <div className={styles.latestNews}>Latest News</div>
      <div className={styles.stayUpToDateWith}>
        Stay up-to-date with all the latest news and events from BRAUSS. Our
        media room is your go-to source for press releases, announcements, and
        inspiring stories of student success. Bookmark our site and never miss a
        beat!
      </div>
      <div className={styles.celebratingOurTop}>
        Celebrating Our Top Students
      </div>
      <div className={styles.atBraussWere}>
        At BRAUSS, we're proud to celebrate the achievements of our outstanding
        students. Each year, we recognize the top performers across our
        programs, highlighting their dedication, hard work, and exceptional
        talent. Join us in congratulating this year's winners!
      </div>
      <div className={styles.atBraussWere1}>
        At BRAUSS, we're proud to celebrate the achievements of our outstanding
        students. Each year, we recognize the top performers across our
        programs, highlighting their dedication, hard work, and exceptional
        talent. Join us in congratulating this year's winners!
      </div>
      <div className={styles.breakingRecordsIn}>Breaking Records in 2016</div>
      <div className={styles.ourStudentsAre}>
        Our students are achieving amazing things every day, and we're thrilled
        to share their stories with the world. In 2016, one of our brightest
        stars broke a long-standing record in their field, proving that with
        hard work and dedication, anything is possible. Read on for more
        details!
      </div>
      <div className={styles.ourStudentsAre1}>
        Our students are achieving amazing things every day, and we're thrilled
        to share their stories with the world. In 2016, one of our brightest
        stars broke a long-standing record in their field, proving that with
        hard work and dedication, anything is possible. Read on for more
        details!
      </div>
      <div className={styles.localCollegeEarns}>
        Local College Earns High Praise
      </div>
      <div className={styles.braussIsProud}>
        BRAUSS is proud to be recognized as one of the top colleges in the
        region, with a reputation for excellence and innovation. Our world-class
        faculty and cutting-edge programs are changing the face of education,
        and our students are leading the way in their respective fields. Come
        join us and become part of this exciting community!
      </div>
      <div className={styles.braussIsProud1}>
        BRAUSS is proud to be recognized as one of the top colleges in the
        region, with a reputation for excellence and innovation. Our world-class
        faculty and cutting-edge programs are changing the face of education,
        and our students are leading the way in their respective fields. Come
        join us and become part of this exciting community!
      </div>
      <div className={styles.readMore}>Read More</div>
      <div className={styles.theFunctionOf}>
        "THE FUNCTION OF EDUCATION IS TO TEACH ONE TO THINK INTENSIVELY AND TO
        THINK CRITICALLY. INTELLIGENCE PLUS CHARACTER - THAT IS THE GOAL OF TRUE
        EDUCATION."
      </div>
      <div className={styles.martinLutherKing}>Martin Luther King Jr.</div>
      <div className={styles.whatSetsUs}>WHAT SETS US APART</div>
      <div className={styles.aPassionFor}>A Passion for Learning</div>
      <div className={styles.atBraussWere2}>
        At BRAUSS, we're dedicated to providing an educational experience that
        is both challenging and rewarding. Our innovative curriculum, expert
        faculty, and supportive community will help you achieve your goals and
        unlock your full potential.
      </div>
      <div className={styles.flexiblePaymentOptions}>
        Flexible Payment Options
      </div>
      <div className={styles.excellenceInEducation}>
        Excellence in Education
      </div>
      <div className={styles.atBraussWere3}>
        At BRAUSS, we're committed to delivering top-notch education and support
        to all of our students. Our flexible payment options make it easy to
        invest in your future and achieve your dreams. Join us and experience
        the BRAUSS difference for yourself!
      </div>
      <div className={styles.affordableTuition}>Affordable Tuition</div>
      <div className={styles.expertFaculty}>Expert Faculty</div>
      <div className={styles.braussIsProud2}>
        BRAUSS is proud to offer competitive tuition rates without sacrificing
        quality or value. Our expert faculty members bring their real-world
        experience and expertise into the classroom, ensuring that you receive
        the highest quality education possible.
      </div>
      <div className={styles.comprehensiveSupport}>Comprehensive Support</div>
      <div className={styles.atBraussWere4}>
        At BRAUSS, we're committed to providing comprehensive support to all of
        our students, both in and out of the classroom. From academic advising
        to career counseling, we're here to help you achieve your goals and
        succeed in your chosen field.
      </div>
      <div className={styles.atBraussWe1}>
        At BRAUSS, we believe that every student has the potential to achieve
        greatness. Our supportive community, expert faculty, and engaging
        curriculum will help you unlock your full potential and achieve your
        dreams.
      </div>
      <div className={styles.satisfactionGuaranteed}>
        Satisfaction Guaranteed
      </div>
      <div className={styles.realWorldApplications}>
        Real-World Applications
      </div>
      <div className={styles.wereConfidentThat}>
        We're confident that you'll love your experience at BRAUSS - in fact, we
        guarantee it. If for any reason you're not completely satisfied with
        your education, we'll work with you to make it right. Join us and
        discover the real-world applications of your education today!
      </div>
      <div className={styles.exploreMore}>Explore More</div>
      <div className={styles.brauss1}>BRAUSS</div>
      <div className={styles.div}>123-456-7890</div>
      <div className={styles.infomysitecom}>info@mysite.com</div>
      <div className={styles.terryFrancineStreet}>
        000 ABC Street, XY City, PQ Country, 000000
      </div>
      <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
      <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
    </div>
  );
};

export default Home;
