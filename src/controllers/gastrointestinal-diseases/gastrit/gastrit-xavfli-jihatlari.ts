import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅


Xavf

Gastritning zo‘rayishi o‘z vaqtida davolanmasa, kasallik surunkali shaklga o‘tishi va quyidagi asoratlarga olib kelishi mumkin:

Me’dadan qon ketishi.

Me’da yarasi.`, {
        reply_markup: gastritKeyboard(ctx),
    });
};

export { gastritXavfliJihatlariController };