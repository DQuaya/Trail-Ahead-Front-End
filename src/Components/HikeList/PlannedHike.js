import "./PlannedHike.css";
import { Link } from "react-router-dom"

const PlannedHike = ({
    name,
    pictureSource,
    pictureAltText,
    experience,
    timeDate,
    groupSize,
    maxGroupSize,
    hikeId,
}) => {
    return (
        <div className="plannedHikeContainer">
            <div>
                <h3>{name}</h3>
                <img src={pictureSource} alt={pictureAltText} />
            </div>
            <div>
                <h3>Experience</h3>
                <span>{experience}</span>
            </div>
            <div>
                <h3>Time and Date</h3>
                <span>{timeDate}</span>
            </div>
            <div>
                <h3>Group Size</h3>
                <span>
                    {groupSize} / {maxGroupSize}
                </span>
            </div>
            <div>
                <h3>Availability</h3>
                <span>{groupSize !== maxGroupSize ? "active" : "full"}</span>
            </div>
            <div>
                <Link to={ (hikeId !== undefined) ? `/hike/${hikeId}` : `/hike` }>
                    View Hike
                </Link>
            </div>
        </div>
    );
};

export default PlannedHike;
