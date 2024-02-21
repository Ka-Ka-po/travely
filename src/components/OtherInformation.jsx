import React from 'react'

const OtherInformation = () => {
  return (
    <div>
        <div>
            <h2 class="text-2xl font-semibold mb-4">Other Information</h2>
            <div class="grid grid-cols-2 gap-4">
                <div>
                    <label for="duration" class="form-label">Duration (Days)</label>
                    <input type="number" id="duration" name="duration" min="0" class="form-input" required/>
                </div>
                <div>
                    <label for="start_date" class="form-label">Start Date</label>
                    <input type="date" id="start_date" name="start_date" class="form-input" required/>
                </div>
                <div>
                    <label for="end_date" class="form-label">End Date</label>
                    <input type="date" id="end_date" name="end_date" class="form-input" required/>
                </div>
                <div>
                    <label for="price" class="form-label">Price ($)</label>
                    <input type="number" id="price" name="price" min="0" step="0.01" class="form-input" required/>
                </div>
                <div>
                    <label for="discount" class="form-label">Discount (%)</label>
                    <input type="number" id="discount" name="discount" min="0" max="100" step="0.01" class="form-input" required/>
                </div>
            </div>
        </div>
        <div></div>
        <div class="flex justify-end">
            <button type="submit" class="bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors duration-300">Add Package</button>
        </div>
    </div>
  )
}

export default OtherInformation