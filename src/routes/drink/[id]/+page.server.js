import { data } from '../../../lib/server/placeholder';

export function load({ params }) {
	const drink = data.find((drink) => drink.id === parseInt(params.id));

	console.log(drink);

	return {
		drink
	};
}
