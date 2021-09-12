import React from 'react';

function Contact(props){
    return(
        <div>
            <h1> Reach out</h1>
            <form className="contact-form">
            <div>
                    <label>Name</label>
                   <input name="name" />
                </div> 
                <div>
                    <label>Email</label>
                   <input name="email"/>
                </div> 
                <div>
                    <label>Message</label>
                   <textarea defaultValue="" name="message"></textarea>
                </div> 
                <button type="submit"> Send </button>
            </form>
        </div>
    );
}

export default Contact;