import jsonplaceholderapi from '../jsonplaceholderapi.js'
import _ from 'lodash'
export var useraction = ()=> {

	return async(dispatch) => {
		var response = await jsonplaceholderapi.get('/posts')

		dispatch({type:'posts',
			payload: {
				data:response.data
			}
		})
	}
	
}

export var getUser = (userId)=> {
	return  async (dispatch) => {
		dispatch(fetch_user(userId,dispatch))
		/*var response = await jsonplaceholderapi.get('/users/' + userId )

		dispatch({type:'users',
			payload: {
				data:response.data
			}
		})*/
	}
	
}

var fetch_user = _.memoize(async (userId,dispatch) => {
	var response = await jsonplaceholderapi.get('/users/' + userId )

		dispatch({type:'users',
			payload: {
				data:response.data
			}
		})
})



