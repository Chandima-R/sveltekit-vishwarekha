import 'dotenv/config';

export async function get() {
	const response = await fetch('https://vishwarekhafood.com/wp-json/wc/v3/products/', {
		method: 'get',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Credentials: 'include',
			Authorization:
				'Basic ' +
				btoa(
					'ck_d1446ae7147989ad025a5ebf675880958389cb76' +
						':' +
						'cs_6381205250b2b02d2b9677d73685f3e27e5bf15a'
				)
		}
	});
	let products = await response.json();
	products = JSON.stringify(products);

	return {
		body: {
			products
		}
	};
}
