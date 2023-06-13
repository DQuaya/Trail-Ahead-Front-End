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
                <img
                    src={hikePlannerProfilePicture}
                    alt={`Profile Picture of ${hikePlannerName}`}
                    className="hikePlannerImage"
                />
                <div className="hikerInfo">
                    <h3>Organized by</h3>
                    <span>{hikePlannerName}</span>
                    <h3>Experience</h3>
                    <span>{hikePlannerExperience}</span>
                </div>
                <div>
                    <h3>Group Size</h3>
                    <span>
                        {currentGroupSize} / {maxGroupSize}
                    </span>
                    <h3>Availability</h3>
                    <span>
                        {currentGroupSize !== maxGroupSize
                            ? `${
                                  maxGroupSize - currentGroupSize
                              } spots remaining`
                            : "full"}
                    </span>
                </div>
                <Link to={hikeId !== undefined ? `/hike/${hikeId}` : `/hike`}>
                    <span className="viewHikeButton">View Hike</span>
                </Link>
            </div>
        </div>
    );
};

export default PlannedHike;
