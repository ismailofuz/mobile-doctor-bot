import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅

Oldini olish

Kasallikning oldini olish uchun bemorlarga quyidagilar tavsiya etiladi:

oshqozon-ichak trakti kasalliklarini o‘z vaqtida davolash;

ratsionga kletchatkaga boy oziq-ovqatlarni (meva, sabzavot, donli don) qo‘shish;

har kuni yetarli miqdorda suyuqlik iste’mol qilish (kamida 2 l).`, {
        reply_markup: qabziyatKeyboard(ctx),
    });
};

export { qabziyatProfilaktikaController };