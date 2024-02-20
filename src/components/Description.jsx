import React from "react";
const Description = () => {
    return(
        <div class="col-span-2">
                <label for="description" class="form-label">Description</label>
                <textarea id="description" name="description" rows="4" class="form-input" required></textarea>
        </div>
    );
};
export default Description