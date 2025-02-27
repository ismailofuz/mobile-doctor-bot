import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'tonzilit';
    const message = await ctx.reply(`❗ TONZILIT`, {
        reply_markup: tonzillitKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { tonzilitController };