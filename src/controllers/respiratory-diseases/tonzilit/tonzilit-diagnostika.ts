import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅

Tonzillitni aniqlash uchun shifokor bir nechta tekshiruv va laborator tahlillar o‘tkazadi.

1. Fizik tekshiruv

Shifokor bemorning umumiy ahvolini tekshiradi va quyidagilarga e'tibor qaratadi:

Bodomcha bezlarining shishishi, qizarishi va oq yiringli qoplamalar borligi

Limfa tugunlarining kattalashgani

Tomoq, til va tanglayning holati

Isitma va umumiy holsizlik alomatlari

2. Laborator diagnostika

Agar shifokor bakterial infeksiyadan shubhalansa, qo‘shimcha tahlillar talab etiladi:

Tomoqdan surtma olish (bo‘g‘izdan bakteriologik tahlil)`, {
        reply_markup: tonzillitKeyboard(ctx),
    });

};

export { tonzilitDiagnostikaController };