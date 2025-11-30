'use client';

import {ContactFormData, ContactSchema} from '@/lib/schemas/contact-schema';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Form} from '../ui/form';
import InputForm from './InputForm';
import {Button} from '../ui/button';
import {Mail, Phone, Send, User} from 'lucide-react';
import TextareaForm from './TextareaForm';
import {sendEmail} from '@/services/contact-service';

const ContactForm = () => {
	const form = useForm<ContactFormData>({
		defaultValues: {
			name: '',
			email: '',
			message: '',
			phone: '',
		},
		resolver: zodResolver(ContactSchema),
	});

	const onSubmit = async (data: ContactFormData) => {
		const res = await sendEmail(data);
		console.log(res);
	};

	return (
		<Form {...form}>
			<form
				className="max-w-5xl mx-auto w-full flex flex-col gap-8 border p-8 rounded-lg shadow-lg bg-white"
				onSubmit={form.handleSubmit(onSubmit)}>
				<InputForm
					prefix={<User />}
					control={form.control}
					name="name"
					placeholder="Name"
				/>
				<div className="grid grid-cols-2 gap-8">
					<InputForm
						prefix={<Mail />}
						control={form.control}
						name="email"
						placeholder="Email"
					/>
					<InputForm
						prefix={<Phone />}
						control={form.control}
						name="phone"
						placeholder="Phone"
					/>
				</div>
				<TextareaForm control={form.control} name="message" placeholder="Message" />
				<Button className="rounded-full" size={'xl'}>
					<Send />
					Send
				</Button>
			</form>
		</Form>
	);
};
export default ContactForm;
