import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UploadProject from './UploadProject';
import { API_URL } from './data/apipath';


const secret = import.meta.env.VITE_SECRET_KEY;


const Projects = ({ setShowHeader }) => {
  const [showProjects, setShowProjects] = useState(false);
  const [viewProjects, setViewProjects] = useState([]);
  const navigate = useNavigate();
  

  const projectHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/api/projects/get-details`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const projects = await response.json();
      setViewProjects(projects); 
      console.log(projects); 
    } catch (error) {
      console.log("Failed to fetch data", error);
      alert("Failed to fetch projects");
    }
  };

  const toggleProjects = () => {
    setShowProjects(prevState => !prevState);
  };

  const handleCloseClick = () => {
    setShowHeader(true);
    setShowProjects(false);
    navigate("/");
  };

  useEffect(() => {
    projectHandler();
    if (window.location.pathname !== '/projects') {
      setShowProjects(false);
    }
  }, [window.location.pathname]);

  const deleteProjectById = async (projectId) => {
    const isConfirmed = window.prompt("Enter your password:");


    if (isConfirmed !==`${secret}`) {
      return alert("Incorrect Password");
    }

    try {
      const response = await fetch(`${API_URL}/api/projects/delete/${projectId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setViewProjects(viewProjects.filter((project) => project._id !== projectId));
        alert("Project deleted successfully");
      } else {
        throw new Error("Failed to delete project");
      }
    } catch (error) {
      console.error("Failed to delete project", error);
      alert("Failed to delete project");
    }
  };

  return (
    <div className="projectDetailSection">
      <div className="projectSection">
        <h2>These are my projects which are fetched from database </h2>

        <button onClick={handleCloseClick} className="closeButton">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e8eaed"
          >
            <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
          </svg>
        </button>
      </div>
        <div className="tableData">
          {viewProjects.length === 0 ? (
            <p>No projects uploaded</p>
          ) : (
            <table className="tableProject">
              <thead>
                <tr>
                  <th>Project Title</th>
                  <th>Technical Skills</th>
                  <th>Description</th>
                  <th>URL</th>
                  <th>Image</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {viewProjects.map((item) => (
                  <tr key={item._id}>
                    <td>{item.title}</td>
                    <td><p>{item.technicalSkills}</p></td>
                    <td><span>{item.description}</span></td>
                    <td><a href={item.link} target="_blank" rel="noopener noreferrer">{item.link}</a></td>
                    <td>
                      {item.image && (
                        <img
                          src={`${API_URL}${item.image}`}
                          alt={item.title}
                          style={{ width: "100px", height: "100px" }}
                        />
                      )}
                    </td>
                    <td className="btnSubmit">
                      <button onClick={() => deleteProjectById(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

       <div className="displayUpload"> 
      <button onClick={toggleProjects} className="arrow">
        <h3>Upload projects here</h3>
        {showProjects ? (
          <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#EA3323"><path d="M480-554 283-357l-43-43 240-240 240 240-43 43-197-197Z"/></svg>
        
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" height="58px" viewBox="0 -960 960 960" width="58px" fill="#EA3323"><path d="M480-344 240-584l43-43 197 197 197-197 43 43-240 240Z"/></svg>
        )}
      </button>
      {showProjects && <UploadProject setShowProjects={setShowProjects} setShowHeader={setShowHeader}/>}
    </div>
    </div>   
  );
};

export default Projects;
