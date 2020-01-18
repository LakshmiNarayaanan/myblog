import React from 'react'
import {connect} from 'react-redux'
import {getUser} from './actions'

class User extends React.Component {
	componentDidMount() {
		this.props.getUser(this.props.userId)
	}

	render() {
			if(this.props.user)
			return (<h5>{this.props.user}</h5>)
			return null
	}




}

var mapStateToProps  = (state) => {
	return {user:state.user}
}

export default connect(mapStateToProps,{getUser})(User)