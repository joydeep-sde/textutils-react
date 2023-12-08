import React from 'react'

function Alert(props) {

  const captitalize = (word)=>{
    const lower = word.toLowerCase();

    if(typeof lower === 'string'){
        console.log(lower.charAt(0).toUpperCase()+lower.slice(1));

        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }else{
        console.log('Given value is not a string');
    }
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{captitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert
