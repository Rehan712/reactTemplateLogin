export function getDataApi() {
	const data = [
		{
			name: 'rehan',
			password: 'rehan007'
		}
	];
	return data;
}

export function submitDataApi(data) {
	console.log('this is data from api', data);
}
