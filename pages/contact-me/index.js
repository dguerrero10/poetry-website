import Head from "next/head";
import { Fragment } from "react";
import ContactForm from "../../components/ContactMe/ContactForm";

import classes from '../../styles/pages/contact-me.module.css'; 

function ContactMe() {
    return (
      <Fragment>
        <Head>
          <title>Contact Me</title>
          <meta name="description" content="Contact David Guerrero poetry website.">
          </meta>
        </Head>
        <div className={classes['contact-me']}>
          <div className={classes['contact-me__img']}></div>
          <div className={classes['contact-me__form-container']}>
            <ContactForm />
          </div>
        </div>
      </Fragment>
    )
  }
  
  export default ContactMe