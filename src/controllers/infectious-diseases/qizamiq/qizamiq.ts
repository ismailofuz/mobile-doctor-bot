import { MyContext } from '../../../core/bot';
import { qizamiqKeyboard } from '../../../handlers/keyboard-handlers';

const qizamiqController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'qizamiq';
    const message = await ctx.reply(`❗ QIZAMIQ`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { qizamiqController };