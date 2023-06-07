import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="text-containers">
      <div className="imgBack"></div>

      <div className="mission-box">
        <h1> Mission</h1>

        <p>
          To foster healthy connections, new friendships, and shared memories
          through outdoor adventures!
        </p>
        <span>Healthy Hiking</span>
      </div>

      <br />
      <br />
      <div className="impactBox">
        <br />
        <br />
        <h2 className="impactHeader"> Make an Impact </h2>
        <p>
          When you download Trail Head it makes a difference! % from your
          download goes to one of our non-profit partners.{" "}
        </p>
      </div>
      <SectionContainer />
    </div>
  );
}

const SectionContainer = () => {
  return (
    <div className="section-container">
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
      <div className="box"></div>
    </div>
  );
};

export default AboutPage;
