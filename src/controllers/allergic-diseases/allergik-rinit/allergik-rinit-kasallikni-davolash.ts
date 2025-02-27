import { MyContext } from '../../../core/bot';
import { messages } from '../../../common/languages';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Allergik rinitni davolash
Allergik rinitni davolash quyidagilarni o'z ichiga
oladi:

• immunoterapiya;
• antigistamin dorilar;
• qon tomirlarini toraytiruvchi dorilar;
• hujayra membranasi stabilizatorlari;
• glyukokortikosteroidlar;
• davolovchi mashqlar;
• ingalyatsiya.

Burun to sig'ining giyshiqligi tufayli kelib chiqqan surunkali rinitda jarrohlik amaliyoti o tkazilishi buyuriladi`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });

};

export { allergikRinitKasallikniDavolashController };