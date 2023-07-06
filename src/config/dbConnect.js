import mongoose from "mongoose";

mongoose.connect("mongodb://username:password@host:port/database?options...");

let db = mongoose.connection;

export default db;