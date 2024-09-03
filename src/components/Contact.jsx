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
            <a href="https://www.instagram.com/dileep__kumar_04?igsh=MTZqdzZuN2Q1M2dwaQ=="onclick="window.history.back();">
          <svg xmlns="http://www.w3.org/2000/svg" height="68px" viewBox="0 -960 960 960" width="68px" fill="#e8eaed"><path d="M320-120q-83 0-141.5-58.5T120-320v-320q0-83 58.5-141.5T320-840h320q83 0 141.5 58.5T840-640v320q0 83-58.5 141.5T640-120H320Zm0-80h320q50 0 85-35t35-85v-320q0-50-35-85t-85-35H320q-50 0-85 35t-35 85v320q0 50 35 85t85 35Zm160-80q75 0 127.5-52.5T660-460q0-75-52.5-127.5T480-640q-75 0-127.5 52.5T300-460q0 75 52.5 127.5T480-280Zm0-80q-42 0-71-29t-29-71q0-42 29-71t71-29q42 0 71 29t29 71q0 42-29 71t-71 29Zm0-300q17 0 28.5-11.5T520-700q0-17-11.5-28.5T480-740q-17 0-28.5 11.5T440-700q0 17 11.5 28.5T480-660Zm0 200Z"/></svg>
          </a>
           Instagram
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