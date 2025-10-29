import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../redux/slices/studentSlice";

export const store = configureStore({
    reducer: {
        studentSlice: studentSlice,
    },
});