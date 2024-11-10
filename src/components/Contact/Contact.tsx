import React from "react";
import contactStyle from "./Contact.module.css"

const Contact = () => {
  return (
    <div id="contact">
      <section className={contactStyle.sec1} data-aos="zoom-out-up">
        <div className={contactStyle.sec2}>
          <div className={contactStyle.sec3}>
            <h1 className={contactStyle.head}>
              Contact Us
            </h1>
            <p className={contactStyle.para}>
             If you have any query, let us know!
            </p>
          </div>
          <div className={contactStyle.sec4}>
            <div className={contactStyle.sec5}>
              <div className={contactStyle.sec6}>
                <div className={contactStyle.sec7}>
                  <label
                    htmlFor="name"
                    className={contactStyle.label}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className={contactStyle.input1}
                  />
                </div>
              </div>
              <div className={contactStyle.sec6}>
                <div className={contactStyle.sec7}>
                  <label
                    htmlFor="email"
                    className={contactStyle.label}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className={contactStyle.input1}
                  />
                </div>
              </div>
              <div className={contactStyle.sec6a}>
                <div className={contactStyle.sec7}>
                  <label
                    htmlFor="message"
                    className={contactStyle.label}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={contactStyle.input2}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className={contactStyle.sec6a}>
                <button className={contactStyle.sec8}>
                  Send Message
                </button>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
