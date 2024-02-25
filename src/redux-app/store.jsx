import { configureStore } from '@reduxjs/toolkit'
import packageReducer from './PackageSlice'

export const store = configureStore({
	reducer: {
		package: packageReducer
	}
})