import {ADD_STUDENT, REMOVE_STUDENT} from "./actions";
import createId from "./createId"

export default function reducer(state,action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudents = {
        ...action.payload.map((student)) => ({
          ...student,
          id: createId(action.payload),
        })};
      return {
        ...state,
        students: [...state.students, ...newStudent]
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        )
      };
    }
    
  }
};