
import { useState } from 'react'


function Optional () {
    const[experience, setExperience ] = useState('');
    const [zipCode, setZipCode] = useState('');
      
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handleZipCodeChange = (event) => {
        const value = event.target.value;
        if (value.length <= 5 && /^\d*$/.test(value)) {
          setZipCode(value);
        }
      };

  return (
    <div className="form-contain">
        <form>
            <h1>
                <strong>Complete Your Profile</strong>
                <p>All fields are required. </p>
            </h1>
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

            {/* <label className='upload'>Upload Photo:
            <input 
            type="text"
            name="state"
            placeholder='state'
            required
            ></input>
            </label> */}

            
       



            
        </div>
       </form>
    </div>

    
  );
  }

export default Optional