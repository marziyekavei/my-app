import React, {useEffect} from 'react'
import './faq.css'
import { MdOutlineLibraryBooks } from 'react-icons/md'
import { questions } from './data'
import Question from './Question'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Faq = () => {

  useEffect(() => {
    AOS.init({
      duration:1000
    });
  }, [])

  return (
    <section id='faq'>
      <div className='container faq' >
        <div className='faq-title' data-aos="fade-up">
          <MdOutlineLibraryBooks color='orangered' size={30} />
          <h2> سوالات متداول </h2>
          <p> لورم های الکی و فلان چاپگران کرافیک نمیدونم چی چی و اینا لورم های الکی و فلان چاپگران کرافیک نمیدونم چی چی و اینا هست لورم های الکی و فلان چاپگران کرافیک هست </p>
        </div>
        <div className='questions'>
          {
            questions && questions.map((question) =>
             <Question key={question.id} 
             title={question.title} 
             answer={question.answer}/>
            )
          }
        </div>
      </div>
    </section>
  );
}

export default Faq
