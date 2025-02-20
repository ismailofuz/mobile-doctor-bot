import { MyContext } from '../core/bot';
import { Languages, messages } from '../common/languages';
import { whoAreYouReplyKeyboard } from '../handlers/keyboard-handlers';

const chooseWhoAreYouController = async (ctx: MyContext) => {
    const language: Languages = ctx.session.language as Languages;

    await ctx.deleteMessages([ctx.session?.message_id as number]);

    const message = await ctx.reply(`${messages[language]['choose_who_are_you']}`, {
        parse_mode: 'Markdown',
        reply_markup: whoAreYouReplyKeyboard(ctx),
    });

    ctx.session.message_id = message?.message_id as number;
};
export { chooseWhoAreYouController };