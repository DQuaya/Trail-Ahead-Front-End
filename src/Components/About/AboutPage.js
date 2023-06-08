import "./AboutPage.css";
// import img1 from "../About/img1.png";
// import img2 from "../About/img2.png";
// import img3 from "../About/img3.png";
// import img4 from "../About/img4.png";

function AboutPage() {
  return (
    <div className="text-containers">
      <div className="imgBack"></div>

        <h1> Mission </h1>
      <div className="mission-box">

        <p>
          To foster healthy connections, new friendships, and shared memories
          through outdoor adventures!
        </p>
        <span>Healthy Hiking</span>
      </div>

      <br />
      <br />
      <br />
      <div className="impactBox">
        <br />
        <br />
        <br />
        <h1 className="impactHeader"> Make an Impact </h1>
        <p>
          When you download Trail Head it makes a difference! A percentage from
          your download goes to one of our non-profit partners.{" "}
        </p>
      </div>
      <br />
      <br />

      {/* <div className="imageBoxes">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
      </div> */}
    </div>
  );
}

 export default AboutPage;
