export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '48c08cd048mshf967bfa1e3ff7e3p19fe1ajsn95ec75c402bd',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

export const GEO_API_URL='https://wft-geo-db.p.rapidapi.com/v1/geo';

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}