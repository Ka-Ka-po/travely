import { createSlice } from '@reduxjs/toolkit'


const initialState = [
		{
			id: 1,
	        packageName: 'Null',
	        imageUrl: 'd1_img', 
	        destination: 'Bouddhanath Temple',
	        description: 'Null',
	        duration: 'Null',
	        startDate: 'Null',
	        endDate: 'Null',
	        price: 499,
	        discount: 0,	
		},
		{
			id: 2,
	        packageName: 'Null',
	        imageUrl: 'd2_img', 
	        destination: 'Sauraha, Chitwan',
	        description: 'Null',
	        duration: 'Null',
	        startDate: 'Null',
	        endDate: 'Null',
	        price: 499,
	        discount: 0,	
		},
		{
			id: 3,
	        packageName: 'Null',
	        imageUrl: 'd3_img', 
	        destination: 'Illam',
	        description: 'Null',
	        duration: 'Null',
	        startDate: 'Null',
	        endDate: 'Null',
	        price: 499,
	        discount: 0,	
		},
		{
			id: 4,
	        packageName: 'Null',
	        imageUrl: 'd4_img', 
	        destination: 'Lumbini',
	        description: 'Null',
	        duration: 'Null',
	        startDate: 'Null',
	        endDate: 'Null',
	        price: 499,
	        discount: 0,	
		},
	]	

export const packageSlice = createSlice({
	name: "package",
	initialState,
	reducers: {
		addPackage: (state, action) => {
			console.log("action",action.payload)
			return [...state, ...action.payload]
		}
	}
})

export const { addPackage } = packageSlice.actions
export default packageSlice.reducer