// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    console.log(data)
    return (
    <div className="contact">
        <img src={data.photo} alt="" className="contact-photo"/>
        <div className="contact-details">
            <p>{data.name}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
        </div>
    </div>
    )
}

export default Contact; 