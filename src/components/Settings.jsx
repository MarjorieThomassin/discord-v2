import React, { useState, useRef } from 'react';
import axios from 'axios';
import '../CSS/Settings.css';
import { Redirect } from 'react-router-dom';
import { useLoginRequest } from '../context/loginRequest';

function Settings() {
  const pseudoInput = useRef();
  const bioInput = useRef();
  const imageInput = useRef();

  const { id } = useLoginRequest();

  const [uploadFile, setUploadFile] = useState();
  const [saveBtn, setSaveBtn] = useState(false);

  const changeAvatar = (event) => {
    setUploadFile(event.target.files[0]);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('File', uploadFile);
    const url = 'http://localhost:8000/upload';
    axios.post(url, formData)
      .then((response) => (console.log(response.data)));
  };

  const updateUser = () => {
    axios.put(`http://localhost:8000/settings/${id}`, {
      pseudo: pseudoInput.current.value,
      bio: bioInput.current.value,
      image_path: imageInput.current.value,
    })
      .then((response) => (console.log(response.data)));
  };

  return (
    <div className="settings">
      <h1 className="titleSettings">Bienvenue !</h1>
      <div className="formSettings">
        <p>Pour pouvoir accéder à ton profil, merci de le compléter au préalable !</p>
        <label className="pseudo" htmlFor="pseudo">
          <input className="inputPseudo" type="pseudo" ref={pseudoInput} id="pseudo" placeholder="Ton Pseudo" />
        </label>
        <label className="bio" htmlFor="bio" id="bio">
          <input className="inputBio" type="text" ref={bioInput} placeholder="Parle nous de toi !" />
        </label>
        <label className="image" htmlFor="image" id="image">
          <input className="inputImage" ref={imageInput} type="file" onChange={changeAvatar} />
        </label>
        <button
          className="saveBtn"
          type="submit"
          onClick={() => {
            handleSubmit();
            updateUser();
            setSaveBtn(true);
          }}
        >
          {saveBtn && <Redirect to="/profile" />}
          Sauvegarder
        </button>
      </div>
    </div>
  );
}

export default Settings;
