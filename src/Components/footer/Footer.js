import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import {
  FaMapMarkedAlt, FaPhoneAlt, FaFax, FaEnvelope, FaGlobe
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section id='footer'>
      <div className='container footer'>
        <div className='quick-access'>
          <h4> لینک های مفید </h4>
          <div className='footer-links'> 
            <a href="">&bull; پشتیبانی </a>
            <a href="">&bull; درباره ما </a>
            <a href="">&bull; آموزش </a>
            <a href="">&bull; هاستنگ </a>
            <a href="">&bull; پیام رسان </a>
          </div>
        </div>

        <div className='support'>
          <h4> پشتیبانی </h4>
          <div className='footer-links'> 
            <a href="">&bull; پشتیبانی </a>
            <a href="">&bull; درباره ما </a>
            <a href="">&bull; آموزش </a>
            <a href="">&bull; هاستنگ </a>
            <a href="">&bull; پیام رسان </a>
          </div>
        </div>

        <div className='contact'>
          <h4> راه های ارتباطی </h4>
          <div className='contact-footer'>
            <p>
              <FaMapMarkedAlt/> &nbsp; آدرس: تهران میدان آزادی
            </p>
            <p>
              <FaPhoneAlt/> &nbsp; تلفن: 02133445678
            </p>
            <p>
              <FaFax/> &nbsp; فکس: 02133445678
            </p>
            <p>
              <FaEnvelope/> &nbsp; ایمیل: Example@gmail.com  
            </p>
            <p>
              <FaGlobe/> &nbsp; وبسایت: www.example.com
            </p>
          </div>
        </div>

        <div className='logo'>
        <img src={logo}/>
          <p>&copy; copyright 2023. example.com</p>
          
        </div>
      </div>
    </section>
  )
}

export default Footer
