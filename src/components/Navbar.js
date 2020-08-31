import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        className="navbar__logo"
        src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
        alt="netflix logo"
      />
      <img
        className="navbar__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQUbx7mq6Io0ohFZXTaLqDXCtXh0jOyxmXtqg&usqp=CAU"
        alt="netflix logo"
      />
    </div>
  );
};

export default Navbar;
