import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'rinit';
    const message = await ctx.reply(`❗ RINIT`, {
        reply_markup: rinitKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { rinitController };