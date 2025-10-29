import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async action to fetch student details
export const fetchStudentDetails = createAsyncThunk(
    "student/fetchStudentDetails",
    async (rollNo) => {
        const response = await axios.get(` https://techskillfinder-backend.onrender.com/api/getStudent/${rollNo}`);
        console.log(response.data.data);
        return response.data.data;
    }
);

export const getAllStudents = createAsyncThunk(
    "student/getAllStudents",
    async () => {
        const response = await axios.get(` https://techskillfinder-backend.onrender.com/api/getAll/`);
        return response.data.data;
    }
);

const studentSlice = createSlice({
    name: "student",
    initialState: {
        student: null,
        studentList: [],
        loading: false,
        error: null,
    },
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchStudentDetails.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchStudentDetails.fulfilled, (state, action) => {
                state.loading = false;
                state.student = action.payload;
            })
            .addCase(fetchStudentDetails.rejected, (state) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(getAllStudents.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllStudents.fulfilled, (state, action) => {
                state.loading = false;
                state.studentList = action.payload;
            })
            .addCase(getAllStudents.rejected, (state) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default studentSlice.reducer;
