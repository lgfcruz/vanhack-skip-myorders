import { HEADER_COLLAPSED, HEADER_HELP_TOGGLED, HEADER_USER_TOGGLED, HEADER_SEARCH_FORM_DISPLAY } from '../types/header'

const INITIAL_STATE = {
    collapsed: false,
    toggled: false,
    helpToggled: false,
    userToggled: false,
    searchForm: false
}

export default(state = INITIAL_STATE, action) => {
    switch (action.type) {
        case HEADER_COLLAPSED:
            return { ...state, collapsed: action.payload }
        case HEADER_HELP_TOGGLED:
            return { ...state, helpToggled: action.payload, userToggled: false, toggled: action.payload }
        case HEADER_USER_TOGGLED:
            return { ...state, userToggled: action.payload, helpToggled: false, toggled: action.payload }
        case HEADER_SEARCH_FORM_DISPLAY:
        return { ...state, searchForm: action.payload }
        default:
            return state
    }
}