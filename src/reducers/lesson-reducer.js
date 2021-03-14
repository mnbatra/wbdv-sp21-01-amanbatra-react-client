const initialState = {
  lessons:[

  ]
}

const lessonReducer = (state=initialState, action) => {
  switch (action.type) {
    case "CREATE_LESSON":
      return {
        ...state,
        lessons: [
          ...state.lessons,
          action.lesson,
        ]
      }
    case "FIND_LESSONS":
      return {
        ...state,
        lessons: action.lessons
      }
    case "DELETE_LESSON":
      const newState1 = {
        lessons: state.lessons.filter(lesson => {
          if (lesson._id === action.lessonToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState1
    case "UPDATE_LESSON":

      const newState = {
        lessons: state.lessons.map(l => {
          if (l._id === action.lesson._id) {
            return action.lesson
          } else {
            return l
          }
        })
      }
      return newState
    case "CLEAN_LESSONS":
      return {
        ...state,
        lessons: []
      }
    default:
      return state
  }
}

export default lessonReducer