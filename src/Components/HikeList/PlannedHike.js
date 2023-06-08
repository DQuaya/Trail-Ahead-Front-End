const PlannedHike = ({name, pictureSource, pictureAltText, experience, timeDate, groupSize, maxGroupSize}) => {
    return (
        <div>
            PlannedHike
            <div>
                {name}
                <img src={pictureSource} alt={pictureAltText}  />
            </div>
            <div>
                Experience
                {experience}

            </div>
            <div>
                Time and Date
                {timeDate}
            </div>
            <div>
                Group Size 
                {groupSize} / {maxGroupSize}
            </div>
            <div>
                Availability
                {(groupSize !== maxGroupSize) ? "active" : "full"}
            </div>
        </div>
    )
}

export default PlannedHike


