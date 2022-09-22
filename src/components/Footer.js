import React from 'react';
import { useState } from 'react';



function Contact() {

    const [message, setMessage] = useState(false)

    const handleSubmit = (e)=> {
        e.preventDefault();
        setMessage(true);
    }


    return (
        <div className="contact" id="contact">
            <div className="left">
           < img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-photos%2Fcontact-us&psig=AOvVaw3RrUtafeqoGC3vU1pvcAlN&ust=1663907292252000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCJDPu_HHp_oCFQAAAAAdAAAAABAI" alt="Message me - Photo by Alok Sharma from Pexels" />
           </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={handleSubmit} >
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Name"/>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thanks, I will be in touch soon :)</span>}
                </form>
            </div>

        </div>
    );
}

export default Contact;