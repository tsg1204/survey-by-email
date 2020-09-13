import React from 'react';
import { reduxForm, Field } from 'redux-form';

export default ({ input }) => {

    return (
        <div> 
            <input {...input} /> 
        </div>
    )
}