import { MyContext } from '../../../core/bot';
import { suvchechakKeyboard } from '../../../handlers/keyboard-handlers';

const suvchechakDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Suvchechakni tashhislash uchun shifokor kasallar bilan kontaktda suvchechak yoki belbog'li temiratki bo'lgan-bo'lmaganligini aniqlaydi va toshmani ko'zdan kechiradi, uning joylashuvi, hajmi va shaklini baholaydi. Laboratoriya sharoitida pufakchalardan olingan surtmalar va Varicella zoster virusiga qarshi antitanalarga serologik testlar o'tkaziladi. Zarur hollarda bemor infeksionistga yuboriladi.`, {
        reply_markup: suvchechakKeyboard(ctx),
    });
};

export { suvchechakDiagnostikaController };