import React from "react";
import Card from "./components/Card";

export default function App() {
  return (
    <>
      <Card
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRet-n4jLO87v32Ah2HXjNb4j1cSkv0pkjQxKmZQTN4RtnnzWiZygAioxne1XNH8a9qV7c&usqp=CAU"
        }
        title={"first card"}
        descr={"I am the descr of first card"}
        btn="Named Btn"
      />
      <Card
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwb0atgzWY-5lp9U25JeNlVNn-4TmondHEEjlrGNAROlqkbe0ukwBlOfKa0VkbYc17np8&usqp=CAU"
        }
      />
      <Card
        img={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkMil9CqkfgLysxCTWcZEYPOpy4W5_sJs77dQOE17jdWD9uIzDO17bMnf7oJLu0QcKDV4&usqp=CAU"
        }
        title={"second card"}
        descr={"I am the descr of second card"}
        btn="Named Btn"
      />
      <Card
        img={
          "https://t4.ftcdn.net/jpg/05/57/29/25/360_F_557292539_2kXYz0frOcCGISoYEd2MNTmxyT0lYyOj.jpg"
        }
      />
    </>
  );
}
