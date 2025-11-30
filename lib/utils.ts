import {clsx, type ClassValue} from 'clsx';
import {twMerge} from 'tailwind-merge';
import {ZodSchema} from 'zod';

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

export const zodValidate = <T>(schema: ZodSchema<T>) => {
	return (data: unknown): T => {
		const result = schema.safeParse(data);
		if (!result.success) {
			throw result.error;
		}
		return result.data;
	};
};
