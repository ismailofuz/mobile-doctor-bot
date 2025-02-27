import { MyContext } from '../../../core/bot';
import {
    bronxalAstmaKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅


Bronxial astma belgilari

Ushbu kasallik uchun xos belgilari:

yo‘tal xurujlari (kechasi);

nafas olish muammolari, nafas qisilishi;

balg‘am ajralishi;

xirillab nafas olish;

ko‘krak qafasidagi og‘irlik hissi.`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });
};

export { bronxalAstmaKasallikBelgilariController };