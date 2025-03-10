export type Product = {
	id: string;
	name: string;
	category: string;
	handle: string;
	price: number;
	availableStock: number;
	images: string[];
	description: string;
	quantity?: number;
};

export const mockProductData = [
	{
		id: '1',
		name: 'Spicy Dragon Noodles',
		category: 'Spicy',
		handle: 'spicy-dragon-noodles',
		price: 5.99,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		description:
			'Experience the fiery blast of the Spicy Dragon Noodles, which bring a warming heat that dances on your palate with a distinctive blend of peppers and spices for an unforgettable noodle experience.'
	},
	{
		id: '2',
		name: 'Seaweed Whisper',
		category: 'Seafood',
		handle: 'seaweed-whisper',
		price: 6.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		description:
			"Dive into the ocean's embrace with Seaweed Whisper, instant noodles that capture the subtle sweetness of seaweed and the savory essence of seafood in every bite."
	},
	{
		id: '3',
		name: 'Curry Carnival',
		category: 'Curry',
		handle: 'curry-carnival',
		price: 6.99,
		availableStock: 50,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		description:
			'Join the Curry Carnival with these unforgettable noodles that blend exotic spices and the creamy tang of coconut milk for a flavor journey through the heart of Asia.'
	},
	{
		id: '4',
		name: 'Soy Serenity',
		category: 'Vegan',
		handle: 'soy-serenity',
		price: 5.49,
		availableStock: 2,
		images: [
			'https://i.postimg.cc/ZnkP6B7D/DALL-E-2025-03-05-09-21-24-A-vibrant-and-creamy-noodle-packet-labeled-Truffle-Parmesan-Ramen-Th.webp',
			'https://i.postimg.cc/yxFmj126/DALL-E-2025-03-05-09-21-25-A-realistic-photograph-of-a-steaming-bowl-of-Truffle-Parmesan-Ramen-Th.webp'
		],
		description:
			'Let Soy Serenity lull you into a tranquil state with its rich umami flavor and a hint of mirin that adds a touch of sweetness to the wholesome vegan delight.'
	},
	{
		id: '5',
		name: 'Chili Twister',
		category: 'Spicy',
		handle: 'chili-twister',
		price: 5.99,
		availableStock: 25,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		description:
			"Spice up your meal with Chili Twister, where the bold flavors of chili peppers and garlic create a tantalizing taste that's not for the faint-hearted."
	},
	{
		id: '6',
		name: 'Ocean Bliss',
		category: 'Seafood',
		handle: 'ocean-bliss',
		price: 5.99,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Feel the ocean breeze with Ocean Bliss noodles, a delightful dish bringing the harmonizing flavors of shrimp and kelp to your kitchen in a blink of time.'
	},
	{
		id: '7',
		name: 'Coconut Craze',
		category: 'Curry',
		handle: 'coconut-craze',
		price: 7.29,
		availableStock: 18,
		images: [
			'https://i.postimg.cc/Gtr8ckSr/DALL-E-2025-03-04-22-13-33-A-vibrant-and-flavorful-noodle-packet-labeled-Tikka-Masala-Noodles-T.webp',
			'https://i.postimg.cc/fbGSP4cV/DALL-E-2025-03-04-22-13-35-A-realistic-photograph-of-a-steaming-bowl-of-Tikka-Masala-Noodles-The.webp'
		],
		description:
			'Indulge in the silky smoothness of Coconut Craze noodles, where exuberant curry spices meet the soothing texture of coconut milk for the perfect tropical escape.'
	},
	{
		id: '8',
		name: 'Bamboo Zen',
		category: 'Vegan',
		handle: 'bamboo-zen',
		price: 5.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			'Embrace a moment of peace with Bamboo Zen noodles. Nutty sesame seeds perfectly balance the gentle crunch of bamboo shoots and tender noodles for a wholesome meal.'
	},
	{
		id: '9',
		name: 'Inferno Wave',
		category: 'Spicy',
		handle: 'inferno-wave',
		price: 6.39,
		availableStock: 3,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Riding on an Inferno Wave, these noodles pack a punch with their fiery blend of chilies and smoky paprika, challenging even the bravest of spice enthusiasts.'
	},
	{
		id: '10',
		name: 'Pearl Diver',
		category: 'Seafood',
		handle: 'pearl-diver',
		price: 6.59,
		availableStock: 95,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		description:
			'Uncover the treasures of the sea with Pearl Diver noodles. Infused with the robust flavor of clams and scallions, each bite takes you on a maritime adventure.'
	},
	{
		id: '11',
		name: 'Pumpkin Spice Rhapsody',
		category: 'Vegan',
		handle: 'pumpkin-spice-rhapsody',
		price: 5.89,
		availableStock: 5,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		description:
			'Embrace the flavors of autumn with Pumpkin Spice Rhapsody noodles, where rich, roasted pumpkin meets aromatic spices for a cozy culinary delight.'
	},
	{
		id: '12',
		name: 'Wasabi Rush',
		category: 'Spicy',
		handle: 'wasabi-rush',
		price: 6.29,
		availableStock: 12,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		description:
			'Brace yourself for the Wasabi Rush, an explosion of bold, intense flavors that bring a fresh, zesty kick with every bite of these dynamic noodles.'
	},
	{
		id: '13',
		name: 'Coral Reef Chowder',
		category: 'Seafood',
		handle: 'coral-reef-chowder',
		price: 7.69,
		availableStock: 60,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Coral Reef Chowder noodles are a symphony of ocean treasures, mingling creamy broth with succulent seafood pieces that transport your taste buds seaside.'
	},
	{
		id: '14',
		name: 'Golden Turmeric Bliss',
		category: 'Curry',
		handle: 'golden-turmeric-bliss',
		price: 6.49,
		availableStock: 81,
		images: [
			'https://i.postimg.cc/Gtr8ckSr/DALL-E-2025-03-04-22-13-33-A-vibrant-and-flavorful-noodle-packet-labeled-Tikka-Masala-Noodles-T.webp',
			'https://i.postimg.cc/fbGSP4cV/DALL-E-2025-03-04-22-13-35-A-realistic-photograph-of-a-steaming-bowl-of-Tikka-Masala-Noodles-The.webp'
		],
		description:
			'Bask in the healing glow of Golden Turmeric Bliss noodles, where golden spices meld with a savory curry base for an invigorating and tasty meal.'
	},
	{
		id: '15',
		name: 'Volcano Burst',
		category: 'Spicy',
		handle: 'volcano-burst',
		price: 7.29,
		availableStock: 4,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			'Feel the fury of nature with Volcano Burst noodles, an eruption of spice and savory goodness that’s as thrilling as descending into a fiery crater.'
	},
	{
		id: '16',
		name: 'Sakura Sea Breeze',
		category: 'Seafood',
		handle: 'sakura-sea-breeze',
		price: 6.59,
		availableStock: 7,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Whisk yourself away to a seaside escape with Sakura Sea Breeze noodles, where floral notes of cherry blossom meld delicately with seafood to soothe your soul.'
	},
	{
		id: '17',
		name: 'Mango Masala',
		category: 'Curry',
		handle: 'mango-masala',
		price: 6.89,
		availableStock: 15,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		description:
			'Tantalize your taste buds with Mango Masala noodles, blending the sweet essence of ripe mangoes with aromatic spices to stir up delicious memories of a tropical paradise.'
	},
	{
		id: '18',
		name: 'Almond Graze',
		category: 'Vegan',
		handle: 'almond-graze',
		price: 5.79,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			'Savor the nourishing crunch of Almond Graze, with sliced almonds and fresh greens combining flawlessly in these vegan-friendly noodles for a revitalizing dish.'
	},
	{
		id: '19',
		name: 'Crimson Heat',
		category: 'Spicy',
		handle: 'crimson-heat',
		price: 6.99,
		availableStock: 8,
		images: [
			'https://i.postimg.cc/ZnkP6B7D/DALL-E-2025-03-05-09-21-24-A-vibrant-and-creamy-noodle-packet-labeled-Truffle-Parmesan-Ramen-Th.webp',
			'https://i.postimg.cc/yxFmj126/DALL-E-2025-03-05-09-21-25-A-realistic-photograph-of-a-steaming-bowl-of-Truffle-Parmesan-Ramen-Th.webp'
		],
		description:
			'Prepare yourself for an adventure through spicy nirvana with Crimson Heat noodles, where a radiant blend of scarlet peppers ignites an unapologetic flavor extravaganza.'
	},
	{
		id: '20',
		name: 'Tidal Wave',
		category: 'Seafood',
		handle: 'tidal-wave',
		price: 6.29,
		availableStock: 90,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Tidal Wave noodles offer a briny surge of flavors with each mouthful, where waves of prawns and crisp seaweed leave you refreshed like a seaside breeze.'
	},
	{
		id: '21',
		name: 'Ginger Zing',
		category: 'Vegan',
		handle: 'ginger-zing',
		price: 5.59,
		availableStock: 1,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Elevate your taste buds with Ginger Zing noodles, presenting a radiant yet zesty gingery punch alongside tender noodles for a refreshingly crisp meal experience.'
	},
	{
		id: '22',
		name: 'Thai Basil Blast',
		category: 'Curry',
		handle: 'thai-basil-blast',
		price: 7.39,
		availableStock: 65,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		description:
			'Dive into the fragrant world of Thai Basil Blast noodles, where vibrant pieces of Thai basil entwine with the creamy delight of curry-infused noodles.'
	},
	{
		id: '23',
		name: 'Midnight Heat',
		category: 'Spicy',
		handle: 'midnight-heat',
		price: 6.79,
		availableStock: 11,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		description:
			'Whether the clock strikes midnight or midday, these Midnight Heat noodles set the scene for a mystery of flavor, clad in a veil of spicy allure.'
	},
	{
		id: '24',
		name: 'Neptune’s Feast',
		category: 'Seafood',
		handle: 'neptunes-feast',
		price: 7.49,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		description:
			'Offer your palate a regal banquet beneath the waves with Neptune’s Feast noodles, a divine orchestration of succulent crab and oceanic flavors.'
	},
	{
		id: '25',
		name: 'Saffron Mist',
		category: 'Curry',
		handle: 'saffron-mist',
		price: 7.19,
		availableStock: 45,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		description:
			'Unlock the mystical aura of Saffron Mist noodles, crafted with precious saffron threads to bring an exotic elegance to every spice-touched bite of curry noodles.'
	},
	{
		id: '26',
		name: 'Herbal Harmony',
		category: 'Vegan',
		handle: 'herbal-harmony',
		price: 5.49,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			'Embark on a soothing culinary odyssey with Herbal Harmony noodles, highlighting a gentle balance of aromatic herbs and garden greens for a wholesome vegan delight.'
	},
	{
		id: '27',
		name: 'Searing Sun',
		category: 'Spicy',
		handle: 'searing-sun',
		price: 6.69,
		availableStock: 13,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Bask in the vibrant warmth of Searing Sun noodles, inspired by the fiery glow of the sun, and encounter a spice-forward escapade in each satisfying slurp.'
	},
	{
		id: '28',
		name: 'Poseidon’s Ellipse',
		category: 'Seafood',
		handle: 'poseidons-ellipse',
		price: 7.49,
		availableStock: 72,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Sail on a delicious journey with Poseidon’s Ellipse noodles, where tender shrimp bathe in a luxurious broth, embellished with swirling strokes of oceanic brilliance.'
	},
	{
		id: '29',
		name: 'Pineapple Krave',
		category: 'Curry',
		handle: 'pineapple-krave',
		price: 6.59,
		availableStock: 19,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		description:
			'Revel in the unexpected delight of Pineapple Krave noodles, uplifting your taste buds with their tangy balance of sweet pineapple and savory curry.'
	},
	{
		id: '30',
		name: 'Autumn Harvest',
		category: 'Vegan',
		handle: 'autumn-harvest',
		price: 5.79,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		description:
			'Celebrate the bounty of the season with Autumn Harvest noodles, a medley of roasted root vegetables and wholesome grains in a comforting vegan mélange.'
	},
	{
		id: '31',
		name: 'Fiery Comet',
		category: 'Spicy',
		handle: 'fiery-comet',
		price: 6.99,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Swooshing from the cosmos, Fiery Comet noodles unleash a heated rush of tantalizing spices that impact your taste universe with bright bursts of flavor.'
	},
	{
		id: '32',
		name: 'Lagoon Creole',
		category: 'Seafood',
		handle: 'lagoon-creole',
		price: 7.39,
		availableStock: 47,
		images: [
			'https://i.postimg.cc/pLkB3drp/DALL-E-2025-03-05-09-21-16-A-vibrant-and-traditional-noodle-packet-labeled-Seaweed-Soy-Delight.webp',
			'https://i.postimg.cc/YS9x7wL8/DALL-E-2025-03-05-09-21-18-A-realistic-photograph-of-a-steaming-bowl-of-Seaweed-Soy-Delight-rame.webp'
		],
		description:
			'Journey through culinary traditions with Lagoon Creole noodles, serving up vibrant notes of spices and seafood reminiscent of a rich Creole heritage.'
	},
	{
		id: '33',
		name: 'Purple Majesty',
		category: 'Vegan',
		handle: 'purple-majesty',
		price: 5.89,
		availableStock: 2,
		images: [
			'https://i.postimg.cc/GpyHGMWd/DALL-E-2025-03-04-22-13-17-A-vibrant-and-aromatic-noodle-packet-labeled-Coconut-Curry-Bliss-The.webp',
			'https://i.postimg.cc/9Qz4FX14/DALL-E-2025-03-04-22-13-19-A-realistic-photograph-of-a-steaming-bowl-of-Coconut-Curry-Bliss-ramen.webp'
		],
		description:
			'Celebrate regality with Purple Majesty noodles, featuring nutrient-rich purple cabbage and wholesome ingredients enhancing the splendor of this vegan dish.'
	},
	{
		id: '34',
		name: 'Lemon Inferno',
		category: 'Spicy',
		handle: 'lemon-inferno',
		price: 6.59,
		availableStock: 14,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Ignite your taste buds with the Lemon Inferno, a stunning fusion of citrus zest and fiery chili that’s as bold as a bonfire on a summer’s eve.'
	},
	{
		id: '35',
		name: 'Ocean Symphony',
		category: 'Seafood',
		handle: 'ocean-symphony',
		price: 7.29,
		availableStock: 100,
		images: [
			'https://i.postimg.cc/XNcBszpv/DALL-E-2025-03-04-22-13-30-A-luxurious-and-umami-rich-noodle-packet-labeled-Black-Garlic-Truffle.webp',
			'https://i.postimg.cc/4y5Knmrc/DALL-E-2025-03-04-22-13-31-A-realistic-photograph-of-a-steaming-bowl-of-Black-Garlic-Truffle-Ramen.webp'
		],
		description:
			'Conduct an orchestra of flavors with Ocean Symphony noodles where notes of lush lobster and savory fish participate harmoniously in this sea-inspired creation.'
	},
	{
		id: '36',
		name: 'Rosemary Reverie',
		category: 'Curry',
		handle: 'rosemary-reverie',
		price: 6.99,
		availableStock: 53,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		description:
			'Be enthralled by fragrant Rosemary Reverie noodles, marrying savory curry spices with the distinctive aromatic quality of rosemary for a botanical delight.'
	},
	{
		id: '37',
		name: 'Scorching Ember',
		category: 'Spicy',
		handle: 'scorching-ember',
		price: 6.79,
		availableStock: 5,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		description:
			'Embrace the warmth of Scorching Ember noodles, featuring charring spices that ripple through your palate with searing ardor, harnessing the power of fire.'
	},
	{
		id: '38',
		name: 'Azure Coast',
		category: 'Seafood',
		handle: 'azure-coast',
		price: 7.69,
		availableStock: 29,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		description:
			'Immerse yourself in the infinite blue with Azure Coast Noodles, offering a superb medley of tender seafood melded into a brilliant coastal culinary delight.'
	},
	{
		id: '39',
		name: 'Tangerine Whirl',
		category: 'Vegan',
		handle: 'tangerine-whirl',
		price: 5.69,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		description:
			'Elevate your noodle experience with Tangerine Whirl noodles, infusing tangy citrus notes with light, crisp vegetables into the never-ending whirl of flavor.'
	},
	{
		id: '40',
		name: 'Sapphire Tide',
		category: 'Seafood',
		handle: 'sapphire-tide',
		price: 7.19,
		availableStock: 12,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		description:
			'Navigate the Sapphire Tide with these exquisite noodles, where the brilliance of scallops and crab meat cascade gloriously in an ocean-inspired dish.'
	},
	{
		id: '41',
		name: 'Emerald Heat',
		category: 'Spicy',
		handle: 'emerald-heat',
		price: 6.49,
		availableStock: 10,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		description:
			'Adventure awaits with Emerald Heat noodles, which herald a verdant explosion of spice and flavor akin to a vibrant, flourishing garden.'
	},
	{
		id: '42',
		name: 'Ricotta Revive',
		category: 'Vegan',
		handle: 'ricotta-revive',
		price: 5.99,
		availableStock: 95,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		description:
			'Revitalize your day with Ricotta Revive noodles, harmonizing tender grains with homemade cashew-based ricotta for a splendidly smooth and creamy vegan delight.'
	},
	{
		id: '43',
		name: 'Lavender Storm',
		category: 'Curry',
		handle: 'lavender-storm',
		price: 6.79,
		availableStock: 71,
		images: [
			'https://i.postimg.cc/5NBgqgM5/DALL-E-2025-03-05-09-21-13-A-vibrant-and-tangy-noodle-packet-labeled-Tom-Yum-Zest-Ramen-The-pac.webp',
			'https://i.postimg.cc/Qdjb67X2/DALL-E-2025-03-05-09-21-14-A-realistic-photograph-of-a-steaming-bowl-of-Tom-Yum-Zest-Ramen-The-bo.webp'
		],
		description:
			'Whirl into the floral gusts of Lavender Storm noodles, where curry spices and delicately aromatic lavender intertwine with vivid harmony.'
	},
	{
		id: '44',
		name: 'Burning Comet',
		category: 'Spicy',
		handle: 'burning-comet',
		price: 6.99,
		availableStock: 3,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			'Journey through time and space with Burning Comet noodles, as spices light up like meteors crossing the cosmic threshold in this astronomical adventure.'
	},
	{
		id: '45',
		name: 'Platinum Coral',
		category: 'Seafood',
		handle: 'platinum-coral',
		price: 7.59,
		availableStock: 93,
		images: [
			'https://i.postimg.cc/vmNtHSWy/DALL-E-2025-03-05-09-21-20-A-vibrant-and-spicy-noodle-packet-labeled-Szechuan-Firestorm-Noodles.webp',
			'https://i.postimg.cc/G2TJBJQy/DALL-E-2025-03-05-09-21-21-A-realistic-photograph-of-a-steaming-bowl-of-Szechuan-Firestorm-Noodles.webp'
		],
		description:
			'Explore the opulent depths of Platinum Coral noodles, where succulent ocean treasures shimmer and dance in tandem with this lavish flavor concoction.'
	},
	{
		id: '46',
		name: 'Teardrop Delight',
		category: 'Vegan',
		handle: 'teardrop-delight',
		price: 5.89,
		availableStock: 0,
		images: [
			'https://i.postimg.cc/Bvk2GP0Q/DALL-E-2025-03-04-22-13-13-A-vibrant-and-traditional-noodle-packet-labeled-Miso-Samurai-Bowl-Th.webp',
			'https://i.postimg.cc/qvYNtfZ1/DALL-E-2025-03-04-22-13-14-A-realistic-photograph-of-a-steaming-bowl-of-Miso-Samurai-Bowl-ramen-T.webp'
		],
		description:
			'Indulge in serene satisfaction with Teardrop Delight noodles, where dewdrops of freshness captured in every veggie grant you culinary poetry.'
	},
	{
		id: '47',
		name: 'Scorching Sunflower',
		category: 'Spicy',
		handle: 'scorching-sunflower',
		price: 6.59,
		availableStock: 17,
		images: [
			'https://i.postimg.cc/3Jt4T0j5/DALL-E-2025-03-04-22-13-20-A-bold-and-intense-noodle-packet-labeled-Wasabi-Inferno-Ramen-The-pa.webp',
			'https://i.postimg.cc/8PpJ9m6m/DALL-E-2025-03-04-22-13-22-A-realistic-photograph-of-a-steaming-bowl-of-Wasabi-Inferno-Ramen-The.webp'
		],
		description:
			'Let the Scorching Sunflower noodles warm you with its solar flares of spice, fueled by the brilliant intensity of hot peppers and fragrant herbs.'
	},
	{
		id: '48',
		name: 'Siren’s Call',
		category: 'Seafood',
		handle: 'sirens-call',
		price: 7.19,
		availableStock: 200,
		images: [
			'https://i.postimg.cc/jS8zZk3f/DALL-E-2025-03-04-22-13-07-A-vibrant-and-fiery-noodle-packet-labeled-Cheesy-Volcano-Noodles-The.webp',
			'https://i.postimg.cc/yNk05X2b/DALL-E-2025-03-04-22-13-09-A-realistic-photograph-of-a-steaming-bowl-of-Cheesy-Volcano-Noodles-Th.webp'
		],
		description:
			"Answer Siren's Call with these enchanting noodles, where lavish seafood notes beckon you to delight in a savory embrace under ocean’s spell."
	},
	{
		id: '49',
		name: 'Caribbean Coconut',
		category: 'Curry',
		handle: 'caribbean-coconut',
		price: 6.89,
		availableStock: 67,
		images: [
			'https://i.postimg.cc/pT3Ck1TC/DALL-E-2025-03-05-09-21-04-A-vibrant-and-rich-noodle-packet-labeled-Honey-Butter-Ramen-The-pack.webp',
			'https://i.postimg.cc/T2WChG74/DALL-E-2025-03-05-09-21-06-A-realistic-photograph-of-a-steaming-bowl-of-Honey-Butter-Ramen-The-di.webp'
		],
		description:
			'Escape to paradise with Caribbean Coconut noodles, infusing creamy coconut milk and tantalizing spices with the essence of a sun-kissed Caribbean breeze.'
	},
	{
		id: '50',
		name: 'Scarlet Blaze',
		category: 'Spicy',
		handle: 'scarlet-blaze',
		price: 7.29,
		availableStock: 4,
		images: [
			'https://i.postimg.cc/KvD7gYnJ/DALL-E-2025-03-04-22-11-32-A-vibrant-and-fiery-noodle-packet-labeled-Spicy-Dragon-Ramen-The-pac.webp',
			'https://i.postimg.cc/RVBQFtnW/DALL-E-2025-03-04-22-13-05-A-realistic-photograph-of-a-steaming-bowl-of-spicy-ramen-labeled-Spicy.webp'
		],
		description:
			'Set your senses aflame with Scarlet Blaze noodles, exuding an aura of intensity and warmth that challenges your taste buds to bask in red-hot fervor.'
	}
];

// {
// 	id: '51',
// 	name: 'Trident Clash',
// 	category: 'Seafood',
// 	handle: 'trident-clash',
// 	price: 7.49,
// 	availableStock: 45,
// 	images: ['images/trident-clash-1.jpg', 'images/trident-clash-2.jpg'],
// 	description:
// 		'Feel the surge of the sea with Trident Clash noodles, where waves of briny scallops and fish invigorate your senses with their oceanic grandeur.'
// },
// {
// 	id: '52',
// 	name: 'Paprika Panorama',
// 	category: 'Vegan',
// 	handle: 'paprika-panorama',
// 	price: 5.79,
// 	availableStock: 0,
// 	images: ['images/paprika-panorama-1.jpg', 'images/paprika-panorama-2.jpg'],
// 	description:
// 		'Wander through a vibrant landscape of flavors with Paprika Panorama noodles, where gentle notes of paprika and vibrant vegetables traverse your taste journey.'
// },
// {
// 	id: '53',
// 	name: 'Solar Tempest',
// 	category: 'Spicy',
// 	handle: 'solar-tempest',
// 	price: 6.79,
// 	availableStock: 18,
// 	images: ['images/solar-tempest-1.jpg', 'images/solar-tempest-2.jpg'],
// 	description:
// 		'Encounter the force of a Solar Tempest, where bold spices and aromatic herbs unite to unleash an exhilarating flavor journey across your palate.'
// },
// {
// 	id: '54',
// 	name: 'Aquatic Muse',
// 	category: 'Seafood',
// 	handle: 'aquatic-muse',
// 	price: 7.59,
// 	availableStock: 73,
// 	images: ['images/aquatic-muse-1.jpg', 'images/aquatic-muse-2.jpg'],
// 	description:
// 		'Be inspired by Aquatic Muse noodles, where delicate morsels of fish tenderly merge with an appealing medley of savory seafood, releasing oceanic allure.'
// },
// {
// 	id: '55',
// 	name: 'Cerulean Jazz',
// 	category: 'Seafood',
// 	handle: 'cerulean-jazz',
// 	price: 7.69,
// 	availableStock: 47,
// 	images: ['images/cerulean-jazz-1.jpg', 'images/cerulean-jazz-2.jpg'],
// 	description:
// 		'Feel the rhythmic waves of Cerulean Jazz noodles, merging succulent shellfish with exotic seaweeds for an exuberant symphony of flavor in each bite.'
// },
// {
// 	id: '56',
// 	name: 'Cinnamon Serenade',
// 	category: 'Curry',
// 	handle: 'cinnamon-serenade',
// 	price: 6.99,
// 	availableStock: 56,
// 	images: ['images/cinnamon-serenade-1.jpg', 'images/cinnamon-serenade-2.jpg'],
// 	description:
// 		'Soothe your senses with Cinnamon Serenade noodles, mixing tender cinnamon tones with spicy curry for a melodic harmony that delights your taste buds.'
// },
// {
// 	id: '57',
// 	name: 'Tropical Heatwave',
// 	category: 'Spicy',
// 	handle: 'tropical-heatwave',
// 	price: 6.69,
// 	availableStock: 5,
// 	images: ['images/tropical-heatwave-1.jpg', 'images/tropical-heatwave-2.jpg'],
// 	description:
// 		'Embrace the sizzle of a Tropical Heatwave with these captivating noodles, where fiery gusto streaks through a paradise of authentic and bold spices.'
// },
// {
// 	id: '58',
// 	name: 'Ebony Tranquil',
// 	category: 'Vegan',
// 	handle: 'ebony-tranquil',
// 	price: 5.99,
// 	availableStock: 11,
// 	images: ['images/ebony-tranquil-1.jpg', 'images/ebony-tranquil-2.jpg'],
// 	description:
// 		'Relinquish to the calming allure of Ebony Tranquil noodles, embracing the nourishing tranquility of dark greens and wholesome grains in this vegan fusion.'
// },
// {
// 	id: '59',
// 	name: 'Arctic Wave',
// 	category: 'Seafood',
// 	handle: 'arctic-wave',
// 	price: 7.89,
// 	availableStock: 98,
// 	images: ['images/arctic-wave-1.jpg', 'images/arctic-wave-2.jpg'],
// 	description:
// 		'Take on the refreshing crispness of Arctic Wave noodles, swirling rich salmon chunks with a chill-infused seafood broth to awaken your senses.'
// },
// {
// 	id: '60',
// 	name: 'Volcanic Fury',
// 	category: 'Spicy',
// 	handle: 'volcanic-fury',
// 	price: 6.89,
// 	availableStock: 14,
// 	images: ['images/volcanic-fury-1.jpg', 'images/volcanic-fury-2.jpg'],
// 	description:
// 		'Enter the cauldron of flavor with Volcanic Fury noodles as they smolder with a mouthwatering medley of scorching spices defining their robust character.'
// },
// {
// 	id: '61',
// 	name: 'Sunflower Symphony',
// 	category: 'Vegan',
// 	handle: 'sunflower-symphony',
// 	price: 5.79,
// 	availableStock: 0,
// 	images: ['images/sunflower-symphony-1.jpg', 'images/sunflower-symphony-2.jpg'],
// 	description:
// 		'Discover the vibrant allure of Sunflower Symphony noodles, where delicately toasted seeds waltz in harmony with garden-fresh veggies in this vegan masterpiece.'
// },
// {
// 	id: '62',
// 	name: 'Sizzling Aurora',
// 	category: 'Spicy',
// 	handle: 'sizzling-aurora',
// 	price: 7.29,
// 	availableStock: 23,
// 	images: ['images/sizzling-aurora-1.jpg', 'images/sizzling-aurora-2.jpg'],
// 	description:
// 		'Navigate the mystical lights with Sizzling Aurora noodles, ignited by blazing spices and aromatic bursts casting sublimity across your culinary paths.'
// },
// {
// 	id: '63',
// 	name: 'Salty Sailor',
// 	category: 'Seafood',
// 	handle: 'salty-sailor',
// 	price: 7.49,
// 	availableStock: 35,
// 	images: ['images/salty-sailor-1.jpg', 'images/salty-sailor-2.jpg'],
// 	description:
// 		'Dive into the abyss with Salty Sailor noodles, where the rugged strength of spices meets the delicate embrace of seafood captained by deep-sea undertones.'
// },
// {
// 	id: '64',
// 	name: 'Crimson Glow',
// 	category: 'Curry',
// 	handle: 'crimson-glow',
// 	price: 7.19,
// 	availableStock: 100,
// 	images: ['images/crimson-glow-1.jpg', 'images/crimson-glow-2.jpg'],
// 	description:
// 		'Illuminate your senses with Crimson Glow noodles, whose vibrant notes of curry flavors and luminous spices invigorate your world with radiant warmth.'
// },
// {
// 	id: '65',
// 	name: 'Basil Blizzard',
// 	category: 'Vegan',
// 	handle: 'basil-blizzard',
// 	price: 5.99,
// 	availableStock: 2,
// 	images: ['images/basil-blizzard-1.jpg', 'images/basil-blizzard-2.jpg'],
// 	description:
// 		'Refresh your taste buds with Basil Blizzard noodles, a meditative fusion of icy freshness and basil undertones enticed by crisp vegetables in vegan unity.'
// },
// {
// 	id: '66',
// 	name: 'Ruby Ember',
// 	category: 'Spicy',
// 	handle: 'ruby-ember',
// 	price: 6.69,
// 	availableStock: 12,
// 	images: ['images/ruby-ember-1.jpg', 'images/ruby-ember-2.jpg'],
// 	description:
// 		'Unleash the fiery allure of Ruby Ember noodles as they captivate you in their gleaming embers with the zest and brilliance of succulent spices.'
// },
// {
// 	id: '67',
// 	name: 'Sapphire Surge',
// 	category: 'Seafood',
// 	handle: 'sapphire-surge',
// 	price: 6.79,
// 	availableStock: 75,
// 	images: ['images/sapphire-surge-1.jpg', 'images/sapphire-surge-2.jpg'],
// 	description:
// 		'Immerse in the surge of flavors with Sapphire Surge noodles, where the velvety tide of seafood conquers your senses with vivid ocean-infused magnificence.'
// },
// {
// 	id: '68',
// 	name: 'Cypress Mist',
// 	category: 'Curry',
// 	handle: 'cypress-mist',
// 	price: 6.59,
// 	availableStock: 89,
// 	images: ['images/cypress-mist-1.jpg', 'images/cypress-mist-2.jpg'],
// 	description:
// 		'Wander through a dreamscape with Cypress Mist noodles, mingling aromatic spices with refreshing bursts of curry to cast enchanting mists across your palate.'
// },
// {
// 	id: '69',
// 	name: 'Fiery Enigma',
// 	category: 'Spicy',
// 	handle: 'fiery-enigma',
// 	price: 6.99,
// 	availableStock: 4,
// 	images: ['images/fiery-enigma-1.jpg', 'images/fiery-enigma-2.jpg'],
// 	description:
// 		'Unravel the secrets of Fiery Enigma noodles as they transcend culinary mysteries with intense layers of spicy flavors and enigmatic allurement.'
// },
// {
// 	id: '70',
// 	name: 'Blue Lagoon',
// 	category: 'Seafood',
// 	handle: 'blue-lagoon',
// 	price: 7.39,
// 	availableStock: 92,
// 	images: ['images/blue-lagoon-1.jpg', 'images/blue-lagoon-2.jpg'],
// 	description:
// 		'Drift into tranquility with Blue Lagoon noodles, blending lush seafood flavors with a subtle nod of ocean and sunlight in this serene creation.'
// },
// {
// 	id: '71',
// 	name: 'Chartreuse Solstice',
// 	category: 'Vegan',
// 	handle: 'chartreuse-solstice',
// 	price: 5.89,
// 	availableStock: 0,
// 	images: ['images/chartreuse-solstice-1.jpg', 'images/chartreuse-solstice-2.jpg'],
// 	description:
// 		'Revel in nature’s dance with Chartreuse Solstice noodles, where fresh garden treasures congregate for a most harmonious celebration under the solar shade.'
// },
// {
// 	id: '72',
// 	name: 'Amber Blaze',
// 	category: 'Spicy',
// 	handle: 'amber-blaze',
// 	price: 6.49,
// 	availableStock: 3,
// 	images: ['images/amber-blaze-1.jpg', 'images/amber-blaze-2.jpg'],
// 	description:
// 		'Channel the scorching glow of Amber Blaze noodles, showcasing a dazzling medley of spicy boldness that radiates with beautiful intensity.'
// },
// {
// 	id: '73',
// 	name: 'Steel Blue Harmony',
// 	category: 'Seafood',
// 	handle: 'steel-blue-harmony',
// 	price: 7.69,
// 	availableStock: 64,
// 	images: ['images/steel-blue-harmony-1.jpg', 'images/steel-blue-harmony-2.jpg'],
// 	description:
// 		'Experience the fusion of Steel Blue Harmony, where seafood transcends in crescendo amidst quiet moments of zen-like ocean settings.'
// },
// {
// 	id: '74',
// 	name: 'Verdant Twilight',
// 	category: 'Vegan',
// 	handle: 'verdant-twilight',
// 	price: 5.59,
// 	availableStock: 9,
// 	images: ['images/verdant-twilight-1.jpg', 'images/verdant-twilight-2.jpg'],
// 	description:
// 		'Venture into the green forests of Verdant Twilight noodles, entrusting nature’s freshest ingredients for a calming meal beneath forest boughs.'
// },
// {
// 	id: '75',
// 	name: 'Golden Serenade',
// 	category: 'Spicy',
// 	handle: 'golden-serenade',
// 	price: 6.89,
// 	availableStock: 12,
// 	images: ['images/golden-serenade-1.jpg', 'images/golden-serenade-2.jpg'],
// 	description:
// 		'Ignite a rhythmic journey with Golden Serenade noodles, introducing the resonant harmony of spices and captivating flavors to soothe your soul.'
// },
// {
// 	id: '76',
// 	name: 'Silver Tides',
// 	category: 'Seafood',
// 	handle: 'silver-tides',
// 	price: 7.59,
// 	availableStock: 51,
// 	images: ['images/silver-tides-1.jpg', 'images/silver-tides-2.jpg'],
// 	description:
// 		'Traverse the tranquil realm of Silver Tides noodles, where the gentle embrace of seafood and marine richness unfurls along a rolling ocean wave.'
// },
// {
// 	id: '77',
// 	name: 'Jade Harmony',
// 	category: 'Vegan',
// 	handle: 'jade-harmony',
// 	price: 5.79,
// 	availableStock: 0,
// 	images: ['images/jade-harmony-1.jpg', 'images/jade-harmony-2.jpg'],
// 	description:
// 		'Explore the verdant balance of Jade Harmony noodles, resonating with a medley of greens and grains to paint a culinary masterpiece of this vegan offering.'
// },
// {
// 	id: '78',
// 	name: 'Blazing Carnelian',
// 	category: 'Spicy',
// 	handle: 'blazing-carnelian',
// 	price: 7.09,
// 	availableStock: 54,
// 	images: ['images/blazing-carnelian-1.jpg', 'images/blazing-carnelian-2.jpg'],
// 	description:
// 		'Radiate with Blazing Carnelian noodles, which captivate you with burning embers and a vibrant spice journey echoing with intensity.'
// },
// {
// 	id: '79',
// 	name: 'Cerulean Wave',
// 	category: 'Seafood',
// 	handle: 'cerulean-wave',
// 	price: 7.89,
// 	availableStock: 76,
// 	images: ['images/cerulean-wave-1.jpg', 'images/cerulean-wave-2.jpg'],
// 	description:
// 		'Float through a soothing journey with Cerulean Wave noodles, where the vibrancy of rich seafood flavors evoke a calm voyage through cerulean tides.'
// },
// {
// 	id: '80',
// 	name: 'Fern Tranquility',
// 	category: 'Vegan',
// 	handle: 'fern-tranquility',
// 	price: 5.99,
// 	availableStock: 2,
// 	images: ['images/fern-tranquility-1.jpg', 'images/fern-tranquility-2.jpg'],
// 	description:
// 		'Embrace the serene essence of Fern Tranquility noodles, leading to a peaceful tasting journey flanked by verdant plant-based ingredients.'
// },
// {
// 	id: '81',
// 	name: 'Azure Flame',
// 	category: 'Spicy',
// 	handle: 'azure-flame',
// 	price: 6.69,
// 	availableStock: 11,
// 	images: ['images/azure-flame-1.jpg', 'images/azure-flame-2.jpg'],
// 	description:
// 		'Release an enticing blaze of boldness with Azure Flame noodles, infusing vivid spice strokes with an exhilarating journey thereafter each fiery bite.'
// },
// {
// 	id: '82',
// 	name: 'Crystal Cascade',
// 	category: 'Seafood',
// 	handle: 'crystal-cascade',
// 	price: 7.69,
// 	availableStock: 55,
// 	images: ['images/crystal-cascade-1.jpg', 'images/crystal-cascade-2.jpg'],
// 	description:
// 		'Flow along the refreshing embrace of Crystal Cascade noodles, where the delicate artistry of seafood blends amidst an ambiance of serene aquatic beauty.'
// },
// {
// 	id: '83',
// 	name: 'Amber Dawn',
// 	category: 'Vegan',
// 	handle: 'amber-dawn',
// 	price: 5.79,
// 	availableStock: 12,
// 	images: ['images/amber-dawn-1.jpg', 'images/amber-dawn-2.jpg'],
// 	description:
// 		'Awaken with the golden radiance of Amber Dawn noodles, accentuating the rise of fresh ingredients and warm spices that capture the soul.'
// },
// {
// 	id: '84',
// 	name: 'Violet Skyline',
// 	category: 'Spicy',
// 	handle: 'violet-skyline',
// 	price: 6.99,
// 	availableStock: 13,
// 	images: ['images/violet-skyline-1.jpg', 'images/violet-skyline-2.jpg'],
// 	description:
// 		'Set your senses alight with the intensity of Violet Skyline noodles, where vibrant undertones and spice-infused flavors intertwine for a radiant feast.'
// },
// {
// 	id: '85',
// 	name: 'Azure Meridian',
// 	category: 'Seafood',
// 	handle: 'azure-meridian',
// 	price: 7.19,
// 	availableStock: 97,
// 	images: ['images/azure-meridian-1.jpg', 'images/azure-meridian-2.jpg'],
// 	description:
// 		'Navigate the tranquil waters of the Azure Meridian, where seafood tastes merge in harmony to create a beautifully composed meal.'
// },
// {
// 	id: '86',
// 	name: 'Green Ora',
// 	category: 'Vegan',
// 	handle: 'green-ora',
// 	price: 5.59,
// 	availableStock: 0,
// 	images: ['images/green-ora-1.jpg', 'images/green-ora-2.jpg'],
// 	description:
// 		'Embrace the abundant essence of Green Ora noodles, harmonizing organic veggies and plant goodness with a lively, fresh taste experience.'
// },
// {
// 	id: '87',
// 	name: 'Scarlet Fury',
// 	category: 'Spicy',
// 	handle: 'scarlet-fury',
// 	price: 6.99,
// 	availableStock: 6,
// 	images: ['images/scarlet-fury-1.jpg', 'images/scarlet-fury-2.jpg'],
// 	description:
// 		'Unleash the roaring force of Scarlet Fury noodles, imbued with intense smoky heat and bright fulgent notes for a passionate culinary experience.'
// },
// {
// 	id: '88',
// 	name: 'Oceanic Crescent',
// 	category: 'Seafood',
// 	handle: 'oceanic-crescent',
// 	price: 7.79,
// 	availableStock: 95,
// 	images: ['images/oceanic-crescent-1.jpg', 'images/oceanic-crescent-2.jpg'],
// 	description:
// 		'Flow through the smooth arcs of Oceanic Crescent noodles, where oceanic flavors gracefully intermingle with delicate textures for a divine experience.'
// },
// {
// 	id: '89',
// 	name: 'Aurora Electric',
// 	category: 'Spicy',
// 	handle: 'aurora-electric',
// 	price: 7.19,
// 	availableStock: 7,
// 	images: ['images/aurora-electric-1.jpg', 'images/aurora-electric-2.jpg'],
// 	description:
// 		'Illuminate your meal with Aurora Electric noodles, carrying vibrant waves of spicy dynamics that energize your senses with each bite.'
// },
// {
// 	id: '90',
// 	name: 'Seaside Zen',
// 	category: 'Seafood',
// 	handle: 'seaside-zen',
// 	price: 7.49,
// 	availableStock: 60,
// 	images: ['images/seaside-zen-1.jpg', 'images/seaside-zen-2.jpg'],
// 	description:
// 		'Achieve tranquil balance with Seaside Zen noodles, where serene seafood medleys harmonize effortlessly across aesthetic layers of flavor.'
// },
// {
// 	id: '91',
// 	name: 'Ruby Pulse',
// 	category: 'Spicy',
// 	handle: 'ruby-pulse',
// 	price: 6.69,
// 	availableStock: 21,
// 	images: ['images/ruby-pulse-1.jpg', 'images/ruby-pulse-2.jpg'],
// 	description:
// 		'Feel the rhythmic throb of spice with Ruby Pulse noodles, enkindling every gesture of taste movement through transcendent fiery expressions.'
// },
// {
// 	id: '92',
// 	name: 'Navy Prism',
// 	category: 'Seafood',
// 	handle: 'navy-prism',
// 	price: 7.89,
// 	availableStock: 87,
// 	images: ['images/navy-prism-1.jpg', 'images/navy-prism-2.jpg'],
// 	description:
// 		'Radiate with the multifaceted brilliance of Navy Prism noodles, where diverse marine flavors dance harmoniously in this ocean-inspired masterpiece.'
// },
// {
// 	id: '93',
// 	name: 'Emerald Tranquil',
// 	category: 'Vegan',
// 	handle: 'emerald-tranquil',
// 	price: 5.79,
// 	availableStock: 0,
// 	images: ['images/emerald-tranquil-1.jpg', 'images/emerald-tranquil-2.jpg'],
// 	description:
// 		'Experience the restful harmony of Emerald Tranquil noodles, balancing calming greens with holistic grains amid the splendid calm of vegan delight.'
// },
// {
// 	id: '94',
// 	name: 'Inferno Spiral',
// 	category: 'Spicy',
// 	handle: 'inferno-spiral',
// 	price: 6.99,
// 	availableStock: 8,
// 	images: ['images/inferno-spiral-1.jpg', 'images/inferno-spiral-2.jpg'],
// 	description:
// 		'Embark on a quest of fiery excitement with Inferno Spiral noodles, propelling you through vigorous twists and turns of sizzling flavor.'
// },
// {
// 	id: '95',
// 	name: 'Coral Mirage',
// 	category: 'Seafood',
// 	handle: 'coral-mirage',
// 	price: 7.59,
// 	availableStock: 82,
// 	images: ['images/coral-mirage-1.jpg', 'images/coral-mirage-2.jpg'],
// 	description:
// 		'Unfold the illusionary essence of Coral Mirage noodles, presenting an array of seafood sensations that evoke oceanic allure beyond immediacy.'
// },
// {
// 	id: '96',
// 	name: 'Ethereal Ember',
// 	category: 'Spicy',
// 	handle: 'ethereal-ember',
// 	price: 6.79,
// 	availableStock: 14,
// 	images: ['images/ethereal-ember-1.jpg', 'images/ethereal-ember-2.jpg'],
// 	description:
// 		'Ascend into the realm of Ethereal Ember noodles, where the spectral glow of chili deftly elevates your taste experience to ethereal pinnacles.'
// },
// {
// 	id: '97',
// 	name: 'Opal Harvest',
// 	category: 'Vegan',
// 	handle: 'opal-harvest',
// 	price: 5.69,
// 	availableStock: 17,
// 	images: ['images/opal-harvest-1.jpg', 'images/opal-harvest-2.jpg'],
// 	description:
// 		'Reap the bounty of Opal Harvest noodles, gathering together earthy grains and fresh greens into a nutritious banquet for the eyes and palate.'
// },
// {
// 	id: '98',
// 	name: 'Amber Inferno',
// 	category: 'Spicy',
// 	handle: 'amber-inferno',
// 	price: 6.89,
// 	availableStock: 15,
// 	images: ['images/amber-inferno-1.jpg', 'images/amber-inferno-2.jpg'],
// 	description:
// 		'Ignite your senses with Amber Inferno noodles, carrying a potent mix of radiant spices that inscribes magmatic trails upon each flavorful journey.'
// },
// {
// 	id: '99',
// 	name: 'Blue Coral Serenade',
// 	category: 'Seafood',
// 	handle: 'blue-coral-serenade',
// 	price: 7.49,
// 	availableStock: 79,
// 	images: ['images/blue-coral-serenade-1.jpg', 'images/blue-coral-serenade-2.jpg'],
// 	description:
// 		'Swim with the melodies of Blue Coral Serenade noodles, broadcasting the beautiful fusion of seafood symphonies and culinary marvels.'
// },
// {
// 	id: '100',
// 	name: 'Minted Celeste',
// 	category: 'Vegan',
// 	handle: 'minted-celeste',
// 	price: 5.99,
// 	availableStock: 5,
// 	images: ['images/minted-celeste-1.jpg', 'images/minted-celeste-2.jpg'],
// 	description:
// 		'Embark on a journey of freshness with Minted Celeste noodles, mingling invigorating mint and vivid vegetables for a celestial vegan creation.'
// }
