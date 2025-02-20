import { MyContext } from '../core/bot';
import { Languages, messages } from '../common/languages';
import { genderKeyboard } from '../handlers/keyboard-handlers';

const genderController = async (ctx: MyContext) => {
    const language: Languages = ctx.session.language as Languages;
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    const message = await ctx.reply(`${messages[language]['choose_gender']}`, {
        parse_mode: 'Markdown',
        reply_markup: genderKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id as number;
};
export { genderController };