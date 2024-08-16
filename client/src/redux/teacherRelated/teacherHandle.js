// import axios from 'axios';
// import {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     postDone,
//     doneSuccess
// } from './teacherSlice';

// export const getAllTeachers = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/Teachers/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getTeacherDetails = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/Teacher/${id}`);
//         if (result.data) {
//             dispatch(doneSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         await axios.put(`http://localhost:7000/TeacherSubject`, { teacherId, teachSubject }, {
//             headers: { 'Content-Type': 'application/json' },
//         });
//         dispatch(postDone());
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
    postDone,
    doneSuccess,
} from './teacherSlice';

// Fetch all teachers by school ID
export const getAllTeachers = (schoolId) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/Teachers/${schoolId}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message || 'Failed to fetch teachers'));
    }
};

// Fetch details of a single teacher by teacher ID
export const getTeacherDetails = (teacherId) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/Teacher/${teacherId}`);
        if (result.data) {
            dispatch(doneSuccess(result.data));
        } else {
            dispatch(getFailed('Failed to fetch teacher details'));
        }
    } catch (error) {
        dispatch(getError(error.message || 'Failed to fetch teacher details'));
    }
};

// Update the subject a teacher teaches
export const updateTeachSubject = (teacherId, teachSubject) => async (dispatch) => {
    dispatch(getRequest());

    try {
        await axios.put(`http://localhost:7000/TeacherSubject`, { teacherId, teachSubject }, {
            headers: { 'Content-Type': 'application/json' },
        });
        dispatch(postDone());
    } catch (error) {
        dispatch(getError(error.message || 'Failed to update teaching subject'));
    }
};
