import profitgreenImage from '$lib/assets/profitgreen.png';
import cleetiverseImage from '$lib/assets/cleetiverse.png';
import hirespaceImage from '$lib/assets/hirespace.png';
import chatappImage from '$lib/assets/chatapp.webp';

export function load() {
	let projects = [
		{
			id: 'profitgreen',
			name: 'ProfitGreen',
			description:
				'An investing app that directly integrates financial data for thousands of stocks and cryptocurrencies directly into Discord.',
			image: profitgreenImage,
			url: 'https://profit.greenapp.live'
		},
		{
			id: 'cleetiverse',
			name: 'Cleetiverse',
			description:
				'A commissioned project for a Discord bot that allows users to create, catch, breed, and battle custom creatures in a virtual world.',
			image: cleetiverseImage,
			url: 'https://discord.com/oauth2/authorize?client_id=1038933964968173729&permissions=8&scope=applications.commands%20bot'
		},
		{
			id: 'hirespace',
			name: 'HireSpace',
			description:
				'A platform for high school students to easily find and apply to internships. Built for the Summer Research & Innovation Program at the North Carolina School of Science and Mathematics.',
			image: hirespaceImage,
			url: 'https://github.com/aLEGEND21/HS-Internship-Finder'
		},
		{
			id: 'chatapp',
			name: 'Chat App',
			description:
				'A real-time chat application with infinite chat rooms allowing users to communicate with anyone, anywhere around the world.',
			image: chatappImage,
			url: 'https://chat.greenapp.live'
		}
	];

	return { projects };
}
