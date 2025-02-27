import { MyContext } from '../../../core/bot';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'bronxal_astma';
    const message = await ctx.reply(`❗ Bronxal astma`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { bronxalAstmaController };