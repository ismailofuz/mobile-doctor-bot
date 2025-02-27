import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅

Xavfli jihatlari✅

Xavfli jihatlari

Agar ich qotishini davolash o‘z vaqtida boshlanmasa, bu kasallikning surunkali shaklini rivojlanishiga va jiddiy asoratlarga olib kelishi mumkin, masalan:

ichakning yallig‘lanish kasalliklari (kolit);

rektoanal patologiyalar (gemorroy, parapraktit);

ichak devorlarining ishemiyasi;

yo‘g‘on ichakning divertikulyar kasalligi;

yo‘g‘on ichakning kattalashishi (megakolon);

yo‘g‘on ichak saratoni.`, {
        reply_markup: qabziyatKeyboard(ctx),
    });
};

export { qabziyatXavfliJihatlariController };