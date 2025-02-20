import { MyContext } from '../../core/bot';
import { suvchechakKeyboard } from '../../handlers/keyboard-handlers';

const suvchechakController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'suvchechak';
    const message = await ctx.reply(`❗ SUVCHECHAK`, {
        reply_markup: suvchechakKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { suvchechakController };