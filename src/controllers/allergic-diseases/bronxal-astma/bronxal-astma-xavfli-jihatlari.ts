import { MyContext } from '../../../core/bot';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅

Xavfli jihatlari

Tez-tez astma xurujlari quyidagilarga sabab bo‘lishi mumkin:

pnevmotoraks (plevra bo‘shlig‘ida havo to‘planishi);

o‘pkaning emfizematoz buzilishlari;

o‘tkir turdagi nafas yetishmovchiligi.

Xavf guruhi

Xavf guruhiga quyidagilar kiradi:

tez-tez O‘RVI, bronxit va pnevmoniya bilan og‘riyadigan bemorlar;

adenoid va poliplari olib tashlangan bemorlar;

allergiyaga moyil kishilar;

eshakemi, neyrodermit bilan og‘rigan bemorlar.`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });
};

export { bronxalAstmaXavfliJihatlariController };