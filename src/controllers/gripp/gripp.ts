import { MyContext } from '../../core/bot';
import { grippKeyboard } from '../../handlers/keyboard-handlers';

const grippController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'gripp';
    const message = await ctx.reply(`❗️GRIPP`, {
        reply_markup: grippKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { grippController };