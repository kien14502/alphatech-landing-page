'use client';

import ContactForm from '@/components/common/ContactForm';
import {SectionTitle} from '@/components/common/SectionTitle';
import {Button} from '@/components/ui/button';
import {useRef} from 'react';

const ContactPage = () => {
	const formRef = useRef<HTMLDivElement | null>(null);

	const scrollToForm = () => {
		formRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div>
			<div className="w-screen flex flex-col justify-center items-center h-[calc(100vh-var(--header-height))] mt-(--header-height)">
				<h1 className="text-7xl font-bold">Have Any Doubts? We</h1>
				<h1 className="text-7xl font-bold">are Ready to Help.</h1>
				<Button onClick={scrollToForm} className="mt-6">
					Fill The Form Out!
				</Button>
			</div>
			<div
				ref={formRef}
				className="w-screen h-screen flex flex-col gap-12 items-center justify-center">
				<SectionTitle title="Contact Us" />
				<ContactForm />
			</div>
		</div>
	);
};
export default ContactPage;
