import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅

Bakterial infeksiya – eng ko‘p uchraydigan sababi A guruhi streptokokk bakteriyasidir.
Viruslar – gripp, adenovirus, rinovirus, Epstein-Barr virusi kabi viruslar tonzillit chaqirishi mumkin`,
        {
            reply_markup: tonzillitKeyboard(ctx),
        },
    );
};

export { tonzilitKasallikSabablariController };