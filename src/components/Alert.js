import React from 'react'

const Alert = (props) => {
    console.log("in show alert ", props.alert)
    return (
        <div>
            {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
                {props.alert.msg}
            </div>}
        </div>
    )
}

export default Alert