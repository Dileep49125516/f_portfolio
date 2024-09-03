import React from 'react';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profile.png'; 

const AboutMe = ({ setShowHeader }) => {
  const navigate = useNavigate();
  const handleCloseClick = () => {
    setShowHeader(true); 
    navigate('/');
  };

  return (
    <div className="aboutMeSection">
      <div className="aboutMeContent">
        <ul>
          <li className="l0"><pre><h2>Name</h2>
                Dileep Kumar Burla
                </pre>
            </li>
          <li className="l1">
              <pre>
              <h2>Education</h2>
              Mohan Babu University, Tirupati                                Nov 2022 - June 2026<br/>
              Bachelor of Technology in Computer Science and Engineering     CGPA: 9.2<br/><br/>
              Sasi Junior College, Tadepalligudem                            July 2020 - June 2022<br/>
              Intermediate (MPC)                                             Percentage: 95<br/><br/>
              Narayana E.M High School, Neeladripuram                        July 2010 - June 2020<br/>
              SSC                                                            CGPA: 9.5
              </pre>
           </li>
           <li className="l2">
      
            <h2>Skills</h2>
            <h5>Languages:</h5> C, Java, JavaScript, SQL, Bash, TypeScript<br/>
            <h5>Frameworks:</h5> Node.js, Express.js, Next.js<br/>
            <h5>Tools:</h5> Kubernetes, Docker, Git, PostgreSQL, MySQL<br/>
            <h5>Platforms:</h5> Web, Windows, AWS<br/>
            <h5>Soft Skills:</h5> Leadership, Event Management, Writing, Public Speaking, Time Management<br/>
            <h5>Technical Skills:</h5> Data Structures and Algorithms (DSA)<br/>
           
           </li>
           <li className="l3">
            
            <h2>Certifications</h2>
            <h5>Leadership Skills:</h5> Learned and developed essential leadership qualities and strategies.<br/>
            <h5>Mathematics for Computer Science:</h5> Acquired knowledge in mathematical concepts essential <br/>
                                                            for computer science.<br/>
            <h5>Computer Architecture:</h5> Gained a deep understanding of computer architecture, including <br/>
                                                    processors, memory, and system design.<br/>
            <h5>Introduction to Hardware and Operating Systems:</h5> Learned the basics of computer hardware<br/>
                                                               components and operating system functionality.<br/>
            <h5>Full Stack Web Development:</h5> Completed a comprehensive 0-100 full stack web development <br/>
                                                     course at 100xDevs by Harikirat Singh.
           
           </li>
           <li className="l4">
            
            <h2>Other Interests/Extracurricular Activities</h2>
             <h5>Cricket:</h5> Active player, participating in various local and university-level matches.<br/>
             <h5>Foundations/NGOs:</h5> Involved in various activities and initiatives with foundations and NGOs
            
           </li>
        </ul>
        <img src={profileImage} alt="profile" height="250" width="250" />
      </div>
      <button onClick={handleCloseClick} className="closeButton">
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
      </button>
    </div>
  );
}

export default AboutMe;
