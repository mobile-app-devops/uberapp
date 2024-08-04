import { configureStore } from '@reduxjs/toolkit'
import navReducer from '@/constants/slices/navSlide'

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})