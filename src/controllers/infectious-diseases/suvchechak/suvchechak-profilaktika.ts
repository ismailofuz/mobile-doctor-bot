import { MyContext } from '../../../core/bot';
import { suvchechakKeyboard } from '../../../handlers/keyboard-handlers';

const suvchechakProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Suvchechak virusi tarqalishining oldini olish uchun quyidagilar zarur:

▪️Oxirgi vezikula paydo bo'lganidan keyin bemorni 5 kun davomida izolyatsiya qilish.

▪️Kontaktda bo'lgan, suvchechak bilan kasallanmagan bolalarni 3 haftaga izolyatsiya qilish.

▪️Xonalarni muntazam ravishda shamollating.

▪️Bemorning buyumlariga dezinfeksiyalovchi vositalar bilan ishlov berish.

▪️Suvchechak bilan kasallanmagan homiladorlar kasallangan ayol bilan kontaktda bolganlarida 10 kun ichida immunoglobulin inyeksiyasini qilishlari kerak.`, {
        reply_markup: suvchechakKeyboard(ctx),
    });
};

export { suvchechakProfilaktikaController };