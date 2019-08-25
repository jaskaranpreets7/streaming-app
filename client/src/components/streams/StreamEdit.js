import React, {Component} from 'react'
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream,editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends Component{

  componentDidMount(){
    this.props.fetchStream(this.props.match.params.id)
  }
  onSubmit = (formData) => {
    this.props.editStream(this.props.match.params.id,formData)
  }

  render(){
    if(!this.props.stream) return <div>Loading...</div>
    return (
      <div>
        <h3>Edit Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
          />
      </div>
    )
  }
}

const  mapStateToProps = (state, ownProps) => {
  // console.log(ownProps)
  return {
    stream : state.streams[ownProps.match.params.id]
  }
}

export default  connect(mapStateToProps, {fetchStream : fetchStream,editStream:editStream})(StreamEdit);