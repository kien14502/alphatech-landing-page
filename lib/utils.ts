import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const routes = [
	{
		name: 'About us',
		link: '/',
	},
	{
		name: 'Event',
		link: '/event',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
];
