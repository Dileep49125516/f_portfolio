import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ setShowHeader }) => {
  const navigate = useNavigate();

  const handleAboutMeClick = () => {
    setShowHeader(false); 
    navigate('/about');
     
  };
  const handleProjectsClick = () => {
    setShowHeader(false); 
    navigate('/projects');
     
  };
   const handleContactMeClick=()=>{
    setShowHeader(false);
    navigate('/contact');
   }

  return (
    <div className="headerSection">
      <div className="topBarSection">
        <h1>Welcome to my Portfolio </h1>
      </div>
      <h2>Hi,I am Dileep!</h2>
        <h3>Creative Designer</h3>
        <h4>Aspiring engineer dedicated to learning and innovation.<br/>
        Currently pursuing a degree in engineering with a passion for problem-solving and web-devlopment.<br/>
        Eager to apply classroom knowledge to real-world challenges. Seeking opportunities to connect with<br/>
        like-minded professionals and gain valuable insights in the field. Open to internships and networking.</h4>    
      <div className="contentSection">
        <span className="spat" onClick={handleAboutMeClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#e8eaed">
            <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.92 44.69q31.3 14.13 50.19 40.97Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z"/>
          </svg>
          <h5>AboutMe</h5>
        </span>
        <span className="spat"  onClick={handleProjectsClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#e8eaed">
            <path d="M480-400 40-640l440-240 440 240-440 240Zm0 160L63-467l84-46 333 182 333-182 84 46-417 227Zm0 160L63-307l84-46 333 182 333-182 84 46L480-80Zm0-411 273-149-273-149-273 149 273 149Zm0-149Z"/>
          </svg>
          <h5>Projects</h5>
        </span>
        <span className="spat" onClick={handleContactMeClick}>
          <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#e8eaed">
            <path d="M480-400q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400ZM320-240h320v-23q0-24-13-44t-36-30q-26-11-53.5-17t-57.5-6q-30 0-57.5 6T369-337q-23 10-36 30t-13 44v23ZM720-80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80Zm0-80v-446L526-800H240v640h480Zm-480 0v-640 640Z"/>
          </svg>
          <h5>ContactMe</h5>
        </span>
      </div>
    </div>
  );
}

export default Header;
