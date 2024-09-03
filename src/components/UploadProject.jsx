import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {API_URL} from "./data/path.js";

const UploadProject = ({ setShowProjects,setShowHeader}) => {
  const [title, setTitle] = useState("");
  const [technicalSkills, setTechnicalSkills] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();

  const handleUploadProject = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("technicalSkills", technicalSkills);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("image", image);

    try {
      const response = await fetch(`${API_URL}/api/projects/put-details`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setTitle("");
        setDescription("");
        setTechnicalSkills("");
        setLink("");
        setImage(null);
        setShowProjects(true);
        setShowHeader(false);
        navigate('/projects');
        alert("Project uploaded successfully");
      } else {
        const data = await response.json();
        alert(`Upload failed: ${data.message}`);
      }
    } catch (error) {
      console.error("Error uploading project:", error);
      alert("Upload failed");
    }
  };

  return (
    <div>
      <h2>Upload new projects Here</h2>
      <form className="upload" onSubmit={handleUploadProject}>
        <div className='inputSection'>
          <strong>Project Title:</strong>
          <input type="text" value={title} name="title" onChange={(e) => setTitle(e.target.value)} />
          <strong>Technical Skills:</strong>
          <input type="text" value={technicalSkills} name="technicalSkills" onChange={(e) => setTechnicalSkills(e.target.value)} />
          <strong>Description:</strong>
          <textarea value={description} name="description" onChange={(e) => setDescription(e.target.value)} />
          <strong>URL:</strong>
          <input type="url" value={link} name="link" onChange={(e) => setLink(e.target.value)} />
          <strong>Image related to your project:</strong>
          <span><input type="file" name="image" onChange={(e) => setImage(e.target.files[0])} /></span>
        </div>
        <button className='submitSection'><strong>Submit</strong></button>
      </form>
    </div>
  );
};

export default UploadProject;
