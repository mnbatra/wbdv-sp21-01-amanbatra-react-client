const initialState = {
  modules: [
  ]
}

const moduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FIND_MODULES_FOR_COURSE":
      return {
        ...state,
        modules: action.modules
      }
    case "CREATE_MODULE":
      const newState1 =  {
        modules:[ ...state.modules,
          action.module
        ]
      }
      return newState1
    case "DELETE_MODULE":
      const newState2 = {
        modules: state.modules.filter(module => {
          if (module._id === action.moduleToDelete._id) {
            return false
          } else {
            return true
          }
        })
      }
      return newState2
    case "UPDATE_MODULE":
      const newState3 = {
        modules: state.modules.map(m => {
          if (m._id === action.module._id) {
            return action.module
          } else {
            return m
          }
        })
      }
      return newState3
    default:
      return state
  }
}

export default moduleReducer