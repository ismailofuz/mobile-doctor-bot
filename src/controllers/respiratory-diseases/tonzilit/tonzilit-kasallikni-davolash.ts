import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅

Bakterial tonzillit – antibiotiklar (masalan, penitsillin yoki amoksitsillin) buyuriladi.
Virusli tonzillit – viruslarga qarshi dori-darmonlar yo‘q, lekin immunitetni qo‘llab-quvvatlash va simptomatik davolash muhim.
Uy sharoitida davolash – ko‘p suyuqlik ichish, iliq sho‘r suv bilan tomoq chayish, dori vositalari (isitma tushiruvchi, og‘riq qoldiruvchi) qabul qilish.`, {
        reply_markup: tonzillitKeyboard(ctx),
    });

};

export { tonzilitKasallikniDavolashController };