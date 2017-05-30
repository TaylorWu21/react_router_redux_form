import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'; 

class PostNew extends Component {

  renderField(field) {
    return(
      <div className='form-group'>
        <label>{field.label}</label>
        <input
          className='form-control'
          type='text'
          {...field.input}
        />
        {field.meta.error}
      </div>
    );
  }

  render() {
    return(
      <form>
        <Field
          label='Title for Post'
          name='title'
          component={this.renderField}
        />
        <Field 
          label='Categories'
          name='categories'
          component={this.renderField}
        />
        <Field 
          label='Post Content'
          name='content'
          component={this.renderField}
        />
        <button type='submit'>Submit</button>
      </form>
    );
  }
}

function validate(values) {
  // console.log(values) => { title: '123', categories: 'wer', content: '123' }
  const errors = {};

  // Validate the inputs from 'values'
  if(!values.title) {
    errors.title = "Enter a title!";
  }
  if(!values.categories) {
    errors.categories = "Enter some categories";
  }
  if(!values.content) {
    errors.content = 'Enter some content please';
  }

  // If errors is empty the form is fine to submit
  // If errors has *and* properties, redux form assumes form is invalid

  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostNew);