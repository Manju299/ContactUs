import { useState } from "react";
import Styles from "../styles/Form.module.css";

export default function Form() {
  const [formdata, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    radioOption: "",
    message: "",
    checkbox: false,
  });
  const [error, setError] = useState({
    fname: "",
    lname: "",
    email: "",
    radioOption: "",
    message: "",
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    setFormData({
      ...formdata,
      [name]: type === "checkbox" ? checked : value,
    });

    setError({
      ...error,
      [name]: "",
    });
  }

  function handSubmit(e) {
    e.preventDefault();
    let hasError = false;
    const newErrors = {};

    if (!formdata.fname.trim()) {
      newErrors.fname = "This field is required";
      hasError = true;
    }

    if (!formdata.lname.trim()) {
      newErrors.lname = "This field is required";
      hasError = true;
    }

    if (!formdata.email.trim()) {
      newErrors.email = "Please enter a valid email address";
      hasError = true;
    }

    if (!formdata.radioOption.trim()) {
      newErrors.radioOption = "Please select a query option";
      hasError = true;
    }

    if (!formdata.message.trim()) {
      newErrors.message = "This field is required";
      hasError = true;
    }

    if (!formdata.checkbox) {
      newErrors.checkbox =
        "To submit this form, please consent to being contacted";
      hasError = true;
    }

    if (hasError) {
      setError(newErrors);
      console.log(error);
    } else {
      // Handle form submission or other logic
      console.log("Form data submitted:", formdata);
    }
  }

  return (
    <div className={Styles.container}>
      <h2> Contact Us </h2>
      <form>
        <div className={Styles.names}>
          <label>
            First Name <span>*</span>
            <br />
            <input
              className={error.fname ? Styles.input_error : Styles.name}
              type="text"
              name="fname"
              value={formdata.fname}
              onChange={handleChange}
            />
            {error.fname && (
              <p className={Styles.error_message}>{error.fname} </p>
            )}
          </label>

          <label>
            Last Name: <span>*</span>
            <br />
            <input
              className={error.fname ? Styles.input_error : Styles.name}
              type="text"
              name="lname"
              value={formdata.lname}
              onChange={handleChange}
            />
            {error.fname && (
              <p className={Styles.error_message}>{error.fname} </p>
            )}
          </label>
        </div>

        <div className={Styles.email}>
          <label>
            Email:<span>*</span>
            <br />
            <input
              className={error.email ? Styles.email_error : Styles.email_input}
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
            />
            {error.email && (
              <p className={Styles.error_message}>{error.email} </p>
            )}
          </label>
        </div>
        <div className={Styles.querytype}>
          <label>
            Query Type<span> *</span>
          </label>
        </div>
        <div className={Styles.radio_buttons}>
          <label className={Styles.custom_radio}>
            <input
              type="Radio"
              value="General Enquiry"
              name="radioOption"
              checked={formdata.radioOption === "General Enquiry"}
              onChange={handleChange}
            />
            General Enquiry
          </label>

          <label className={Styles.custom_radio}>
            <input
              type="Radio"
              id="option2"
              name="radioOption"
              value="Support Request"
              checked={formdata.radioOption === "Support Request"}
              onChange={handleChange}
            />
            Support Request
          </label>
        </div>
        {error.radioOption && (
          <p className={Styles.error_message}>{error.radioOption} </p>
        )}

        <div className={Styles.textarea}>
          <label>
            Message<span> *</span>
          </label>
          <textarea
            className={error.message ? Styles.email_error : Styles.email_input}
            value={formdata.message}
            name="message"
            onChange={handleChange}
          />
        </div>
        {error.message && (
          <p className={Styles.error_message}>{error.message} </p>
        )}

        <div className={Styles.consent}>
          <div className={Styles.flex_check}>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              checked={formdata.checkbox}
              onChange={handleChange}
            />
            <label htmlFor="checkbox">
              I consent to being contacted by the team<span>*</span>
            </label>
          </div>
          {error.checkbox && (
            <p className={Styles.error_message}>{error.checkbox} </p>
          )}
        </div>

        <div>
          <button onClick={handSubmit} className={Styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
