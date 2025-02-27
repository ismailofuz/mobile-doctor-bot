import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅

Diagnostika

Qabziyatni qanday davolash kerakligini aniqlash uchun proktolog bir qator tadqiqotlar o‘tkazadi, ular orasida:

qorin bo‘shlig‘i organlarining ultratovush tekshiruvi;

kolonoskopiya;

axlat va siydik tahlili;

anorektometriya;

irrigoskopiya.`, {
        reply_markup: qabziyatKeyboard(ctx),
    });

};

export { qabziyatDiagnostikaController };