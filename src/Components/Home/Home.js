import React from "react";

import "../sass/main.scss";

import NFHackathon from "../../assets/NFHackathon.png";

const Home = () => {

  return (
    <div className="container-home" >
      <img src={NFHackathon} className="section-home-logo" alt="nf-hackathon-logo-image"/>
      <h2 className="section-home-header">NF Explorer Team - NF Hackathon 2020</h2>
    </div>
  )
}

export default Home;