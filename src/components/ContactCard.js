import React from 'react'
import '../styles/Contact.css'

function ContactCard(props) {
  return (
    <div>
        <div className="contact-card">
        <div className='contact-icon'> {props.icon}</div>
          <div className="contact-address">
          <p>{props.title}</p>
          <p>{props.address}</p>
          </div>
        </div>
    </div>
  )
}

export default ContactCard
