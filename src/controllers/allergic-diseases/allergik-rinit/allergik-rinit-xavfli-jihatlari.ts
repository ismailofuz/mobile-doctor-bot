import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅

Xavfli jihatlari

Agar allergik rinit o‘z vaqtida davolanmasa, quyidagi asoratlar paydo bo‘lishi mumkin:

sinuzit;

otit;

eshak yemi;

bronxial astma;

Kvinke shishi;

atopik dermatit.`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });
};

export { allergikRinitXavfliJihatlariController };