import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBackground } from '../../store';
import style from './contactPage.module.css';
import image from '../../assets/icons/Component 2.png';
import { Button, TextField } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function ContactPage() {
  const backgroundColor = useSelector(
    (state: { background: { color: string } }) => state.background.color
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setBackground('Contact'));
  }, []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  function submit(e: any) {
    e.preventDefault();

    fetch('https://formcarry.com/s/DKWxhMJE9PB', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        email: email,
        message: `NAME: ${name}, MESSAGE: ${message}`
      })
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.code === 200) {
          setSubmitted(true);
        } else {
          setError(res.message);
        }
      })
      .catch((error) => setError(error.message));
  }

  return (
    <div style={{ backgroundColor }} className={style.main}>
      <div className={style.frame}>
        <img src={image} alt="frame" className={style.img} />
        <p className={style.centerText}>GET IN TOUCH</p>
      </div>
      <div className={style.container}>
        {submitted ? (
          <p className={style.sent}>
            Message received! Will get back to you soon 🤗💻
          </p>
        ) : error ? (
          <>
            <h3>Something went wrong, try again later!</h3>
            <p>{error}</p>
          </>
        ) : (
          <>
            <form onSubmit={submit} className={style.form}>
              <p className={style.p}>
                LET'S CHAT! REACH OUT VIA EMAIL, PHONE,
                <br /> LINKEDIN OR USING THE CONTACT FORM BELOW
              </p>
              <TextField
                variant="outlined"
                label="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <TextField
                variant="outlined"
                label="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                multiline
                rows={3}
                required
              />
              <Button variant="contained" type="submit" className={style.btn}>
                Send
              </Button>
            </form>
            <div className={style.some}>
              <ul className={style.list}>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kristina-grudyte-22266428a/"
                    target="_blank">
                    <FontAwesomeIcon
                      className={style.icon}
                      icon={faLinkedinIn}
                    />
                  </a>
                </li>
                <li>
                  <a href="mailto:grudyte.kristina@gmail.com">
                    <FontAwesomeIcon className={style.icon} icon={faEnvelope} />
                  </a>
                </li>
                <li>
                  <a href="tel:+4550357449">
                    <FontAwesomeIcon className={style.icon} icon={faPhone} />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/KristinaGru" target="_blank">
                    <FontAwesomeIcon className={style.icon} icon={faGithub} />
                  </a>
                </li>
              </ul>
            </div>
          </>
        )}{' '}
      </div>
    </div>
  );
}
