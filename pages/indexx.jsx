import React from "react";
const Handler = async (props) => {
  await fetch("/api/currentposts")
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      return <p>{props.prop[0].username}</p>;
    });
};
