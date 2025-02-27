import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika
Davolash uslubini aniqlash uchun allergolog-shifokor umumiy tekshiruvdan ot kzagandan va bemor shikoyatini tinglagandan so'ng, quyidagi tekshiruvlar va tahlillarni tayinlaydi:

• qonning umumiy tahlili;
• immunogramma;
• burundan ajratilgan shilliq moddaning
laboratoriya tekshiruvi;
• rinoskopiya;
• allergiya sababini aniqlash uchun
provokatsion teri testari.`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });

};

export { allergikRinitDiagnostikaController };