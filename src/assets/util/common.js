import {get,post} from './http.js'

function login(params){
	return post('/login',params)
}

function authenticate(params){
	return post('/authenticate',params)
}

function updateVoteResults(params){
	return post('/api/votes/update',params)
}

function getVoteResults(){
	return get('/api/votes')
}

export default{
	login:login,
	authenticate:authenticate,
	updateVoteResults:updateVoteResults,
	getVoteResults:getVoteResults
}