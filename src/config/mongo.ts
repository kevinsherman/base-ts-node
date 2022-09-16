import { MongoClient } from "mongodb";

const mongo_uri = process.env.MONGO_URI || "mongodb://192.168.7.199:27017";

let _mongo = null;

if (_mongo === null) {
  _mongo = new MongoClient(mongo_uri);
}

export const client = _mongo;
