import React from 'react'

export default props => (
    <div className="row">
        <div className="col-xs-12 text-center">
            <div className="form-group has-feedback">
            <input {...props.input}
                className="form-control"
                placeholder={props.placeholder}
                readOnly={props.readOnly}
                type={props.type}
                value={props.value} />
            <span className={`glyphicon glyphicon-${props.icon} form-control-feedback`}></span>
            </div>
        </div>
    </div>
)