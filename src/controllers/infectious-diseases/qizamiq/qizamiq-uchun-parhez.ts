import { MyContext } from '../../../core/bot';
import { qizamiqKeyboard } from '../../../handlers/keyboard-handlers';

const qizamiqUchunParhezController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Qizamiq uchun parhez✅

Qizamiq uchun parhez

Shifokorlar qizamiq uchun taqiqlangan mahsulotlar ro‘yxatiga quyidagilarni kiritadilar:

barcha yog‘li va achchiq ovqatlar;

qattiq go‘sht;

ziravorlar (xantal, murch va qizil qalampir).`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
};

export { qizamiqUchunParhezController };