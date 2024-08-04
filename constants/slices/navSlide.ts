import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    origin: null,
    destination: null,
    travelTime: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload
        },
        setDestination: (state, action) => {
            state.destination = action.payload
        },
        setTravelTime: (state, action) => {
            state.travelTime = action.payload
        }

    }
})

export const { setOrigin, setDestination, setTravelTime } = navSlice.actions;

// Selectors
export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTime = (state: any) => state.nav.travelTime;

export default navSlice.reducer