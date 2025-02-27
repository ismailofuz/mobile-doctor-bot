import { MyContext } from '../../../core/bot';
import {
    diareyaKeyboard,
} from '../../../handlers/keyboard-handlers';

const diareyaXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅


Xavfli jihatlari
Avvalo, Diareya tananing suvsizlanishi tufayli xavfli hisoblanadi. Agar Diareya ichak infeksiyasi tufayli kelib chiqqan bolsa, sepsis kelib chiqishi ehtimoli mavjud (ayniqsa bolalarda). Suv-elektrolit balansi buzilishi natijasida barcha a’zo va to‘qimalar ishi buzilib, tutqanoq va yurak toxtashiga olib kelishi mumkin. Shu sababdan birinchi belgilar paydo bo‘lishi bilanoq, darhol gastroenterolog qabuliga borish lozim.`, {
        reply_markup: diareyaKeyboard(ctx),
    });
};

export { diareyaXavfliJihatlariController };