import "./Optional.css";
import { useState } from "react";

function Optional() {
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [experience, setExperience] = useState("");

    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState();

    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [twitter, setTwitter] = useState("");
    const [pinterest, setPinterest] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);
    const [tagline, setTagline] = useState("");

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        const value = event.target.value;
        if (value.length <= 5 && /^\d*$/.test(value)) {
            setZipcode(value);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));

        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                const canvas = document.createElement("canvas");
                const MAX_WIDTH = 500; // Maximum width for the resized image
                const MAX_HEIGHT = 500; // Maximum height for the resized image
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                const dataUrl = canvas.toDataURL("image/jpeg"); // Specify the desired image format ('image/jpeg', 'image/png', etc.)
                setSelectedImage(dataUrl);
            };

            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${process.env.REACT_APP_API_BASE_URL}/users`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                age,
                gender,
                experience,
                city,
                state,
                zipcode,
                facebook,
                instagram,
                twitter,
                pinterest,
                tagline,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h1>Complete Your Profile</h1>
                <h3>Demographics</h3>
                <div className="horizontalRow">
                    <label className="secondaryRow">
                        <span>Age</span>
                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        ></input>
                    </label>
                    <label className="secondaryRow">
                        <span>Gender</span>
                        <input
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        ></input>
                    </label>
                    <label className="secondaryRow">
                        <span>Experience</span>
                        <select
                            value={experience}
                            onChange={handleExperienceChange}
                        >
                            <option value="">Select an option</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </label>
                </div>
                <div className="horizontalRow">
                    <label className="secondaryRow">
                        <span>City</span>
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        ></input>
                    </label>
                    <label className="secondaryRow">
                        <span>State</span>
                        <input
                            type="text"
                            name="state"
                            placeholder="State"
                            value={state}
                            onChange={(e) => setState(e.target.value)}
                        ></input>
                    </label>
                    <label className="secondaryRow">
                        <span>Zipcode</span>
                        <input
                            type="text"
                            name="zipcode"
                            placeholder="Zipcode"
                            value={zipcode}
                            onChange={handleZipCodeChange}
                            maxLength={5}
                            pattern="\d*"
                            required
                        ></input>
                    </label>
                </div>

                <h3>Social Media</h3>
                <div className="socialMediaSection">
                    <div className="horizontalRow">
                        <label className="secondaryRow">
                            <span>Facebook</span>
                            <input
                                type="text"
                                name="facebook"
                                placeholder="Facebook"
                                value={facebook}
                                onChange={(e) => setFacebook(e.target.value)}
                            ></input>
                            <p className="socialPreviewUrl">{`https://www.facebook.com/${facebook}`}</p>
                        </label>
                        <label className="secondaryRow">
                            <span>Instagram</span>
                            <input
                                type="text"
                                name="instagram"
                                placeholder="Instagram"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                            ></input>
                            <p className="socialPreviewUrl">{`https://www.instagram.com/${instagram}`}</p>
                        </label>
                    </div>
                    <div className="horizontalRow">
                        <label className="secondaryRow">
                            <span>Twitter</span>
                            <input
                                type="text"
                                name="twitter"
                                placeholder="Twitter"
                                value={twitter}
                                onChange={(e) => setTwitter(e.target.value)}
                            ></input>
                            <p className="socialPreviewUrl">{`https://www.twitter.com/${twitter}`}</p>
                        </label>
                        <label className="secondaryRow">
                            <span>Pinterest</span>
                            <input
                                type="text"
                                name="pinterest"
                                placeholder="Pinterest"
                                value={pinterest}
                                onChange={(e) => setPinterest(e.target.value)}
                            ></input>
                            <p className="socialPreviewUrl">{`https://www.pinterest.com/${pinterest}`}</p>
                        </label>
                    </div>
                </div>

                <label>
                    <span>Image Upload</span>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    {selectedImage && (
                        <div>
                            <img src={selectedImage} alt="Selected" />
                        </div>
                    )}
                </label>

                <label>
                    <span>Profile Tagline</span>
                    <input
                        type="text"
                        name="tagline"
                        placeholder="Tagline"
                        value={tagline}
                        onChange={(e) => setTagline(e.target.value)}
                    ></input>
                </label>

                <button type="submit" className="actionButton">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Optional;
