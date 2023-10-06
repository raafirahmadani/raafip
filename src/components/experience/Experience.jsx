import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from "react-icons/bs"

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>hard skill</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Accurate</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>SAP</h4>
                  <small className='text-light'>beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Excel</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Word</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Canva</h4>
                  <small className='text-light'>beginner</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Web Development</h4>
                  <small className='text-light'>beginner</small>
                </div>
              </article>
            </div>
        </div>
        {/* end of basic skill */}
        <div className="experience__backend">
          <h3>soft skill</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Communication</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Teamwork</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Critical thinking</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Time management</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Organizational</h4>
                  <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
        </div>
      </div>


    </section>
  )
}

export default Experience