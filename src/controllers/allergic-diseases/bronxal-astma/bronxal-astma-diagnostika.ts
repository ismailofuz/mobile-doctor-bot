import { MyContext } from '../../../core/bot';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅

Diagnostika

Astmani tashxislash va davolash uchun pulmonolog quyidagi tahlillar va tekshiruvlarni buyuradi:

dastlabki umumiy ko‘rik;

spirometriya;

pikfloumetriya;

allergenni aniqlash uchun tahlil;

jismoniy faollik bilan testlar.`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });

};

export { bronxalAstmaDiagnostikaController };