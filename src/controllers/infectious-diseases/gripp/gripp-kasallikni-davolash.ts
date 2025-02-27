import { MyContext } from '../../../core/bot';
import { messages } from '../../../common/languages';
import { grippKeyboard } from '../../../handlers/keyboard-handlers';

const grippKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Grippni davolash

Grippni davolash usullari doimiy ravishda rivojlanib va takomillashib boradi, chunki gripp virusi mutatsiyaga uchrab, o‘zini yangilaydi. Shu sababli, oldingi vaksinalar foyda bermasligi mumkin.

Kasallikni davolash uchun quyidagilar ishlatiladi:

▪️harorat tushiruvchi dorilar;

▪️virusga qarshi dorilar;

▪️tomirlarni toraytiruvchi dorilar;

▪️balg‘am ajratuvchi va yo‘talga qarshi dorilar;

▪️multivitaminlar;

▪️o‘simlik damlamasi va qaynatmalari bilan ingalyatsiya muolajasi;

▪️immunitetni ko‘taruvchi dorilar;

▪️antigistamin dorilar.

Kasallik davrida bemorlarga ko‘proq vitaminli suyuqliklar va rezavor mevalardan tayyorlangan ichimliklarni ichish tavsiya qilinadi.

Bolalarda grippni davolash uchun yotoqda dam olish tavsiya etiladi.`, {
        reply_markup: grippKeyboard(ctx),
    });

};

export { grippKasallikniDavolashController };