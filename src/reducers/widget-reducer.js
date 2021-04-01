const initialState = {
    widgets: []
}
const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CLEAN_WIDGET":
            return {
                ...state,
                widgets: []
            }
        case "CREATE_WIDGET":
            console.log(action.widget)
            return  {
                ...state,
                widgets: [...state.widgets, action.widget]
            }
        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    if (w.id === action.widget.id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.filter(w => {
                    if (w.id === action.wid) {
                        console.log("here")
                        return false
                    } else {
                        console.log("her1")
                        return true
                    }
                })
            }
        default:
            return state
    }
}

export default widgetReducer