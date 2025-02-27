import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅

Disbakteriozni davolash

Zarur mikroorganizmlarni o‘z ichiga olgan mahsulotlarni iste’mol qilishgina emas, balki disbalans sababini bartaraf etish, ya’ni disbakteriozni keltirib chiqargan asosiy kasallikni davolash ham muhimdir. Disbakteriozni davolash uch bosqichda amalga oshiriladi:

Ovqat hazm qilish jarayonida hosil bo‘ladigan zararli mikroorganizmlar va toksinlarni chiqarib tashlash.

Mikroflorani tarkibida tirik o‘simliklar va ularning hayot faoliyati mahsulotlari bo‘lgan maxsus preparatlar yordamida tiklash.

Mikroflora muvozanatini saqlash uchun qulay sharoitlar yaratish.`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });

};

export { disbakteriozKasallikniDavolashController };