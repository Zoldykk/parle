import { createSlice } from '@reduxjs/toolkit'

export const modalDisplay = createSlice({
  name: 'isActive',
  initialState: {
    isActive: false
  },
  reducers: {
    display: state => {
      state.isActive = true
    },
    hide: state => {
      state.isActive = false
    }
  }
})

export const { display, hide } = modalDisplay.actions

export default modalDisplay.reducer