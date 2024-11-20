import React from 'react'
import style from './AboutUs.module.css'
import photo1 from './contact-banner.png'
import photo2 from './phone.svg'
import photo3 from './mail.svg'
import photo4 from './image_ (7).webp'
import photo5 from './image_ (5).webp'
import photo6 from './image_ (8).webp'
import photo7 from './image_ (3).webp'
import photo8 from './image_ (4).webp'
import photo9 from './image_ (6).webp'
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";
const Touch = () => {
  return (
    <div>
      <div className={style.first_cont}>
        <img src={photo1} alt="" />
        <p className={style.p}>Contact</p>
        <p className={style.p1}>Please complete the form below and we will get back to you soon.</p>
      </div>

      <div className={style.second_cont}>

        <div className={style.sub_cont1}>
          <div className={style.form1}>
            <form action="">
              <input type="text" placeholder='Name *' />
              <input type="email" placeholder='Email *' />
              <input type="text" placeholder='Select topic' />
              <input type="number" placeholder='+91' />
              {/* <select name="count" id="num">
              </select> */}
            </form>
          </div>

          <div className={style.form2}>
            <input type="text" />
          </div>

          <div className={style.form3}>
            <textarea name="message" rows="7" cols="117" >
              Write your message..
            </textarea>
          </div>

          <div className={style.form4}>
            <button type='submit'>Submit</button>
          </div>
        </div>

        <div className={style.sub_cont2}>

          <div className={style.para1}>
            <p className={style.p1_cont2}>Contact Us By Phone</p>
            <p className={style.p2_cont2}>Number Or Email Address</p>
          </div>
                <div className={style.vvv}></div>
          <div className={style.para2}>
            <p className={style.num_cont2}><img src={photo2} alt="" />1800 572 7905</p>
            <p className={style.mail_cont2}><img src={photo3} alt="" />hello@testyantraglobal.com</p>
          </div>

        </div>

        <div className={style.sub_cont3}>
          <p className={style.p1_cont3}>Reach out to us at your nearest office.</p>
        </div>

        <div className={style.sub_cont4}>

          <div className={style.sub_cards}>
            <img src={photo4} alt="" />
            <h3 className={style.txt_cont4}>United States of America</h3>
            <p>99 South Almaden Blvd, Suite 600, San Jose,
              <br />
              California, CA 95113
            </p>
            <p>Ph: 1800 572 7905</p>
          </div>

          <div className={style.sub_cards}>
            <img src={photo5} alt="" />
            <h3 className={style.txt_cont4}>Canada</h3>
            <p>120 Adelaide Street West, Suite 2500 Toronto,
              <br />
              ON, M5H 1T1, Canada
            </p>
            <p>
              Ph: 1800 572 7905
            </p>
          </div>

          <div className={style.sub_cards}>
            <img src={photo6} alt="" />
            <h3 className={style.txt_cont4}>United Kingdom</h3>
            <p>1 Elmfield Park, Bromley - BR1 1LU, United
              <br />
              Kingdom
            </p>
            <p>Ph: 0800 949 6909</p>
          </div>

          <div className={style.sub_cards}>
            <img src={photo7} alt="" />
            <h3 className={style.txt_cont4}>Ireland</h3>
            <p>The black church, St. Mary’s place, Dublin,
              <br />
              Ireland - D07 P4AX
            </p>
            <p>Ph: 1800 851 886</p>
          </div>

          <div className={style.sub_cards}>
            <img src={photo8} alt="" />
            <h3 className={style.txt_cont4}>Netherlands</h3>
            <p>Vliegend Hertlaan 15-97, 3526 KT Utrecht,
              <br />
              Netherlands
            </p>
            <p>Ph: +31 308 992 386</p>
          </div>

          <div className={style.sub_cards}>
            <img src={photo9} alt="" />
            <h3 className={style.txt_cont4}>India</h3>
            <p>#88, 3rd Floor, Brigade Chambers, Gandhi
              <br />
              Bazaar Main Rd, Basavanagudi, Bangalore-
              <br />
              560004 Karnataka, India
            </p>
            <p>Ph: 1800 203 9989</p>
          </div>
        </div>

        <div>
          <footer>
            <div className={style.footer_container}>
              <div className={style.footer_heading}>
                <h1>Subscribe to our Newsletter!</h1>
                <div className={style.search_container}>
                  <input className={style.search} type="email" placeholder='Enter Your Business Email' />
                  <button className={style.footer_btn}>Subscribe</button>
                </div>
              </div>

              <div className={style.footer_text}>

                <div className={style.footer_text1}>
                  <img src={"https://www.testyantraglobal.com/images/partnerlogo2.svg"} alt="" />

                  <p>Test Yantra Global is an Exclusive Platinum Partner of FireFlink.</p>
                  <p>Let's get socially connected...</p>

                  <div className={style.allIcon}>
                    <span><FaLinkedin /></span>
                    <span><FaYoutube /></span>
                    <span><FaTwitter /></span>
                    <span><IoLogoFacebook /> </span>
                    <span><IoLogoInstagram /></span>
                  </div>
                </div>


                <div className={style.footer_text2}>
                  <div className={style.footer_service}>
                    <h1>Services</h1>
                    <h2></h2>
                    <br />
                    <span>Software Testing (TaaS)</span>
                    <br /><br />
                    <span>Software Development</span>
                    <br /><br />
                    <span>Skills Enhancement</span>
                    <br /><br />
                    <span>IT Consulting</span>
                    <br /><br />
                    <span>Crowd Testing</span>
                  </div>


                  <div className={style.footer_service}>
                    <h1>Quick Links</h1>
                    <h2></h2>
                    <br />
                    <span>About Us</span>
                    <br /><br />
                    <span>Fireflink</span>
                    <br /><br />
                    <span>Article</span>
                    <br /><br />
                    <span>Contact</span>
                  </div>


                  <div className={style.footer_service}>
                    <h1>Contacts</h1>
                    <h2></h2>
                    <br />
                    <p><b>Address:</b>120 Adelaide Street</p>
                    <p>West,</p>
                    <p>Suite 2500, Toronto, ON, M5H 1T1,</p>
                    <p>Canada.</p><br />
                    <p><b>Email:</b>hello@testyantraglobal.com</p><br />
                    <p><b>Phone:</b>1800 572 7905</p>
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
    </div>
  )
}

export default Touch
