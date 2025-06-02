import React from 'react'
import { useNavigate } from 'react-router-dom';

const Contact = ({ setShowHeader }) => {
  const navigate = useNavigate();

  const handleCloseClick = () => {
    setShowHeader(true); 
    navigate('/');
  };
  return (
    <div className="contactSection">
      <div className="divide">
      <div className="contact-details">
      <ul>
      <h2>Contact Me</h2>
        <li>
          <pre>
          <strong>Mobile Number:</strong>+91 7013141135
          </pre>
        </li>
        <li>
          <pre>
          <strong>Email:</strong><a href="mailto:burladileepkumar13@gmail.com">burladileepkumar13@gmail.com</a>
          </pre>
        </li>
        <li>
          <pre>
            <strong>Address:</strong> H No:1-801,Bangarugudem,Tadepalligudem Mandal<br/>
                                             west-Godavari District,Andhra Pradesh
          </pre>
        </li>
      </ul>
      </div>
      <div className="conectSection">
      <p><h2>Connect me</h2></p>
          <div className="socialLinks">
          <span>
           <a href="https://github.com/Dileep49125516" target="_blank" rel="noopener noreferrer">
           <svg xmlns="http://www.w3.org/2000/svg" height="68px" width="68px" viewBox="0 0 24 24" fill="#e8eaed">
           <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.35-1.77-1.35-1.77-1.1-.75.08-.73.08-.73 1.21.08 1.85 1.25 1.85 1.25 1.08 1.84 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.25-3.25-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 013.01-.4c1.02.01 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.78.85 1.25 1.93 1.25 3.25 0 4.64-2.81 5.66-5.49 5.96.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z"/>
           </svg>
           </a>
           GitHub
          </span>
          <span>
          <a href="https://www.linkedin.com/in/dileep-kumar-197a792a5?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bjo01U4mcRX6MB7m1Mb3p2Q%3D%3D"onclick="window.history.back();">
          <svg xmlns="http://www.w3.org/2000/svg" height="68px" viewBox="0 -960 960 960" width="68px" fill="#e8eaed"><path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z"/></svg>
          </a>
          LinkedIn
          </span>
          </div> 
          </div>
          </div>
      <button onClick={handleCloseClick} className="closeButton">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </button>
      </div>

  )
}

export default Contact