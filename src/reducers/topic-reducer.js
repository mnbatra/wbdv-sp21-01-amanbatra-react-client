const initialState = {
  topics: []
}

const topicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_TOPIC":
      console.log(action.topic)
      return  {
        ...state,
        topics: [...state.topics, action.topic]
      }
    case "FIND_TOPIC_FOR_LESSON":
      return {
        ...state,
        topics: action.topics
      }
    case "UPDATE_TOPIC":
      return {
        ...state,
        topics: state.topics.map(t => {
          if (t._id === action.topic._id) {
            return action.topic
          } else {
            return t
          }
        })
      }
    case "DELETE_TOPIC":
      return {
        ...state,
        topics: state.topics.filter(t => {
          if (t._id === action.topic._id) {
            return false
          } else {
            return true
          }
        })
      }
    case "CLEAN_TOPIC":
      return {
        ...state,
        topics: []
      }
    default:
      return state
  }
}

export default topicReducer