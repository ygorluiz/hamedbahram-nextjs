import {
	createGuestbookEntry,
	getGuestbookEntries,
} from '@/lib/mongo/guestbook'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const { entries, error } = await getGuestbookEntries()
		if (error) throw new Error(error)

		return NextResponse.json({ entries }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}

export async function POST(request: Request) {
	try {
		const { name, message } = await request.json()
		//@ts-ignore
		const { insertedId, error } = await createGuestbookEntry({
			name,
			message,
		})
		if (error) throw new Error(error)

		return NextResponse.json({ insertedId }, { status: 200 })
	} catch (error) {
		return NextResponse.json(
			{ error: 'Internal Server Error' },
			{ status: 500 },
		)
	}
}
