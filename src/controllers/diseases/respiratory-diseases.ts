import { MyContext } from '../../core/bot';
import {
    gastrointestinalDiseasesKeyboard, respiratoryDiseasesDiseasesKeyboard,
} from '../../handlers/keyboard-handlers';

const childrenRespiratoryDiseasesController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'respiratory_diseases';
    const message = await ctx.reply(`🤕 Nafas yo'llari kasalliklari`, {
        reply_markup: respiratoryDiseasesDiseasesKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;

};
export { childrenRespiratoryDiseasesController };