import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        {/* ================================= */}
        <article className='service'>
          <div className="service__head">
            <h3>ERP Software</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Accurate</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SAP S/4 HANA</p>
            </li>
            
          </ul>
        </article>
        {/* end of tax accounting */}

        {/* =========================================== */}
        <article className='service'>
          <div className="service__head">
            <h3>Tax Accounting</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Menyusun Laporan Keuangan </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Aplikasi MYOB</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Aplikasi ATLAS</p>
            </li>
          </ul>
        </article>
        {/* end of tax accounting */}

        
      </div>
    </section>
  )
}

export default Services