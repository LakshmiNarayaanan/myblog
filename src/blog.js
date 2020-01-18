import React from 'react'
import {connect} from 'react-redux'
import {useraction} from './actions'
import User from './users'

class Blog extends React.Component {

	componentDidMount() {
		this.props.useraction();
	}
	renderList() {
		return this.props.posts.map((post) => {
			return (
			<div key = {post.id}>
			<h3>{post.title}</h3>
			<p>{post.body}</p>
			<User userId = {post.userId}/>
			</div>)}

			)
	}
	render() {
		return (
				<div>
				 	{this.renderList()}
				</div>
			)
	}
}

var mapStateToProps  = (state) => {
	return {posts:state.posts}
}

export default connect(mapStateToProps,{
	useraction
})(Blog)