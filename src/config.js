
import dotenv from 'dotenv';

dotenv.config();

export const MONGODB_URI = process.env.MONGODB_URI;
export const TOKEN_SECRET = process.env.TOKEN_SECRET;

/*

Create a .env file and add your environment variables here.

For example:
MONGODB_URI=your_mongodb_uri
TOKEN_SECRET=your_token_secret

*/


