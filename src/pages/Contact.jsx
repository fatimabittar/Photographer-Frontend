import React from "react";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

import ContactCard from "../components/ContactCard";
import '../styles/Contact.css'

export const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-details">
        
        <ContactCard icon={ <BsTelephone style={{height:28, width:28}}/>} title="call us" address="00 000 00 000 000"/>
        <ContactCard icon={ <HiOutlineMail style={{height:28, width:28}}/>} title="send us an email" address="info@jaykhawand.com"/>
        <ContactCard icon={ <SlLocationPin style={{height:28, width:28}}/>} title="visit our office" address="Jay Khawand Studios, Sinn el Fil, Jisr el Wati, Fattal street Younes building, 1st floor Beirut"/>


      </div>
      <div className="contact-form">
        
      </div>
    </div>
  );
};
