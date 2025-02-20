import { Bot, Context, session, SessionFlavor } from 'grammy';
import * as dotenv from 'dotenv';

dotenv.config();

interface SessionData {
    step?: string;
    language?: string;
    message_id?: number;
}

export type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(process.env.BOT_TOKEN || '');

bot.use(session({ initial: () => ({}) }));

export { bot };
