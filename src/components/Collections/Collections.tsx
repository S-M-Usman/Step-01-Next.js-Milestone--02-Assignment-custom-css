import React from "react";
import "./Collections.css";

const Collection = () => {
  return (
    <main className="main-collection-sec">
      <section className="collection-sec">
        <h2 className="collection-sec-h2">Collection</h2>
        <div className="grid-card-container">
          <div className="grid-card" data-collection="Nissan gtr"></div>
          <div className="grid-card" data-collection="Bugatti"></div>
          <div className="grid-card" data-collection="Lamborghini"></div>
          <div className="grid-card" data-collection="Rolls Ryce"></div>
          <div className="grid-card" data-collection="Porsche"></div>
          <div className="grid-card" data-collection="Dodge"></div>
        </div>
      </section>
    </main>
  );
};

export default Collection;
