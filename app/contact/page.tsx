'use client';

import ContactForm from '@/components/common/ContactForm';
import {SectionTitle} from '@/components/common/SectionTitle';
import {Button} from '@/components/ui/button';
import {motion} from 'motion/react';
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
		<div className="flex flex-col px-10 sm:px-0 w-screen items-center">
			<div
				style={{
					backgroundImage: "url('/images/banner.png')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
				className="w-screen flex flex-col justify-center items-center h-screen">
				<motion.p
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
					className="text-7xl font-bold text-white text-shadow-2xs">
					Have Any Doubts? We
				</motion.p>
				<motion.p
					initial={{opacity: 0, y: -20}}
					animate={{opacity: 1, y: 0}}
					transition={{duration: 0.6, ease: 'easeOut', delay: 0.2}}
					className="text-7xl font-bold text-white text-shadow-2xs">
					are Ready to Help.
				</motion.p>
				<Button onClick={scrollToForm} className="mt-6">
					Fill The Form Out!
				</Button>
			</div>
			<div
				ref={formRef}
				className="flex flex-col w-full h-screen gap-12 items-center justify-center">
				<SectionTitle title="Contact Us" />
				<ContactForm />
			</div>
		</div>
	);
};
export default ContactPage;
