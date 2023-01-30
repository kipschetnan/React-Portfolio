import React from "react";
import { useState } from "react";
import '../../styles/Contact.css'

function Contact() {
    

    return (
        <div>
            <header style={{
                fontFamily: 'MyFont',
                marginLeft: '40px',
                fontSize: '25px',
                marginTop: '20px',
                color: '#0A090C'
            }}>
                Contact
            </header>
            <form className="form">
                <div class="input-group mb-2">
                    <span className="input-group-text text-light bg-dark">Name</span>
                    <input className="form-control input" />
                </div>
                <div class="input-group mb-2">
                    <span className="input-group-text text-light bg-dark">Email</span>
                    <input className="form-control input" />
                </div>
                <div class="input-group mb-3">
                    <span className="input-group-text text-light bg-dark">Message</span>
                    <input className="form-control input-m" />
                </div>
                <div>
                    <button className='btn btn-dark' type="button">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    );
}

export default Contact