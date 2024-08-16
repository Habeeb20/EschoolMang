// import axios from 'axios';
// import {
//     getRequest,
//     getSuccess,
//     getFailed,
//     getError,
//     getStudentsSuccess,
//     detailsSuccess,
//     getFailedTwo,
//     getSubjectsSuccess,
//     getSubDetailsSuccess,
//     getSubDetailsRequest
// } from './sclassSlice';

// export const getAllSclasses = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/${address}List/${id}`);
//         if (result.data.message) {
//             dispatch(getFailedTwo(result.data.message));
//         } else {
//             dispatch(getSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getClassStudents = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/Sclass/Students/${id}`);
//         if (result.data.message) {
//             dispatch(getFailedTwo(result.data.message));
//         } else {
//             dispatch(getStudentsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getClassDetails = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/${address}/${id}`);
//         if (result.data) {
//             dispatch(detailsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getSubjectList = (id, address) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/${address}/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSubjectsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
//     dispatch(getRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/FreeSubjectList/${id}`);
//         if (result.data.message) {
//             dispatch(getFailed(result.data.message));
//         } else {
//             dispatch(getSubjectsSuccess(result.data));
//         }
//     } catch (error) {
//         dispatch(getError(error));
//     }
// }

// export const getSubjectDetails = (id, address) => async (dispatch) => {
//     dispatch(getSubDetailsRequest());

//     try {
//         const result = await axios.get(`http://localhost:7000/${address}/${id}`);
//         if (result.data) {
//             dispatch(getSubDetailsSuccess(result.data));
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
    getStudentsSuccess,
    detailsSuccess,
    getFailedTwo,
    getSubjectsSuccess,
    getSubDetailsSuccess,
    getSubDetailsRequest
} from './sclassSlice';

// Fetch all classes
export const getAllSclasses = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/${address}List/${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Fetch students in a class
export const getClassStudents = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/Sclass/Students/${id}`);
        if (result.data.message) {
            dispatch(getFailedTwo(result.data.message));
        } else {
            dispatch(getStudentsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Fetch class details
export const getClassDetails = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/${address}/${id}`);
        if (result.data) {
            dispatch(detailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Fetch subject list
export const getSubjectList = (id, address) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/${address}/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSubjectsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Fetch free class subjects for a teacher
export const getTeacherFreeClassSubjects = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`http://localhost:7000/FreeSubjectList/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSubjectsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}

// Fetch subject details
export const getSubjectDetails = (id, address) => async (dispatch) => {
    dispatch(getSubDetailsRequest());

    try {
        const result = await axios.get(`http://localhost:7000/${address}/${id}`);
        if (result.data) {
            dispatch(getSubDetailsSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error.message));
    }
}
