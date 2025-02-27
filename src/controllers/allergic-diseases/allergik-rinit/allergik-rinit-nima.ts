import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Allergik rinit nima✅

Allergik rinit — yuqori nafas yo‘llarining kasalligi bo‘lib, organizmda allergik reaksiyaning paydo bo‘lishi tufayli yuzaga keladi. Bu kasallik ko‘pincha mavsumiydir (gul changiga allergiya bo‘lsa). Rinit o‘tkir va surunkali bo‘lishi mumkin.`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });
};

export { allergikRinitNimaController };