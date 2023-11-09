const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modale',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
