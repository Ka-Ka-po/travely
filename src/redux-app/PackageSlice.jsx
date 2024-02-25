import { createSlice } from '@reduxjs/toolkit'


const initialState = [
		{
			id: 1,
	        packageName: 'Summer Vacation',
	        imageUrl: 'd1_img.png', 
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
	        packageName: 'Ready for Fun !!',
	        imageUrl: 'd2_img.png', 
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
	        packageName: 'Tato chiya mitho chiya',
	        imageUrl: 'd3_img.png', 
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
	        packageName: 'Jio Hajaro Saal',
	        imageUrl: 'd4_img.png', 
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