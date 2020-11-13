import React from "react";
import { useState } from 'react';
const GENDERS = ['Male', 'Female', 'Non-Binary', 'Other'];
const RACES = ['White', 'Hisoanic or Latino', 'Black or African American', 
'Native American or Anerican Indian', 'Asian / Pacific Islander', 'Other'];


function EditProfile() {
    const [values, setValues] = useState({
      firstName: '', lastName: '', major: '', minor: '', gender: '', race: '', bio: ''
    });
  
    const set = name => {
      return ({ target: { value } }) => {
        setValues(oldValues => ({...oldValues, [name]: value }));
      }
    };

    return (
      <form>
        <h2>Profile</h2>

        <div className="container">
          <div>
              <label>First Name*: </label>
              <input value={values.firstName} onChange={set('firstName')} />
          </div>

          { "       " }
          <div> 
              <label>Last Name*:</label>
              <input value={values.lastName} onChange={set('lastName')} />
          </div>

        </div>

        <br></br>

        <div className="container">
          <div> 
            <label>Major*: </label>
            <input value={values.major} onChange={set('major')} />
            </div>

          { "         " }
          <div>
              <label>Minor / Second Major (if applicable): </label>
              <input value={values.minor} onChange={set('minor')} />
          </div>
        </div>
      
        <br></br>

        <div className="container">

          <div> 
            <label>Gender*:</label>
              <select value={values.gender} onChange={set('gender')}>
                <option value="">Select gender...</option>
                {GENDERS.map(c => <option key={c}>{c}</option>)}
              </select>
          </div>

          <div> 
            <label>Ethnicity*:</label>
              <select value={values.race} onChange={set('race')}>
                <option value="">Select gender...</option>
                {RACES.map(c => <option key={c}>{c}</option>)}
              </select>
          </div>
        </div>
        
        <br></br>
        <br></br>

  			{ "         " }

        <div className="container">
        <label>Brief Biography:</label>
        <textarea value={values.bio} onChange={set('bio')} />
  
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
        </div>

      </form>
    );
  }

export default EditProfile;
