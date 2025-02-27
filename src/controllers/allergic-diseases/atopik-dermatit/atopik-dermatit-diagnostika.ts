import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅

Diagnostika

Avvalo, ichaklar mikroflorasi, gijja tuxumlari va mikroorganizmlar mavjudligini aniqlash uchun axlat tahlili olinadi. Surunkali diareyada ichki organlarning ultratovush tekshiruvi, kolonoskopiya va kerak bo‘lganda to‘qimalarning biopsiyasini o‘tkazish lozim.`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });

};

export { atopikDermatitDiagnostikaController };