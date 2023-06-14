import { useState, useEffect } from "react";
import PlannedHike from "./PlannedHike";
import "./HikeList.css";


const HikeList = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [hikes, setHikes] = useState([]);
    const [users, setUsers] = useState([]);
    const [hikers, setHikers] = useState([]);

    const fetchHikeData = () => {
        fetch("http://localhost:3000/hikes")
            .then((response) => response.json())
            .then((data) => setHikes(data));
    };

    const fetchUserData = () => {
        fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then((data) => setUsers(data));
    };

    const fetchHikerData = () => {
        fetch("http://localhost:3000/hikelist")
            .then((response) => response.json())
            .then((data) => setHikers(data));
    };

    function calculateGroupSize(hikeId) {
        const currentGroupSize = hikers.filter(
            (hike) => hike.hikeId === hikeId
        );

        return currentGroupSize.length;
    }

    function findHikePlannerName(hikePlannerId) {
        const hikePlanner = users.filter((user) => user.id === hikePlannerId);
        console.log("loaded", hikePlanner);
        console.log("users", users);

        if (hikePlanner.length > 0) {
            const name = `${hikePlanner[0].firstName} ${hikePlanner[0].lastName}`;
            return name;
        }

        return "Error";
    }

    function findHikePlannerProfilePicture(hikePlannerId) {
        const hikePlanner = users.filter((user) => user.id === hikePlannerId);

        if (hikePlanner.length > 0) {
            const profilePicture = hikePlanner[0].profilePicture;
            return profilePicture;
        }

        return "Error";
    }

    function findHikePlannerExperience(hikePlannerId) {
        const hikePlanner = users.filter((user) => user.id === hikePlannerId);

        if (hikePlanner.length > 0) {
            const experience = hikePlanner[0].experience;
            return experience;
        }

        return "Error";
    }

    // on page load, fetches all data necessary to render HikeList
    useEffect(() => {
        const setupHike = async () => {
            await fetchHikeData();
            await fetchUserData();
            await fetchHikerData();
        };

        setupHike();
        setIsLoading(false);
    }, []);

    return (
        <div className="hikeListMain">
            <h1>Available Hikes</h1>
            <button
                className="refreshHikesButton"
                onClick={() => {
                    fetchHikeData();
                }}
            >
                Refresh List
            </button>
            {isLoading
                ? "Page is loading..."
                : hikes.map((hike) => (
                      <PlannedHike
                          key={hike.id}
                          hikePlannerName={findHikePlannerName(
                              hike.hikePlanner
                          )}
                          hikePlannerProfilePicture={findHikePlannerProfilePicture(
                              hike.hikePlanner
                          )}
                          hikePlannerExperience={findHikePlannerExperience(
                              hike.hikePlanner
                          )}
                          hikeId={hike.id}
                          trailName={hike.trailName}
                          timeDate={hike.timeDate}
                          currentGroupSize={calculateGroupSize(hike.id)}
                          maxGroupSize={hike.maxGroupSize}
                      />
                  ))}
        </div>
    );
};

export default HikeList;
