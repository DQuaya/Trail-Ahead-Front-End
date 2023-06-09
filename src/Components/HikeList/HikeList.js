import { useState, useEffect } from "react";
import { redirect } from "react-router-dom";
import PlannedHike from "./PlannedHike";
import "./HikeList.css";

const HikeList = () => {
    const [hikes, setHikes] = useState([]); // when data is fetched from the backend, the setHikes function is used to store the data in hikes

    useEffect(() => {
        fetch("http://localhost:3000/hikes")
            .then((response) => response.json())
            .then((data) => setHikes(data));
    }, []);

    const handleRouteChange = (id) => {
        redirect(`/hikes/${id}`)
    };

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
                    hikeId={hike.id}
                />
            ))}
        </div>
    );
};

export default HikeList;
