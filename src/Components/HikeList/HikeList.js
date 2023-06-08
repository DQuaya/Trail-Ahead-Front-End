import { useState } from "react";
import coverImage from "../../assets/mountains.jpg";
import PlannedHike from "./PlannedHike";
import './HikeList.css'

const HikeList = () => {
    const [hikes, setHikes] = useState([
        {
            name: "John Doe",
            pictureAltText: "picture of John Doe",
            experience: "2 years",
            timeDate: "10-24-2023",
            groupSize: 5,
            maxGroupSize: 7,
        },
        {
            name: "Mary Jane",
            pictureAltText: "picture of Mary Jane",
            experience: "5 years",
            timeDate: "10-25-2023",
            groupSize: 1,
            maxGroupSize: 3,
        },
        {
            name: "Jennifer Jones",
            pictureAltText: "picture of Jennifer Jones",
            experience: "1 year",
            timeDate: "10-26-2023",
            groupSize: 2,
            maxGroupSize: 2,
        },
        {
            name: "John Smith",
            pictureAltText: "picture of John Smith",
            experience: "3 years",
            timeDate: "10-27-2023",
            groupSize: 3,
            maxGroupSize: 5,
        },
    ]);

    return (
        <div className="hikeListMain">
            <img src={coverImage} alt="" />
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
