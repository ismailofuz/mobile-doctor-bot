import { MyContext } from '../../../core/bot';
import { messages } from '../../../common/languages';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅

Davolash

Bronxial astmani davolash quyidagilarni o‘z ichiga oladi:

kortikosteroid preparatlar;

ingalyatsiya;

bronxospazmolitik dorilar;

mukolitik preparatlar;

nafas olish uchun mashqlar;

immunitet tizimini mustahkamlash uchun terapiya.`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });

};

export { bronxalAstmaKasallikniDavolashController };