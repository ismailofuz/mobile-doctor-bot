import { MyContext } from '../../core/bot';
import { suvchechakKeyboard } from '../../handlers/keyboard-handlers';

const suvchechakXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Onalari suvchechak bilan kasallanmagan yangi tug'ilgan chaqaloqlar qornida antitelolar oladi va ular varicella zoster virusiga qarshi immunitetga ega emas. Hayotining birinchi yilida onaning antitanachalari yo qoladi va bola infeksiyaga uchraydi.

Suvchechakka moyillik odam ulg'aygan sayin ortib boradi va 4-5 yoshda 100% ga yetadi. Maktabgacha ta'lim muassasalarida aksariyat bolalar suvchechak bilan kasallanadi, shuning uchun kattalar kamdan kam kasallanadi.

Xavf guruhiga quyidagilar kiradi:

▪️maktabgacha va kichik maktab yoshidagi bolalar;

▪️bolaligida suvchechak bilan kasallanmagan keksa odamlar;

▪️immunitet tanqisligi bo'lgan shaxslar;

▪️og'ir kasallikka chalinganlar.

Kasallanishning eng yuqori cho qqisi kuz va bahorda kuzatiladi.`, {
        reply_markup: suvchechakKeyboard(ctx),
    });
};

export { suvchechakXavfliJihatlariController };