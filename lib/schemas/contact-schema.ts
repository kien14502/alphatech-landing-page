import z from 'zod';

export const ContactSchema = z.object({
	name: z.string().min(2, 'Name must be at least 2 characters long'),
	email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/),
	message: z.string().min(10, 'Message must be at least 10 characters long'),
	phone: z.string().optional(),
});
export type ContactFormData = z.infer<typeof ContactSchema>;
