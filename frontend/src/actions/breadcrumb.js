import {BREADCRUMB_SHOWED} from '../types/breadcrumb'

export const setBreadcrumbs = (...items) => {
  return dispatch => {
    const breadcrumbs = []
    if ((items) && (items.length > 0)) {
      items.map((e, index) => {
        let _name = ''
        let _href = ''
        if (e.hasOwnProperty('name')) {
          _name = e.name
        } else {
          _name = e
        }
        if (e.hasOwnProperty('href')) {
          _href = e.href
        }
        return breadcrumbs[index] = {
          name: _name,
          href: _href
        }
      })
    }
    dispatch({type: BREADCRUMB_SHOWED, payload: breadcrumbs})
  }
}