import Styles from "../styles/Alert.module.css";
import success from "../assets/success-svgrepo-com.svg";

function Alert() {
  return (
    <div className={Styles.aleart_container}>
      <div className={Styles.heading}>
        <img src={success} alt="" />
        <p className={Styles.bold_p}>Message Sent!</p>
      </div>
      <div className={Styles.message}>
        Thanks for completing the form. We&apos;ll be in touch soon!
      </div>
    </div>
  );
}

export default Alert;
