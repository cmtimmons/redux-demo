import React, {PropTypes, Component} from 'react';
import { reduxForm, Field } from 'redux-form';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'redux-router';
import FlatButton from 'material-ui/FlatButton';
import axios from 'axios';
import { TextField } from 'redux-form-material-ui';

const styles = {
    form: {
        display: "flex",
        flexDirection: "column",
        height: "100%"
    },
    field: {
        marginTop: "10px",
        marginBottom: "10px"
    },
    error: {
        color: "red",
        height: "18px"
    },
    buttons: {
        marginTop: "auto",
        marginBottom: "32px",
        marginLeft: "auto",
        marginRight: "auto"
    }
}

const renderButton = (button, index) => {
    let {raised, ...props} = button;
    return (
        raised ? <RaisedButton key={index}{...props}/> : <FlatButton key={index}{...props} />
    )
};
const getButtons = buttons => (
    <div style={{...styles.buttons, ...buttons.style }}>
        {buttons.buttons.map(renderButton) }
    </div>
)

const renderField = (field, index) => {
    let props = {...field, style: styles.field }
    return (<Field key={index} {...props}/>);
}

const getFormComponent = config => props => {
    const { fields, buttons, name, submit} = config;
    const {handleSubmit, error} = props;
    return (
        <form style= { styles.form } 
              onSubmit= { submit ? handleSubmit(submit(props)) : ()=>{} } >
            { fields.map(renderField) }
            < div style= { styles.error } > { error && <strong>{error}</strong> }</div >
            { getButtons(buttons(props)) }
        </form >
    );
}

export default function createForm(form) {
    let {onSubmitSuccess, validate, name, ...config} = form;
    if (!onSubmitSuccess){
        onSubmitSuccess = ()=>{}
    }
    return reduxForm({
        form: name,
        onSubmitSuccess,
        validate
    })(getFormComponent(config));
}