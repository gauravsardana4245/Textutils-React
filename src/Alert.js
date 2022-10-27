import React from 'react'
import "./Alertstyle.css"

export default function Alert(props) {
    const capitalize = (message)=> {
        let lower = message.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
   props.alert && 
   <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
 
</div>

  )
}
