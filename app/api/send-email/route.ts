import {ContactFormData, ContactSchema} from '@/lib/schemas/contact-schema';
import {zodValidate} from '@/lib/utils';
import {NextResponse} from 'next/server';

const payloadValidator = zodValidate<ContactFormData>(ContactSchema);

export async function POST(request: Request) {
	try {
		const payload = await request.json();
		const body = payloadValidator(payload);

		return NextResponse.json({
			success: true,
			data: {message: 'Contact me successfull !!!', body},
		});
	} catch (error) {
		return NextResponse.json({success: false, error: error}, {status: 500});
	}
}
