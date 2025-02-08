import profitgreenImage from '$lib/assets/projects/profitgreen.webp';
import cleetiverseImage from '$lib/assets/projects/cleetiverse.webp';
import hirespaceImage from '$lib/assets/projects/hirespace.webp';
import chatappImage from '$lib/assets/projects/chatapp.webp';
import disthreadImage from '$lib/assets/projects/disthread.webp';
import portfolioImage from '$lib/assets/projects/portfolio.webp';
import pythonIcon from '$lib/assets/icons/python.webp';
import typescriptIcon from '$lib/assets/icons/typescript.webp';
import csharpIcon from '$lib/assets/icons/csharp.webp';
import cppIcon from '$lib/assets/icons/cpp.webp';
import javaIcon from '$lib/assets/icons/java.webp';
import flaskIcon from '$lib/assets/icons/flask.webp';
import svelteIcon from '$lib/assets/icons/svelte.webp';
import reactIcon from '$lib/assets/icons/react.webp';
import nextIcon from '$lib/assets/icons/next.webp';
import dockerIcon from '$lib/assets/icons/docker.webp';
import mongodbIcon from '$lib/assets/icons/mongodb.webp';
import unityIcon from '$lib/assets/icons/unity.webp';

export function load() {
	let projects = [
		{
			id: 'profitgreen',
			name: 'ProfitGreen',
			description:
				'An investing app that directly integrates financial data for thousands of stocks and cryptocurrencies directly into Discord.',
			image: profitgreenImage,
			url: 'https://profit.greenapp.tech'
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
			url: 'https://hirespace.greenapp.tech'
		},
		{
			id: 'chatapp',
			name: 'Chat App',
			description:
				'A real-time chat application with infinite chat rooms allowing users to communicate with anyone, anywhere around the world.',
			image: chatappImage,
			url: 'https://chat.greenapp.tech'
		},
		{
			id: 'disthread',
			name: 'Disthread',
			description:
				"A social media app that integrates Meta Threads into Discord, automatically streaming posts from users' favorite Threads accounts into their Discord servers.",
			image: disthreadImage,
			url: 'https://disthread.greenapp.tech'
		},
		{
			id: 'portfolio',
			name: 'This Website',
			description:
				'The website you are currently viewing. A personal developer portfolio showcasing my projects and skills.',
			image: portfolioImage,
			url: 'https://github.com/aLEGEND21/portfolio-website'
		}
	];

	let icons = [
		{ alt: 'Python Logo', src: pythonIcon, href: 'https://www.python.org/' },
		{ alt: 'TypeScript Logo', src: typescriptIcon, href: 'https://www.typescriptlang.org/' },
		{ alt: 'C# Logo', src: csharpIcon, href: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
		{ alt: 'C++ Logo', src: cppIcon, href: 'https://www.cplusplus.com/' },
		{ alt: 'Java Logo', src: javaIcon, href: 'https://www.java.com/' },
		{ alt: 'Flask Logo', src: flaskIcon, href: 'https://flask.palletsprojects.com/' },
		{ alt: 'Svelte Logo', src: svelteIcon, href: 'https://svelte.dev/' },
		{ alt: 'React Logo', src: reactIcon, href: 'https://react.dev/' },
		{ alt: 'Next.js Logo', src: nextIcon, href: 'https://nextjs.org/' },
		{ alt: 'Docker Logo', src: dockerIcon, href: 'https://www.docker.com/' },
		{ alt: 'MongoDB Logo', src: mongodbIcon, href: 'https://www.mongodb.com/' },
		{ alt: 'Unity Logo', src: unityIcon, href: 'https://unity.com/' }
	];

	return { projects, icons };
}
