const initialState = {
  modules: [
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_MODULE":
      const nextState1 =  {
        modules:[ ...state.modules,
          action.module
        ]
      }
      return nextState1

    case "FIND_MODULE":
      return {
        ...state,
        modules: action.modules
      }

    case "DELETE_MODULE":
      const nextState2 = {
        modules: state.modules.filter(module => {
          if (module._id === action.moduleToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return nextState2
    case "UPDATE_MODULE":
      const nextState3 = {
        modules: state.modules.map(m => {
          if (m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
      return nextState3
    default:
      return state
  }
}

export default moduleReducer