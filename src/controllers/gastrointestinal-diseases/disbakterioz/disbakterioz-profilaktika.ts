import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅
Oldini olish

Ratsional parhez va dori-darmonlarni faqat shifokor nazorati ostida qo‘llash disbakteriozning oldini olish va davolashda muhim chora-tadbirlar hisoblanadi.

Parhez

Disbakteriozda to‘g‘ri ovqatlanish ayniqsa muhimdir. Ovqatlanish quyidagilarni o‘z ichiga olishi kerak:

▪️qaynatilgan sabzavotlar;

▪️yog‘siz go‘sht va baliq;

▪️tuxumlar;

▪️bo‘tqa;

▪️kepakli non;

▪️qatiq-sut mahsulotlari;

▪️o‘simlik moylari;

▪️choy, na’matak qaynatmasi, kisel va chernika.


Agar disbakterioz diareya (ichburug‘) bilan birga davom etsa, menyu tozalangan, qaynatilgan va bug‘da pishirilgan ovqatdan iborat bo‘lishi kerak.`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });
};

export { disbakteriozProfilaktikaController };