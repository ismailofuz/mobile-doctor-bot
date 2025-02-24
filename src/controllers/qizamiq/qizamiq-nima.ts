import { MyContext } from '../../core/bot';
import { qizamiqKeyboard } from '../../handlers/keyboard-handlers';

const qizamiqNimaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Qizamiq nima?

Qizamiq – bu o‘tkir yuqumli virusli kasallik bo‘lib, tana haroratining ko‘tarilishi, ko‘p miqdorda toshma va shamollash alomatlari bilan namoyon bo‘ladi.

Qizamiqning ikkita shakli mavjud: atipik va tipik. Atipik qizamiq yengilroq kechadi va o‘z navbatida quyidagi turlarga bo‘linadi:

Mitigatsiyalangan atipik qizamiq – Inkubatsiya davrida qizamiqqa qarshi immunoglobulin yuborilgan yoki immunoglobulinlar qonga quyilgan odamlarda uchraydi. Bu turdagi kasallikda kataral davr bo‘lmaydi, tana harorati maksimal 38°C gacha ko‘tariladi va Filatov-Koplikov dog‘lari (og‘iz shilliq qavatidagi mayda oq dog‘lar) hosil bo‘lmaydi.

Abortiv atipik qizamiq – Tana harorati oshadi va 3-4 kun davomida pasaymaydi. Toshmalar och pushti rangda bo‘ladi, ko‘p emas, faqat tananing yuqori qismida va yuzda paydo bo‘ladi. Bemor 4-5 kun ichida sog‘ayadi.

O‘chirilgan atipik qizamiq – Bemor ozgina holsizlikni his qiladi. Toshma paydo bo‘lmaydi, faqat yengil burun bitishi kuzatilishi mumkin.

Tipik va asemptomatik qizamiq

Asemptomatik (atipik) qizamiq – Hech qanday tarzda o‘zini namoyon qilmaydi. Faqat laboratoriya testlari orqali tashxis qilinadi.

Tipik qizamiq – Kasallik engil, o‘rtacha yoki og‘ir kechishi mumkin. Ba’zida asoratlar bilan yoki asoratlarsiz o‘tadi.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });

};

export { qizamiqNimaController };