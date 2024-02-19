import React from 'react';
const Destination=()=>{
    return( 
        <div className="col-span-2">
            <label for="destination" class="form-label">Destination:  </label>
            <input type="text" id="destination" name="destination" class="form-input" required/>
        </div>
    );
};
export default Destination