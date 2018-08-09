import { Map } from 'immutable';

let mapInit = Map({
	id: '',
	name: '',
	url: '',
	abilities: []
});

let initialize = {
	data: mapInit,
	loading: false,
	error: false
}

const pokeReducer = (state = initialize, action) => {
	switch (action.type) {
		case 'REQUEST_POKE': 
			return {...state, loading: true};

		case 'SUCCESS_ADD_POKE':
			return {
				...state,
				data: state.data.set('id', action.payload.id)
				.set('name', action.payload.name)
				.set('url', action.payload.url)
				.set('abilities', action.payload.abilities),
				loading: false,
				error: false
			}

		case 'ERROR_REQUEST':
			return {loading: false, error: true}

		default:
			break;
	}

	return state;
};

export default pokeReducer;