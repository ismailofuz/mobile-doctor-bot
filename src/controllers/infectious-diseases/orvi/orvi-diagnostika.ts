import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`O'RVI tashxisini qo'yish uchun umumiy amaliyot shifokori(bolalar uchun-pediatr)ga murojaat qilinadi. Bundan tashqari, katta yoshdagilar va tajribasi bor kishilar kasallikni mustaqil ravishda aniqlashi mumkin. Buning uchun haroratni o'lchash kifoya, agar u yuqori bo'lmasa, bemor shamollagan bo'lishi kerak. Agar yo'tal uzoq vaqt davomida to'xtamasa va o'tkir bo'lsa, unda quyidagi tekshiruvlardan o'tish kerak:

▪️ qonning umumiy tahlili
▪️ o'pka rentgenogrammasi(pnevmoniyani istisno qilish uchun)`, {
        reply_markup: orviKeyboard(ctx),
    });

};

export { orviDiagnostikaController };