export type BasketItem = {
	id: string;
	quantity: number;
};

let basket: BasketItem[] = $state([]);

export function getBasket() {
	return basket;
}

export function updateBasket(storedBasket: BasketItem[]) {
	basket = storedBasket;
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
	localStorage.setItem('basket', JSON.stringify(basket));
}

export function removeFromBasket(productId: string) {
	basket = basket.filter((item) => item.id !== productId);
	localStorage.setItem('basket', JSON.stringify(basket));
}

export function updateQuantity(productId: string, quantity: number) {
	if (quantity <= 0) {
		removeFromBasket(productId);
	} else {
		basket = basket.map((item) => (item.id === productId ? { ...item, quantity } : item));
	}
	localStorage.setItem('basket', JSON.stringify(basket));
}

export function clearBasket() {
	basket = [];
	localStorage.setItem('basket', JSON.stringify(basket));
}
