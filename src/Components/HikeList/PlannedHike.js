import "./PlannedHike.css";

import { Link } from "react-router-dom";


const PlannedHike = ({
    hikePlannerName,
    hikePlannerProfilePicture,
    hikePlannerExperience,
    trailName,
    timeDate,
    currentGroupSize,
    maxGroupSize,
    hikeId,
}) => {
    return (
        <div className="plannedHikeContainer">

            <h2>
                {trailName} Hike on {timeDate}
            </h2>
            <div className="hikePlannerContainer">
                <div>
                    <h3>Organized by <span>{hikePlannerName}</span></h3>
                    <img
                        src={hikePlannerProfilePicture}
                        alt={`Profile Picture of ${hikePlannerName}`}
                    />
                </div>
                <div>
                    <h3>Experience</h3>
                    <span>{hikePlannerExperience}</span>
                </div>
                <div>
                    <h3>Group Size</h3>
                    <span>
                        {currentGroupSize} / {maxGroupSize}
                    </span>
                </div>
                <div>
                    <h3>Availability</h3>
                    <span>
                        {currentGroupSize !== maxGroupSize ? "active" : "full"}
                    </span>
                </div>
                <div>
                    <Link
                        to={hikeId !== undefined ? `/hike/${hikeId}` : `/hike`}
                    >
                        <span className="">View Hike</span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default PlannedHike;
