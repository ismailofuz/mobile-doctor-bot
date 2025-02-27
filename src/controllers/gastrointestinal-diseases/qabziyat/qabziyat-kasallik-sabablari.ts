import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅

Sabablari

Kasallik ovqat hazm qilish buzilishidan kelib chiqadi, bu esa ichak harakatini 48 soatgacha yoki undan ko‘proq vaqtga kechikishiga olib keladi.

Qabziyat sabablari:

defekatsiya qilish istagini muntazam ravishda ushlab turish;

uzoq muddat yotib davolanish;

ich suruvchi dorilarni tez-tez ishlatish;

o‘simlik tolasiga boy oziq-ovqat mahsulotlarini yetarli darajada iste’mol qilmaslik;

qorin bo‘shlig‘i mushaklarining zaiflashishi (keksa odamlarda);

suyuqlikni yetarli darajada iste’mol qilmaslik;

homiladorlik;

stress, psixo-emotsional kasalliklar;

sayohat;

hazm qilishni qiyinlashtiradigan ovqatlarni iste’mol qilish.`,
        {
            reply_markup: qabziyatKeyboard(ctx),
        },
    );
};

export { qabziyatKasallikSabablariController };