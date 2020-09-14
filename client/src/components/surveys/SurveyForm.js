
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';

const FIELDS = [
    {label: 'Survey Title', name: 'title', notValid: 'You must provide a title'},
    {label: 'Subject Line', name: 'subject', notValid: 'You must provide a subject'},
    {label: 'Email Body', name: 'body', notValid: 'Please enter some info'},
    {label: 'Recipient List', name: 'emails', notValid: 'You must provide email or a list of emails'}

];

class SurveyForm extends Component {
    renderFields() {
        return _.map( FIELDS, ({ label, name }) => {
            return <Field  key={name} component={SurveyField} type="text" label={label} name={name} />
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    errors.emails = validateEmails(values.emails || '');

    _.each(FIELDS, ({ name, notValid }) => {
        if (!values[name]) {
            errors[name] = notValid;
        }
    });

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm'
})(SurveyForm);