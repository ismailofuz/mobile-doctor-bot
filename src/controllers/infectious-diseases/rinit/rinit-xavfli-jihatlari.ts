import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavf

Surunkali tumov asoratlarga olib kelishi mumkin, jumladan:

▪️Gaymorit;

▪️Xurra;

▪️Uyqusida nafas olishning to‘xtashi;

▪️Qaytalanuvchi otitlar, eshitish qobiliyatini yo‘qotish;

▪️Burun bo‘shlig‘i poliplari.`, {
        reply_markup: rinitKeyboard(ctx),
    });
};

export { rinitXavfliJihatlariController };