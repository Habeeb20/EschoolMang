// import axios from 'axios';
// import {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     stuffDone
// } from './studentSlice';

// export const getAllStudents = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/Students/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const updateStudentFields = (id, fields, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.put(`http://localhost:7000/${address}/${id}`, fields, {
//             headers: { 'Content-Type': 'application/json' },
//         });
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(stuffDone());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const removeStuff = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.put(`http://localhost:7000/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(stuffDone());
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }


import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    stuffDone
} from './studentSlice';

// Action to get all students based on an ID
export const getAllStudents = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/Students/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Action to update student fields based on ID and address
export const updateStudentFields = (id, fields, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.put(`http://localhost:7000/${address}/${id}`, fields, {
            headers: { 'Content-Type': 'application/json' },
        });
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(stuffDone());
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Action to remove stuff based on ID and address
export const removeStuff = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`http://localhost:7000/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(stuffDone());
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}
