import "../styles/Footer.scss"

import facebook from "../assets/Images/facebook.svg"
import instagram from "../assets/Images/instagram.svg"
import linkedin from "../assets/Images/linkedin.svg"
import twitter from "../assets/Images/twitter.svg"
import Privacy from "../assets/Images/Privacy.svg"
import small_logo from "../assets/Images/small_logo.png"
import arrow from "../assets/Images/arrow.svg"

export default function  Footer() {
    const investors = ["Business In GCC", "Investment Projects", "Become a Partner"];
    const company = ["Our Services", "News", "FAQ"];
    const buttons = ["Projects", "Franchise Opp.", "Business In GCC", "Get In Touch"]

  return (
    <div className='Footer'>
        <div className='Footer_front'>
            <h2>We connect investors with impactful investments that align with their values and financial goals.
            <p>Want to learn more, or interested in working together? Request our team to connect with you.</p>
            </h2>
            
        </div>

        <div className='Footer_midle'>

            <div className="footer_links">
                <div className='for_investors'>
                    <h3>For Investors</h3>
                    <ul>
                        {investors.map((elem, index) =>
                        <li key={index}>
                            {elem}
                        </li>
                        )}
                    </ul>
                </div>

                <div className='company'>
                    <h3>Company</h3>
                    <ul>
                        {company.map((elem, index) =>
                        <li key={index}>
                            {elem}
                        </li>
                        )}
                    </ul>
                </div>
            </div>

            <div className='newsletter'>
                <h3>Newsletter</h3>
                <p>Subscribe to our newsletter to get our latest news and updates.</p>
                {/* <div className="email_input_wrapper"> */}
                    <div className="email_input">
                        <input type="email" placeholder='Enter Your Email' />
                        <button>Subscribe</button>
                    </div>
                {/* </div> */}
                
            </div>
        </div>

        <div className='Footer_bottom_wrapper'>

        <div className='Footer_bottom'>
            <div className='Footer_bottom_left'>
                <img src={Privacy} alt="Privacy" />
                <p>2023 IgniteHub</p>
                <span>|</span>
                <p>Privacy Policy</p>
            </div>
        
            <div className='icons'>
                <img src={facebook} alt="facebook" />
                <img src={twitter} alt="twitter" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
            </div>
        </div>
        </div>

        <div className="footer_buttons_wrapper">
        
            <div className="footer_buttons">
                <img src={small_logo} alt="small_logo" />
                <ul>
                    {buttons.map((elem, index) =>
                    <li key={index}>
                        <button>{elem}</button>
                    </li>
                    )}
                </ul>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    </div>
  )
}
