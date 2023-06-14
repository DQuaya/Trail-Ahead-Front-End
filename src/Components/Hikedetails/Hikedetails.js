import "./Hikedetails.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import image1 from "../../assets/image1.jpeg";

// coded  by Quaya
const Hikedetails = () => {
    const [hike, setHike] = useState({});
    const [users, setUsers] = useState([]);
    const [hikers, setHikers] = useState([]);
    const { id } = useParams();

    const fetchHikeData = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/hikes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setHike(data);
                setHikers(data.users);
            });
    };

    const fetchUserData = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
            .then((response) => response.json())
            .then((data) => setUsers(data));
    };

    const fetchHikerData = () => {
        fetch(`${process.env.REACT_APP_API_BASE_URL}/hikelist`)
            .then((response) => response.json())
            .then((data) => setHikers(data));
    };

    // function calculateGroupSize(hikeId) {
    //     const currentGroupSize = hikers.filter(
    //         (hike) => hike.hikeId === hikeId
    //     );

    //     return currentGroupSize.length;
    // }

    // on page load, fetches all data necessary to render HikeList
    useEffect(() => {
        const setupHike = async () => {
            await fetchHikeData();
            await fetchUserData();
            await fetchHikerData();
        };

        setupHike();
    }, []);

    return (
        <div className="hike-details">
            <div className="card-wrapper">
                <div className="card">
                    <div className="hike-imgs">
                        <div className="img-display">
                            <div className="img-showcase">
                                <img src={image1} alt="" />
                            </div>
                        </div>
                        <div className="img-select">
                            <div className="img-item">
                                <a href="#" data-id="1">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="2">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="3">
                                    <img src="" alt="" />
                                </a>
                            </div>
                            <div className="img-item">
                                <a href="#" data-id="4">
                                    <img src="" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hike-content">
                        <h2 className="hike-title">{hike.trailName}</h2>
                        <a href="#" class="hike-link">
                            ABOUT THE HIKE
                        </a>
                        <div className="hike-rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star-half-alt"></i>
                            <span>Hike Rating</span>
                        </div>

                        <div className="hike-time">
                            <p className="last-time">
                                MILES: <span>10</span>
                            </p>
                            <p className="new-time">
                                TIME: <span className="time">3pm-6pm</span>
                            </p>
                        </div>

                        <div className="hike-detail">
                            <h2>About Our Group</h2>
                            <p>{hike.about}</p>
                            <h2>Expectations</h2>
                            <p>{hike.expectations}</p>
                            <ul>
                                <li>
                                    Current{" "}
                                    <span>
                                        {hike.currentGroupSize} /{" "}
                                        {hike.maxGroupSize}
                                    </span>
                                </li>
                                <li>
                                    Spots{" "}
                                    <span>
                                        {hike.maxGroupSize -
                                            hike.currentGroupSize}
                                    </span>
                                </li>
                                <li>
                                    Challenge <span>Moderate</span>
                                </li>
                                <li>
                                    Starting <span>beginning</span>
                                </li>
                                <li>
                                    Ending <span>end</span>
                                </li>
                            </ul>
                        </div>

                        <div className="hike-info">
                            {/* <input type = "number" min = "0" value = "1"> */}
                            <button type="button" class="btn">
                                Join Hike <i class="fa-solid fa-plus"></i>
                            </button>
                            <button type="button" class="btn">
                                Pass Hike
                            </button>
                        </div>

                        <div className="member-links">
                            <p>Group Members: </p>
                            <a href="#">{/* <img src={img1} /> */}</a>
                            <a href="#">{/* <img src={img2} /> */}</a>
                            <a href="#">{/* <img src={img3} /> */}</a>
                            <a href="#">{/* <img src={img4} /> */}</a>
                            <a href="#">{/* <img src="" alt="" /> */}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hikedetails;

// coded  by Quaya
