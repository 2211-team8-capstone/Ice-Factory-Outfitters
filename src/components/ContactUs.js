import React from "react";
import "../style/ContactUs.css";

const ContactUs = () => {

    return (
        <div className="contact-forms">

            <form>
                <div className='title'>
                    <h3>Contact Us</h3>
                </div>

                <div className='contact-first-name'>
                    <label>First Name: </label>
                    <input
                        type="text"
                        placeholder="First Name"
                        onChange={(event) => setFirstName(event.target.value)}
                    ></input>
                </div>

                <div className='contact-last-name'>
                    <label>Last Name: </label>
                    <input
                        type="text"
                        placeholder="Last Name"
                        onChange={(event) => setLastName(event.target.value)}
                    ></input>
                </div>

                <div className='contact-email'>
                    <label>Email Address: </label>
                    <input
                        type="text"
                        placeholder="Email Address"
                        onChange={(event) => setEmail(event.target.value)}
                    ></input>
                </div>

                <div className='contact-questions'>
                    <label>Questions/Comments: </label>
                    <textarea
                        id='input-questions'
                        type="text"
                        placeholder="Questions/Comments"
                        onChange={(event) => setQuestions(event.target.value)}
                    ></textarea>
                </div>

                <div>
                    <button
                        className='contact-submit'
                        onClick={() => {
                            submitNewQuestion();
                        }}
                        type="button"
                        name="submit_button"
                        value="Submit"
                    >
                        Submit
                    </button>
                </div>

            </form>
        </div>
    )
}

export default ContactUs;