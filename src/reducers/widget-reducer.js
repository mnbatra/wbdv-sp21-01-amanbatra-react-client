const initialState = {
    widgets: []
}

const widgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }

        case "FIND_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets: action.widgets
            }

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            }

        case "FIND_WIDGET":
            return {
                widgets: [action.widget]
            }

        case "UPDATE_WIDGET":
            return {
                widgets: state.widgets.map(widget =>
                    widget.id === action.widget.id ? action.widget : widget)
            }

        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget =>
                    widget.id !== action.widgetToDelete.id)
            }
        case "CLEAN_WIDGET":
            return {
                ...state,
                widgets: []
            }
        default:
            return state
    }
}

export default widgetReducer