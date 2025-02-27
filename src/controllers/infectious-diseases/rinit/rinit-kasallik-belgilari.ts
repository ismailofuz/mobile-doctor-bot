import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅

Rinit (burun oqishi) belgilari

▪️Rinit belgilari:

▪️Burundan nafas olishning qiyinlashishi

▪️Burun qichishishi

▪️Burun teshiklari yoki burun terisining qizarishi

▪️Hid bilishning yo‘qolishi

▪️Burundan shilimshiq ajralmalar`, {
        reply_markup: rinitKeyboard(ctx),
    });
};

export { rinitKasallikBelgilariController };