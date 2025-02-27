import { MyContext } from '../../../core/bot';
import {
    diareyaKeyboard,
} from '../../../handlers/keyboard-handlers';

const diareyaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'diareya';
    const message = await ctx.reply(`❗ DIAREYA`, {
        reply_markup: diareyaKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { diareyaController };