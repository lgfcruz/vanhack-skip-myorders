const API_ROOT = process.env.REACT_APP_SERVER_URL

export const fetchApi = (schema) => {
  return fetch(`${API_ROOT}/${schema}`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => response.json()
        .then(json => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return json
        })
    )
}