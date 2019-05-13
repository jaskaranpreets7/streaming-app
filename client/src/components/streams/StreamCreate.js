import React, {Component } from 'react';
import { Field, reduxForm  } from "redux-form";
import { connect}   from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends Component {

  renderError = ({error, touched}) =>{
    if(touched && error){
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div> 
      )
    }
  };

  renderInput = ({input, label, meta}) => {
    //(formProps) => ...formProps.input or ({input}) => ...input
    //take out all the input properties form the formProps object
    const className = ` field ${meta.error && meta.touched ? 'error' :''} `
    return (
        <div className={className}>
        <label>{label}</label>
          <input {...input} autoComplete="off"/>
          {this.renderError(meta)}
        </div>
      )
  };

  onSubmit =(formData)=>{
    console.log(formData)
    this.props.createStream(formData)
  }

  render(){
    console.log(this.props)
    return (
     <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
       <Field
          name="title" 
          component={this.renderInput} 
          label="Enter Title"
        />
       <Field 
          name="description" 
          component={this.renderInput} 
          label="Enter Description"
       />
       <button className="ui button primary">Submit</button>
     </form> 
    )
  }
}
const validate = formData => {

  const error = {}
  if(!formData.title){
    error.title = "You must enter a title"
  }
  if(!formData.description){
    error.description = "You must enter a description"
  }

  return error;

};

const formWrapped = reduxForm({
  form : 'streamCreate',
  validate : validate
}) (StreamCreate);


export default connect(null, {createStream: createStream})(formWrapped)


  