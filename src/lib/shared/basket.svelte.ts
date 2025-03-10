export type BasketItem = {
	id: string;
	quantity: number;
};

let basket: BasketItem[] = $state([]);

export function getBasket() {
	return basket;
}
export function addToBasket(productId: string, quantity = 1) {
	const existingItem = basket.find((item) => item.id === productId);
	if (existingItem) {
		basket = basket.map((item) =>
			item.id === productId ? { ...item, quantity: item.quantity + quantity } : item
		);
	} else {
		basket = [...basket, { id: productId, quantity }];
	}
}

export function removeFromBasket(productId: string) {
	basket = basket.filter((item) => item.id !== productId);
}

export function updateQuantity(productId: string, quantity: number) {
	if (quantity <= 0) {
		removeFromBasket(productId);
	} else {
		basket = basket.map((item) => (item.id === productId ? { ...item, quantity } : item));
	}
}

export function clearBasket() {
	basket = [];
}
