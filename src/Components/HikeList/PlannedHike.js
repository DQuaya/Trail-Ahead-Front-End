import "./PlannedHike.css";

const PlannedHike = ({
    name,
    pictureSource,
    pictureAltText,
    experience,
    timeDate,
    groupSize,
    maxGroupSize,
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
            <button>View</button>
        </div>
    );
};

export default PlannedHike;
