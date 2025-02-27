import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'allergik_rinit';
    const message = await ctx.reply(`❗ Allergik Rinit`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { allergikRinitController };