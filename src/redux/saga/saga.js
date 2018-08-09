//import { delay } from 'redux-saga';
//import { call, put, takeLatest, takeEvery, select } from 'redux-saga/effects';
import { call, put, takeLatest, all } from 'redux-saga/effects';
import ApiService from './../../Services/ApiService.js';

function* asyncAddPoke(action) {

	// utiliza-se o try/catch quando se tem uma chamada async com o call.
	try {
		
		// O select dá acesso ao reducer.
		// const pokeAnterior = yield select(state => state.pokeReducer);
		// console.log(pokeAnterior.get('name'));
		
		// Gera um delay de 5s antes de continuar a execução da function.
		// yield delay(5000);
	
		// O call é responsável por fazer chamadas async.
		const poke = yield call(ApiService.getPoke, action.payload.id);

		// put executa uma action do reducer, no caso a type: ADD_POKE. 
		yield put({type: 'SUCCESS_ADD_POKE', payload: poke});

	} catch(err) {
		console.log(err);
		yield put({type: 'ERROR_ADD_POKE'});
	}

	
}

export default function* root() {
	 	yield all([
			// Escuta todas as requisições da type ASYNC_ADD_POKE e dispare 
			// todas na função asyncAddPoke.
			//takeEvery('ASYNC_ADD_POKE', asyncAddPoke)
		
			// Só executa a última requisição.
			takeLatest('REQUEST_POKE', asyncAddPoke)
			]);
}