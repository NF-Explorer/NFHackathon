import React from "react";

import "../sass/main.scss";

import NFHackathon from "../../assets/NFHackathon.png";

const Home = () => {

  return (
    <div className="container-home" >
      <img src={NFHackathon} className="section-home-logo" alt="nf-logo"/>
      <h2 className="section-home-header">NF Explorer Team - NF Hackathon 2020</h2>
      <h3 className="section-home-subHeader">ABOUT THE HACKATHON</h3>
      <p className="section-home-text">
        Rare diseases affect nearly 350 million people around the world, and NF 
        specifically affects 1 in 3,000 across the globe each year. During the Hack 
        for NF, we want you to utilize the datasets provided to improve data analytics, 
        research methodology and advance the field of NF (neurofibromatosis) & rare 
        diseases. Your solutions can range from new ways to analyze data to engaging 
        patients via mobile devices, to data visualization apps & analytical tools for 
        the NF portal. Join the Hack for NF and help end NF & other rare diseases for 
        patients all over the world.
        </p>
    </div>
  )
}

export default Home;