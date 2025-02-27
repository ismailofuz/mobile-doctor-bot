import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'orvi';
    const message = await ctx.reply(`❗️O'RVI`, {
        reply_markup: orviKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { orviController };