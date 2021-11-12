import React from 'react';

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between mt-5">
            <div className="d-flex justify-content-start align-items-center shadow mt-4 w_29 p-2">
              <img
                src="https://img.icons8.com/office/24/000000/iphone.png"
                alt="phone"
              />
              <div className="d-block ms-2">
                <div className="title">Phone</div>
                <div className="text">+91 9789900998098</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center shadow mt-4 w_29 p-2">
              <img
                src="https://img.icons8.com/office/24/000000/iphone.png"
                alt="phone"
              />
              <div className="d-block ms-2">
                <div className="title">Email</div>
                <div className="text">shreyaansjain60@gmail.com</div>
              </div>
            </div>
            <div className="d-flex justify-content-start align-items-center shadow mt-4 w_29 p-2">
              <img
                src="https://img.icons8.com/office/24/000000/iphone.png"
                alt="phone"
              />
              <div className="d-block ms-2">
                <div className="title">Address</div>
                <div className="text">abc xvy city</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <div className="container shadow second_box">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact_form_container py-5">
              <h1 className="mb-5"> Get in Touch</h1>

              <form id="contact_form">
                <div className="contact_form_name d-flex justify-content-between align-items-between">
                  <input
                    type="text"
                    id="contact_form_name"
                    className="w_29 field"
                    placeholder="Your Name"
                    required={true}
                  />
                  <input
                    type="text"
                    id="contact_form_email"
                    className="w_29 field"
                    placeholder="Your Email"
                    required={true}
                  />
                  <input
                    type="text"
                    id="contact_form_phone"
                    className="w_29 field"
                    placeholder="Your phone"
                    required={true}
                  />
                </div>
                <div className="contact_form_text mt-5">
                  <textarea
                    placeholder="Message"
                    className="w_50 mb-3 contact_textarea"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>
                <div className="contact_form_button">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </form> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
