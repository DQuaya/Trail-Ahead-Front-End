import "./Optional.css";
import { useState } from 'react';


function Optional () {
    const[experience, setExperience ] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    
      
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        const value = event.target.value;
        if (value.length <= 5 && /^\d*$/.test(value)) {
          setZipCode(value);
        }
      };

      const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
      

      const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
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
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg'); // Specify the desired image format ('image/jpeg', 'image/png', etc.)
        setSelectedImage(dataUrl);
      };

      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="form-contain">
        <form>
            <h2 className="add">
                <strong>Complete Your Profile</strong>
            </h2>
            <hr></hr>
            <div className="profile-set">
              <label className='age'> Age 
              <input
              type="number"
              age="age"
              placeholder="Age"
              required
             ></input>
             </label>

             <label className='gender'> Gender
             <input 
             type="text"
             name="gender"
             placeholder="Gender"
             required
             ></input>
             </label>    

             <label className='experience'>
                Experience
                <select value={experience} onChange={handleExperienceChange}>
                    <option value="">Select an option</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                </select>
                </label>     

            <label className='city'>City
            <input 
            type="text"
            name="city"
            placeholder='City'
            required
            ></input>
            </label>  

            <label className='state'>State
            <input 
            type="text"
            name="state"
            placeholder='state'
            required
            ></input>
            </label>

            <label className='zipcode'>Zipcode
            <input 
            type="text"
            name="zipcode"
            placeholder='Zip Code'
            value={zipCode}
            onChange={handleZipCodeChange}
            maxLength={5}
            pattern="\d*"
            required
            ></input>
            </label>  

            
             <div>
              <label className='image-upload'>Image Upload</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {selectedImage && (
              <div>
                <img src={selectedImage} alt="Selected" />
              </div>
            )}

          <label className='tagline'>Tagline
            <input 
            type="text"
            name="tagline"
            placeholder='tagline'
            required
            ></input>
            </label>

            <label className='twitter'>Twitter
            <input 
            type="text"
            name="twitter"
            placeholder='twitter'
            required
            ></input>
            </label>

            <label className='instagram'>Instagram
            <input 
            type="text"
            name="instagram"
            placeholder='instagram'
            required
            ></input>
            </label>

            <label className='facebook'>Facebook
            <input 
            type="text"
            name="facebook"
            placeholder='facebook'
            required
            ></input>
            </label>

            <p>By clicking Submit, you agree to Trail Ahead's User Agreement, Privacy Policy, and Cookie Policy.</p>

            <button className='submit-bttn'>Submit</button>

          </div>
          </div>
       </form>
    </div>

    
  );
  }

export default Optional