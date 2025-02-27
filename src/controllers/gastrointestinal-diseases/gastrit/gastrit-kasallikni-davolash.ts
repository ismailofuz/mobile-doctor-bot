import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅


Gastritni davolash

Gastritni davolash quyidagilarni o‘z ichiga oladi:

Maxsus parhezga rioya qilish.

Oshqozonda kislotalikni normallashtirish uchun preparatlar.

Me’da shilliq qavatini tiklash uchun vositalar.

Antibakterial terapiya.`, {
        reply_markup: gastritKeyboard(ctx),
    });

};

export { gastritKasallikniDavolashController };