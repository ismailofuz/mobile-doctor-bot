import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'disbakterioz';
    const message = await ctx.reply(`❗️DISBAKTERIOZ`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { disbakteriozController };