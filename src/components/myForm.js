import React from 'react';
import { Field, reduxForm } from 'redux-form';

let ContactForm = (props) => {

    let submit = (values) => {
        console.log('submit inside form: ')
        console.log(values);
    }


    return (
        <form onSubmit={props.handleSubmit(submit)}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
};

ContactForm = reduxForm({
    form: 'concat'
})(ContactForm);

export default ContactForm;