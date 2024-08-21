import { useState } from "react";
import Styles from "../styles/Form.module.css";

export default function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [emial, setEmail] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const [message, setMessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleOptionChange(e) {
    setSelectValue(e.target.value);
    // console.log(selectValue)
  }

  function handleCheckboxChange(e) {
    setIsChecked(e.target.checked);
  }

  function handSubmit(){
    
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
              className={Styles.name}
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </label>

          <label>
            Last Name: <span>*</span>
            <br />
            <input
              className={Styles.name}
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </label>
        </div>

        <div className={Styles.email}>
          <label>
            Email:<span>*</span>
            <br />
            <input
              className={Styles.email_input}
              type="text"
              value={emial}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <label>
          Query Type:<span>*</span>
        </label>
        <div className={Styles.radio_buttons}>
          <label className={Styles.custom_radio}>
            <input
              type="Radio"
              value="General Enquiry"
              checked={selectValue === "General Enquiry"}
              onChange={handleOptionChange}
            />
            General Enquiry
          </label>
          <label className={Styles.custom_radio}>
            <input
              type="Radio"
              id="option2"
              value="Support Request"
              checked={selectValue === "Support Request"}
              onChange={handleOptionChange}
            />
            Support Request
          </label>
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div>
          <input
            type="checkbox"
            id="consent"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <label htmlFor="consent">
            I consent to being contacted by the team<span>*</span>
          </label>
        </div>
        <div>
          <button type="submit" onSubmit={handSubmit} className={Styles.button}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
