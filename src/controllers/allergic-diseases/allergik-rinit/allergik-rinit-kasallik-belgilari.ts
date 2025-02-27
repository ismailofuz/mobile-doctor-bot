import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';
import { allergikRinitController } from './allergik-rinit';

const allergikRinitKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅

Allergik rinitning belgilari

Allergik rinit quyidagi belgilar bilan tavsiflanadi:

Tumov;

Burun bitishi;

Tez-tez aksirish;

Tomoqdagi qitiqlash hissi;

Davomli yo‘tal xurujlari;

Ko‘z qichishishi, ko‘z yoshi ajralishining kuchayishi;

Ko‘zlarning yorug‘likka sezgirligi ortishi;

Hid bilish qobiliyatining yo‘qolishi.`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });
};

export { allergikRinitKasallikBelgilariController };