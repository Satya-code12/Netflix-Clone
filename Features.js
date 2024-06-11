import React from "react";

const Features=()=>{
  return(
    <>
      <div className="features">
    <div className="row">
      <div className="text-col">
        <h2>Enjoy on your TV</h2>
        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
      </div>
      <div className="img-col">
        <img src="feature-1.png"/>
      </div>
    </div>
    <div className="row2">
      <div className="img-col2">
        <img src="feature-2.png"/>
      </div>
      <div className="text-col2">
        <h2>Download your shows to watch offline</h2>
        <p>Save your favourites easily and always have something to watch.</p>
      </div>
    </div>
    <div className="row3">
      <div className="text-col3">
        <h2>Watch everywhere</h2>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="img-col3">
        <img src="feature-3.png"/>
      </div>
    </div>
    <div className="row4">
      <div className="img-col4">
        <img src="feature-4.png"/>
      </div>
      <div className="text-col4">
        <h2>Create profiles for kids</h2>
        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
      </div>
    </div>
  </div>
    </>
  );
}

export {Features};