import React from "react";
import "./Card.css";

const Card = ({
  img,
  title = "Unknown title",
  descr = " Unknown descr ",
  btn = " Unknown btn ",
}) => {
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{descr}</p>
          <a href="#" className="btn btn-primary">
            {btn}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
