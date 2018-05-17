import { HEADER_COLLAPSED, HEADER_HELP_TOGGLED, HEADER_USER_TOGGLED, HEADER_SEARCH_FORM_DISPLAY } from '../types/header'

export const navbarCollapse = value => {
    return dispatch => {
        return dispatch({type: HEADER_COLLAPSED, payload: value})
    }
}

export const navbarHelpToggle = value => {
    return dispatch => {
        return dispatch({type: HEADER_HELP_TOGGLED, payload: value})
    }
}

export const navbarUserToggle = value => {
    return dispatch => {
        return dispatch({type: HEADER_USER_TOGGLED, payload: value})
    }
}

export const searchFormDisplay = value => {
    return dispatch => {
        return dispatch({type: HEADER_SEARCH_FORM_DISPLAY, payload: value})
    }
}