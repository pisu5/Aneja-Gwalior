import React from "react";

const Avatar = ({ image, onClick }) => {
  return (
    <section className="avatar-detail" onClick={onClick}>
      <div className="avatar-box">
        <img className="avatar-profile-image" src={image.img} alt="" />
      </div>
      <p className="avatar-name">{image.name}</p>
    </section>
  );
};

export default Avatar;
