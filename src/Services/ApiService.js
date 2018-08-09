import { Dropbox } from 'dropbox';
import axios from 'axios';

const pokeUrl = 'http://pokeapi.salestock.net/api/v2/pokemon/';

const token = "XWXkPnN5rtAAAAAAAAAAaCQ7vsYgSGMVKo9trUmviEJ9EafTQgwCoqWHJ_5TTVrS"
const dropbox = new Dropbox({accessToken: token});

class ApiService {

	static getPoke(id) {
		return new Promise((resolve, reject) => {
			axios.get(pokeUrl + id).then(res => {
				//console.log(res.data);
				dropbox.filesGetTemporaryLink({path: `/${id}.jpg`}).then(imgUrl => {
        //console.log(imgUrl);
        const poke = {
					id: res.data.id,
					name: res.data.name,
					url: imgUrl.link,
					abilities: res.data.abilities
				};
				resolve(poke);
      }).catch(err => {
					console.log(err);
        	reject(err);
      	});
			})
			.catch(err => {
				console.log(err);
        reject(err);
      	});
		});
	}
};

export default ApiService;
