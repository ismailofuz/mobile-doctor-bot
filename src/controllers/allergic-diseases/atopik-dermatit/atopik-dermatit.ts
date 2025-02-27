import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'atopik_dermatit';
    const message = await ctx.reply(`❗ Atopik dermatit`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { atopikDermatitController };