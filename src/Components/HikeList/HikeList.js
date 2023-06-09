import { useState, useEffect } from "react";
import coverImage from "../../assets/mountains.jpg";
import PlannedHike from "./PlannedHike";
import './HikeList.css'

const HikeList = () => {
  const [hikes, setHikes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/hikes")
      .then((response) => response.json())

      .then((data) => setHikes(data));
  }, []);

  return (
    <div className="hikeListMain">
      <h1>Available Hikes</h1>
      {hikes.map((hike) => (
        <PlannedHike
          key={hike.name}
          name={hike.name}
          pictureAltText={hike.pictureAltText}
          experience={hike.experience}
          timeDate={hike.timeDate}
          groupSize={hike.groupSize}
          maxGroupSize={hike.maxGroupSize}
        />
      ))}
    </div>
  );
};

export default HikeList;
