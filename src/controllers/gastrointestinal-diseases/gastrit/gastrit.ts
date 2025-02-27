import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'gastrit';
    const message = await ctx.reply(`❗ GASTRIT`, {
        reply_markup: gastritKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { gastritController };