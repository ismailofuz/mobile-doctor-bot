import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅

Belgilar

Kasallikning dastlabki belgilari odatda infeksiyalanishdan 12 hafta o‘tib paydo bo‘ladi. Gepatit B uchun xarakterli alomatlar quyidagicha:

uzoq vaqt davomida ichakni bo‘shata olmaslik;

meteorizm;

ichakda bosim hissi;

qorinda og‘riq;

gaz hosil bo‘lishining ko‘payishi.`, {
        reply_markup: qabziyatKeyboard(ctx),
    });
};

export { qabziyatKasallikBelgilariController };