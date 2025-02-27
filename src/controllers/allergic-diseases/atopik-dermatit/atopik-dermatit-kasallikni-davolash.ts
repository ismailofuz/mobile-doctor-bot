import { MyContext } from '../../../core/bot';
import { messages } from '../../../common/languages';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅


Diareyaning davolash usullari

Diareyaning to‘g‘ri va samarali davolash usullari uning tabiati va kelib chiqish sababiga bog‘liq.

Agar kasallik yuqumli bo‘lsa, shifokor quyidagi antibiotiklarni buyurishi mumkin: Levomisetin, Biseptol, Norbaktin, sulfanilamidlar, nitrofuranlar.

Diareya stress sababli yuzaga kelgan bo‘lsa, Tazepam, Seduksen, Grandaksin, Persen kabi tinchlantiruvchi dorilar buyuriladi.

Agar suvsizlanish kuzatilsa (ayniqsa bolalarda), tomir ichiga tomchi dorilar yuboriladi. Shuningdek, Regidron, Gastrolit, probiotiklar va enterosorbentlar tavsiya etiladi.`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });

};

export { atopikDermatitKasallikniDavolashController };