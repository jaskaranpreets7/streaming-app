import React, {Component } from 'react';
import { connect}   from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm'

class StreamCreate extends Component {

  onSubmit = (formData)=>{
    this.props.createStream(formData)
  }

  render(){
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit}/>
      </div>

    )
  }
}

export default connect(null, {createStream: createStream})(StreamCreate)


  