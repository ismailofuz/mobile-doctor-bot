import { MyContext } from '../../core/bot';
import {
    gastrointestinalDiseasesKeyboard,
} from '../../handlers/keyboard-handlers';

const childrenGastrointestinalDiseasesController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'gastrointestinal_diseases';
    const message = await ctx.reply(`🤕 Oshqozon ichak kasalliklari`, {
        reply_markup: gastrointestinalDiseasesKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;

};
export { childrenGastrointestinalDiseasesController };