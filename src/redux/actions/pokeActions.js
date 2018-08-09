/*export function addPoke(id) {
	return {
		type: 'ASYNC_ADD_POKE',
		payload: {
			id: id,
		}
	}
}*/

export function requestAddPoke(id) {
	return {
		type: 'REQUEST_POKE',
		payload: {
			id: id,
		}
	}
}