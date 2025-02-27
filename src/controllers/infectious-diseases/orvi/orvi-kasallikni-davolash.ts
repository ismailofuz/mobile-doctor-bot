import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash

Kasallik quyidagi usullar bilan davolanadi:

◾️ Kasallik belgilari bilan kurashish (ko'p suv ichish, C vitamini yoki uni o'z ichiga olgan oziq-ovqatlarni iste'mol qilish);
◾️ Agar harorat 38 darajadan oshsa, isitma tushiradigan dori ichish lozim. Agar harorat past bo'lsa, uni tushirishning hojati yo'q, chunki shu tarzda tana kasallik bilan kurashadi.
◾️ Agar burun bitishi yoki oqishi kuzatilsa, qon tomirlarini toraytiruvchi tomchilar tomiziladi;
◾️ Virusga qarshi preparatlardan foydalanish.Agar siz shifokor, ko rigidan o tmagan bo'lsangiz, u holda antibiotiklarni o'zingiz tanlashingiz va sotib olishingiz mumkin emas. Ular faqat organzimga bakterial infeksiya tushganda kerak bo'ladi.
◾️ Bola ko'proq suyuqlik ichishi kerak;
◾️ Burundagi shilliq moddani aspirator bilan olib tashlash;
◾️ Berodual bilan ingalyatsiyani amalga oshirish;
◾️ Dori-darmonlarni qabul qilish;
◾️ Bola yotgan xonani ko'proq vaqt davomida shamollatish.

O'RVIni tezroq davolash uchun bemor ko'proq yotoqda dam olishi, tashqariga chiqmasligi va ko'p suyuqlik ichishi kerak. Haddan tashqari faollik og ir asoratlarga olib kelishi mumkin.`, {
        reply_markup: orviKeyboard(ctx),
    });

};

export { orviKasallikniDavolashController };