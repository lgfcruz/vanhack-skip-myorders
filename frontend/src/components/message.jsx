import React from 'react'
import ReduxToastr from 'react-redux-toastr'

export default props => (
    <ReduxToastr
        timeOut={4000}
        newestOnTop={false}
        preventDuplicates={true}
        position="top-left"
        transitionIn="bounceIn"
        transitionOut="bounceOut"
        attention="true"
        progressBar />
)