import React, {useEffect} from 'react'
import { BsFillBookmarkStarFill } from 'react-icons/bs';
import phoneFeatures from '../../assets/phone-features.png';
import './features.css';
import {FeaturesList} from './data.js'
import {BsHexagon} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Feature = () => {

  useEffect(() => {
    AOS.init({
      duration:1000
    });
  }, [])

  return (
    <section id='features'>
      <div className="container features">
        <div className='title' data-aos="fade-up">
          <BsFillBookmarkStarFill color='orangered' size={30} />
          <h2> ویژگی های اصلی </h2>
          <p> لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است </p>
        </div>
        <div className='features-content'>
          <div className='feature-right' data-aos="fade-right">
            <img src={phoneFeatures} alt="" />
          </div>

          <div className='feature-left' data-aos="fade-left">
            {
              FeaturesList.map(item => (
                <div className='feature' key={item.id}>
                  <div className='feature-icon'>
                    <BsHexagon color='#fc5412' size={55}/>
                  <div className='inner-icon'>
                    {item.icon}
                  </div>
                  </div>
                  <div className='feature-text'>
                    <h2>{item.heading}</h2>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </section>
  )
}

export default Feature
