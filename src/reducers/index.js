import {combineReducers} from 'redux'

var user = (user = null,action) => {
	if(action.type==='users') {
		console.log(action.payload.data.name)
		return action.payload.data.name
	}
	return user
}

var posts = (posts = [],action) => {
	if(action.type==='posts') {
		console.log("hurray from posts")
		console.log(action.payload.data)
		return action.payload.data
	}
	return posts
}

export default combineReducers({
	user,
	posts
})