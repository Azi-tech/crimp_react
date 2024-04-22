
import Icon from '@ant-design/icons/lib/components/Icon';
import '../../StyleSheets/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyrightOutlined, EnvironmentOutlined, MailOutlined, PhoneOutlined, PhoneTwoTone } from '@ant-design/icons';
import { Flex } from 'antd';
const Footer = () => {
    return(
  
    <footer className='footerStyle'>
      <div className="main-content">
        <div className="left box">
          <h2>About us</h2>
          {/* <FontAwesomeIcon icon={['fas', 'house']} />
          <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
          {/* <IconFont type="icon-tuichu" /> */}
          
          {/* <Icon type="message" style={{ fontSize: '16px', color: 'white' }} theme="outlined" /> */}
          <div className="content">
            <p>At the core of Crimp's philosophy is a commitment to quality, uniqueness, and customer satisfaction. We believe that furniture should not only serve a functional purpose but also tell a story, reflecting the individuality and style of its owner.</p>
            <div className="social">
              <a href="https://facebook.com/coding.np"><span className="fab fa-facebook-f"></span></a>
              <a href="#"><span className="fab fa-twitter"></span></a>
              <a href="https://instagram.com/coding.np"><span className="fab fa-instagram"></span></a>
              <a href="https://youtube.com/c/codingnepal"><span className="fab fa-youtube"></span></a>
            </div>
          </div>
        </div>
        <div className="center box">
          <h2>Address</h2>
          <div className="content">
            <Flex className="place">
             
              <div className="text"> <span className="fas fa-map-marker-alt"><EnvironmentOutlined /> </span>7,Ambai Road Melapalayam</div>
              <div className='text' style={{marginLeft:"30px"}}><p>Tirunelveli - 627005</p></div>
            </Flex>
            <div className="phone">
              <span className="fas fa-phone-alt"><PhoneOutlined /></span>
              <span className="text">+(91) 744 8824 222</span>
            </div>
            <div className="email">
              <span className="fas fa-envelope"><MailOutlined /></span>
              <span className="text">jbhassim93@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="right box">
          <h2>Contact us</h2>
          <div className="content">
            <form action="#">
              <div className="email">
                <div className="text">Email *</div>
                <input type="email" required/>
              </div>
              <div className="msg">
                <div className="text">Message *</div>
                <textarea rows="2" cols="25" required></textarea>
              </div>
              <div>
                <button className='btn btn-danger' type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="bottom">
        <center>
          <span className="credit">Created By <a href="https://www.azitech.com">AZI Tech</a> | </span>
          <span className="far fa-copyright"><CopyrightOutlined /></span><span> 2024 .</span>
        </center>
      </div>
    </footer>


    )
}

export default Footer;