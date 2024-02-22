import clientPromise from '@/lib/mongo/client'
import { Collection, Db, MongoClient } from 'mongodb'

let client: MongoClient
let db: Db
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
let guestbook: Collection<any>

async function init() {
	if (db) return
	try {
		client = await clientPromise
		db = await client.db()
		guestbook = await db.collection('guestbook')
	} catch (error) {
		throw new Error('Failed to connect to the database.')
	}
}
;(async () => {
	await init()
})()

/////////////////
/// Guestbook ///
////////////////

export const getGuestbookEntries = async () => {
	try {
		if (!guestbook) await init()

		console.log('fetching entries...')

		const entries = await guestbook
			.find({})
			.map((entry) => ({ ...entry, _id: entry._id.toString() }))
			.toArray()
		return { entries }
	} catch (error) {
		return { error: 'Failed to fetch guestbook!' }
	}
}
interface CreateGuestbookEntryProps {
	name: string
	message: string
}
export const createGuestbookEntry = async ({
	name,
	message,
}: CreateGuestbookEntryProps) => {
	try {
		if (!guestbook) await init()

		return await guestbook.insertOne({ name, message, updatedAt: new Date() })
	} catch (error) {
		return { error: 'Failed to create entry!' }
	}
}
