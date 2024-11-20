import React from "react";
import style from "./Home.module.css";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa6";
import Slider from "react-slick";
import CountUp from "react-countup";
import ban1 from "./banner1.png";
import ban2 from "./banner2.png";
import ban3 from "./banner3.png";
import cardOne from "./test1.jpg";
import cardTwo from "./test2.jpg";
import cardThree from "./test3.jpg";
import cardFour from "./test4.jpg";
import cardFive from "./test5.jpg";
import cardSix from "./test6.jpg";
import cardSeven from "./test7.jpg";
import cardEight from "./test8.jpg";
import cardNine from "./test9.jpg";
import Article1 from "./image_ (2).webp";
import Article2 from "./image_ (1).webp";
import Article3 from "./image_.webp";
import thumbnail from "./video-thumbnail5.png";
import Image from "./footer.png";
import Image2 from "./footer2.png";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";
const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className="flex border border-red-500">
        <div className="w-[650px] h-[350px] flex justify-center items-start flex-col ml-[65px] mt-[60px] p-2.5">
          <h1 className="text-[#162d52] font-bold text-lg">
            With Test Yantra Global
          </h1>
          <TypeAnimation
            className="text-primary font-bold"
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Unify Web, Mobile, API, and DB Testing..",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Realize Cost-Effective Testing..",
              1000,
              "Build Custom Applications..",
              1000,
              "Drive AI Automation Testing..",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />

          <p className=" mb-4">
            Test Yantra Global's 5,000+ employees provide a range of innovative
            technology <br />
            solutions to digitally transform your organization.
          </p>
          <p className="mb-4">
            From IT consulting, application design and development, to automated
            AI enabled test management platform that unifies web, android, iOS,
            API, and DB testing, we have the expertise, technology, experience,
            and tools to help transform your business.
          </p>

          <Link className="bg-[#133864] text-white px-5 py-2.5 rounded-md font-medium my-5">
            Get Started Free -
          </Link>
        </div>
        <div className="w-1/2">
          <div className="w-10/12 border border-red-700 ">
            <Slider {...settings}>
              <div className={style.conta2}>
                <img src={ban1} alt="" />
                <h1>
                  Turn your Manual Testers
                  <br />
                  into Automation Testers
                </h1>
                <ul>
                  <li>Easy to use</li>
                  <li>No Code Natural Language Processing</li>
                  <li>Begin automating in hours</li>
                </ul>
              </div>
              <div className={style.conta2}>
                <h3>
                  <img src={ban2} alt="" />
                </h3>
              </div>
              <div className={style.conta2}>
                <h3>
                  <img src={ban3} alt="" />
                </h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className={style.Third_container}>
        <div className={style.first_row}>
          <h1>
            Leverage Test Yantra Global's range
            <br />
            of Professional Services
          </h1>
        </div>
        <div className={style.second_row}>
          <div className={style.first_card}>
            <img src={cardOne} alt="" />
            <h1>
              Software Testing
              <br />
              Services (TaaS)
            </h1>
            <p>
              we offer cost effective,reliable and scalable software testing
              services.
            </p>
          </div>
          <div className={style.second_card}>
            <img src={cardTwo} alt="" />
            <h1>IT Software Skills Enhancement</h1>
            <p>
              Our customized and curated training models help organizations
              elevate their IT quotient.
            </p>
          </div>
          <div className={style.third_card}>
            <img src={cardThree} alt="" />
            <h1>Deployment & support Services</h1>
            <p>
              Our team of exports help you craft a winning IT strategy for your
              organization.
            </p>
          </div>
          <div className={style.fourth_card}>
            <img src={cardFour} alt="" />
            <h1>Software Design & Development</h1>
            <p>
              We deliver IT solutions in a wide variety of verticals and
              businesses to the next level.
            </p>
          </div>
          <div className={style.fifth_card}>
            <img src={cardFive} alt="" />
            <h1>Crowd Testing</h1>
            <p>
              We offer comprehensive crowd-testing services, leveraging a global
              network of skilled testers.
            </p>
          </div>
        </div>

        <div className={style.third_row}>
          <img src={thumbnail} alt="" />
        </div>
      </div>

      <div className={style.fourth_cont}>
        <div className={style.row1}>The numbers speak for themselves</div>
        <div className={style.ccc}>
          <div className={style.row2}>
            <img src={cardSix} alt="" />
            <div className={style.counting}>
              <CountUp start={0} end={6} duration={5} />
            </div>
            <p>
              Countries &
              <br />
              Growing
            </p>
          </div>

          <div className={style.row3}>
            <img src={cardSeven} alt="" />
            <div className={style.counting}>
              <CountUp start={0} end={3000} suffix="+" duration={2.5} />
            </div>
            <p>Clients Across Globe</p>
          </div>

          <div className={style.row4}>
            <img src={cardEight} alt="" />
            <div className={style.counting}>
              <CountUp start={0} end={5000} suffix="+" duration={2.5} />
            </div>
            <p>
              Total Team
              <br />
              Members
            </p>
          </div>

          <div className={style.row5}>
            <img src={cardNine} alt="" />
            <div className={style.counting}>
              <CountUp start={0} end={12000} suffix="+" duration={2.5} />
            </div>
            <p>
              On Demand Test
              <br />
              Engineers
            </p>
          </div>
        </div>
      </div>

      <div className={style.container5}>
        <div className={style.article_container}>
          <h1>Our Recent Articles</h1>
          <div className={style.article_cardContainer}>
            {/* card 1 */}
            <div className={style.article_card}>
              <div className={style.article_image}>
                <img src={Article1} alt="" />
              </div>
              <div className={style.article_content}>
                <span className={style.article_blog1}>Blog </span>
                <span className={style.article_blog2}>| Software Testing</span>
                <h2>
                  Comprehensive Guide To Developing Test Scripts For Software
                  Testing
                </h2>
                <p>
                  Effective software testing is essential for the delivery of
                  high-quality software products. The development of test
                  scripts is a critical...
                </p>
              </div>
              <button className={style.article_read}>
                Read More <FaArrowRight />
              </button>
            </div>

            {/* card 2 */}
            <div className={style.article_card}>
              <div className={style.article_image}>
                <img src={Article2} alt="" />
              </div>
              <div className={style.article_content}>
                <span className={style.article_blog1}>Blog </span>
                <span className={style.article_blog2}>
                  | Categories of Tests
                </span>
                <h2>Guidelines for Writing Effective Unit Tests</h2>
                <p>
                  Learn effective unit testing techniques to enhance code
                  quality and development speed. Discover essential tools...
                </p>
              </div>
              <button className={style.article_read}>
                Read More <FaArrowRight />
              </button>
            </div>

            {/* card 3 */}
            <div className={style.article_card}>
              <div className={style.article_image}>
                <img src={Article3} alt="" />
              </div>
              <div className={style.article_content}>
                <span className={style.article_blog1}>Blog </span>
                <span className={style.article_blog2}>| Test Data</span>
                <h2>
                  Automation Testing Tools: Selenium, Cypress, Playwright, Robot
                  Framework vs. FireFlink
                </h2>
                <p>
                  Dive into the specifics of renowned automation tools like
                  Selenium, Cypress, Playwright, and Robot Framework...
                </p>
              </div>
              <button className={style.article_read}>
                Read More <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <footer>
          <div className={style.footer_container}>
            <div className={style.footer_heading}>
              <h1>Subscribe to our Newsletter!</h1>
              <div className={style.search_container}>
                <input
                  className={style.search}
                  type="email"
                  placeholder="Enter Your Business Email"
                />
                <button className={style.footer_btn}>Subscribe</button>
              </div>
            </div>

            <div className={style.footer_text}>
              <div className={style.footer_text1}>
                <img
                  src={
                    "https://www.testyantraglobal.com/images/partnerlogo2.svg"
                  }
                  alt=""
                />

                <p>
                  Test Yantra Global is an Exclusive Platinum Partner of
                  FireFlink.
                </p>
                <p>Let's get socially connected...</p>

                <div className={style.allIcon}>
                  <span>
                    <FaLinkedin />
                  </span>
                  <span>
                    <FaYoutube />
                  </span>
                  <span>
                    <FaTwitter />
                  </span>
                  <span>
                    <IoLogoFacebook />{" "}
                  </span>
                  <span>
                    <IoLogoInstagram />
                  </span>
                </div>
              </div>

              <div className={style.footer_text2}>
                <div className={style.footer_service}>
                  <h1>Services</h1>
                  <h2></h2>
                  <br />
                  <span>Software Testing (TaaS)</span>
                  <br />
                  <br />
                  <span>Software Development</span>
                  <br />
                  <br />
                  <span>Skills Enhancement</span>
                  <br />
                  <br />
                  <span>IT Consulting</span>
                  <br />
                  <br />
                  <span>Crowd Testing</span>
                </div>

                <div className={style.footer_service}>
                  <h1>Quick Links</h1>
                  <h2></h2>
                  <br />
                  <span>About Us</span>
                  <br />
                  <br />
                  <span>Fireflink</span>
                  <br />
                  <br />
                  <span>Article</span>
                  <br />
                  <br />
                  <span>Contact</span>
                </div>

                <div className={style.footer_service}>
                  <h1>Contacts</h1>
                  <h2></h2>
                  <br />
                  <p>
                    <b>Address:</b>120 Adelaide Street
                  </p>
                  <p>West,</p>
                  <p>Suite 2500, Toronto, ON, M5H 1T1,</p>
                  <p>Canada.</p>
                  <br />
                  <p>
                    <b>Email:</b>hello@testyantraglobal.com
                  </p>
                  <br />
                  <p>
                    <b>Phone:</b>1800 572 7905
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={style.copyright}>
            <p>Copyright ©2024 Test Yantra Global. All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
