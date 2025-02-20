import { MyContext } from '../core/bot';
import db from '../database';
import { startController } from './start';
import { genderController } from './gender';
import { chooseWhoAreYouController } from './choose-who-are-you';

const callbackQueryController = async (ctx: MyContext) => {
    const callbackData = ctx.callbackQuery?.data as string;

    if (!callbackData) return;

    if (callbackData === 'back') {
        const step = ctx.session.step;
        if (step === 'choose_gender') {
            await ctx.deleteMessages([ctx.session?.message_id as number]);
            await startController(ctx);
        }
    } else if (callbackData.startsWith('language_')) {
        ctx.session.language = callbackData.split('_')[1]; // "uzbek", "russian", "english"
        ctx.session.step = 'choose_gender';
        await ctx.deleteMessages([ctx.session?.message_id as number]);
        await genderController(ctx);
        await ctx.answerCallbackQuery();
    } else if (callbackData.startsWith('gender_')) {
        const gender = callbackData.split('_')[1];
        ctx.session.step = 'choose_who_are_you';
        await db('users')
            .where({ chat_id: ctx.chatId?.toString() })
            .update({ gender });
        await chooseWhoAreYouController(ctx);
        await ctx.answerCallbackQuery();
    }
};

export { callbackQueryController };
