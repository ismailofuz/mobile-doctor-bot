import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika

Kasallik boshlanishini oldini olish uchun quyidagilar tavsiya etiladi:

▪️ovqatlanayotganda va ovqat tayyorlashda qo‘l gigienasiga rioya qilish;

▪️mato ro‘molcha ishlatmaslik, bir martalik qog‘oz salfetkalardan foydalanish;

▪️o‘zingiz foydalanadigan idish-tovoqlarni ajratib olish;

▪️uylarni doimiy ravishda shamollatib turish;

▪️jismoniy mashqlar bilan shug‘ullanib turish;

▪️o‘tkir respiratorli infeksiyaga chalingan bemorlar bilan aloqa qilmaslik.`, {
        reply_markup: orviKeyboard(ctx),
    });
};

export { orviProfilaktikaController };