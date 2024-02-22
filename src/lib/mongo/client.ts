import { MongoClient } from 'mongodb'

declare global {
	// biome-ignore lint/style/noVar: <explanation>
	var _mongoClientPromise: Promise<MongoClient>
}

const URI = process.env.MONGO_URI

const options = {}

if (!URI) throw new Error('Please add you Mongo Uri to env file')

const client = new MongoClient(URI, options)

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV !== 'production') {
	if (!global._mongoClientPromise) {
		global._mongoClientPromise = client.connect()
	}
	clientPromise = global._mongoClientPromise
} else {
	clientPromise = client.connect()
}

export default clientPromise
