import ContactForm from "../../components/ContactMe/ContactForm";

import classes from '../../styles/pages/contact-me.module.css'; 

function ContactMe() {
    return (
      <div className={classes['contact-me']}>
        <div className={classes['contact-me__img']}></div>
        <div className={classes['contact-me__form-container']}>
          <ContactForm />
        </div>
      </div>
    )
  }
  
  export default ContactMe