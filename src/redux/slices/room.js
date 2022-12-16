import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAccessTokenFromLS } from '../../utils/auth';

const initialState = {
  isLoading: false,
  error: false,
  pendingRooms: [],
}

const slice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },

    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    getPendingRoomsSuccess(state, action) {
      state.isLoading = false;
      state.pendingRooms = action.payload;
    },
  }
})

export default slice.reducer;

export function getPendingRooms() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const access_token = getAccessTokenFromLS();
      const response = await axios.get('http://localhost:3000/rooms/find/pending-rooms', {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      });
      
      dispatch(slice.actions.getPendingRoomsSuccess(response.data.response.rooms))
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  }
}

export function changeStatusRoom(roomId, statusId) {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());

    try {
      const access_token = getAccessTokenFromLS();
      const response = await axios.get(`http://localhost:3000/rooms/change-status/${roomId}`, statusId, {
        headers: {
          Authorization: `Bearer ${access_token}`
        },

      });
      console.log("🚀 ~ file: room.js:60 ~ return ~ response", response)

    } catch (error) {
      dispatch(slice.actions.hasError(error));

    }
  }
}
