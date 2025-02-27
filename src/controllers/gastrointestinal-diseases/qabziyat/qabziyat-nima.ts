import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Qabziyat nima✅

Qabziyat

Qabziyat — bu ichak harakatining qiyin, sekin yoki kamdan-kamligi bilan tavsiflangan kasallik. Kasallik surunkali shaklda ham bo‘lishi mumkin. Ko‘pincha bolalar va qariyalarda kuzatiladi.`, {
        reply_markup: qabziyatKeyboard(ctx),
    });
};

export { qabziyatNimaController };