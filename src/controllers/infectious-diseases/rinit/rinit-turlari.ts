import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitTurlariController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Rinit (Burun oqishi) – yuqori nafas yo‘llarining keng tarqalgan yallig‘lanish kasalligi. O‘tkir va surunkali shakllari mavjud. Bolalarda, ayniqsa maktabgacha yoshdagi bolalarda rinit kattalarga qaraganda ikki baravar ko‘p uchraydi.

Hozirgi vaqtda rinitning bir necha turlari mavjud:

▪️Kataral: burun shilliq pardasining surunkali yallig‘lanishi.

▪️Virusli: kuz-qish davrida paydo bo‘ladi.

▪️Allergik: mavsumiy yoki yil davomida bo‘lishi mumkin.

▪️Atrofik: quruqlik, po‘st tashlash, hid bilishning yo‘qolishi va burundan qon ketishi bilan kechadi.

▪️Gipertrofik: burun bo‘shlig‘ida biriktiruvchi to‘qima o‘sib ketishi bilan ta’riflanadi.

Medikamentoz: burun preparatlarini uzoq vaqt ishlatish natijasida rivojlanadi.`, {
        reply_markup: rinitKeyboard(ctx),
    });

};

export { rinitTurlariController };