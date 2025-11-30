import {ContactSchema} from '@/lib/schemas/contact-schema';
import {zodValidate} from '@/lib/utils';
import {NextResponse} from 'next/server';

const payloadValidator = zodValidate(ContactSchema);

export async function POST(request: Request) {
	try {
		const body = payloadValidator(request.body);
		return NextResponse.json({success: true, data: body});
	} catch (error) {
		return NextResponse.json({success: false, error: error}, {status: 500});
	}
}
