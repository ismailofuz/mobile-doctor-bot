import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅

Agar tonzillit o‘z vaqtida davolanmasa yoki noto‘g‘ri davolansa, turli asoratlar rivojlanishi mumkin.

1. Yaqin atrofdagi asoratlar

Paratonzillyar abssess – bodomcha bezlarining atrofida yiring to‘planishi, og‘iz ochish qiyinlashishi, qattiq og‘riq va yuqori isitma bilan kechadi.

O‘rta quloq yallig‘lanishi (otit) – infeksiya quloqqa tarqalib, og‘riq, eshitishning pasayishi va yiring ajralishi mumkin.

Burun-yo‘tal yo‘llari infektsiyalari – tonzillit burun va tomoqning boshqa qismlariga tarqalishi mumkin.

2. Uzoq muddatli asoratlar

Revmatik isitma – streptokokk infeksiyasidan keyin yurak, bo‘g‘imlar va asab tizimiga zarar yetkazuvchi og‘ir kasallik.

Glomerulonefrit – buyraklar yallig‘lanishi, siydik bilan qon aralash chiqishi va shish bilan kechadi.

Sepsis (qon zaharlanishi) – infeksiya butun organizmga tarqalib, hayot uchun xavfli bo‘lishi mumkin.

3. Surunkali tonzillitning xavfi

Agar tonzillit tez-tez takrorlansa, organizm doimiy yallig‘lanish holatida bo‘ladi va immunitet sustlashishi mumkin.
Doimiy infektsiya tufayli bodomcha bezlari o‘z funksiyasini bajara olmaydi va kasallik boshqa organlarga ta’sir qilishi mumkin.`, {
        reply_markup: tonzillitKeyboard(ctx),
    });
};

export { tonzilitXavfliJihatlariController };