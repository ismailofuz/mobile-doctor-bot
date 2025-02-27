import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Atopik dermatit nima✅

Atopik dermatit

Atopik dermatit (shuningdek, atopik ekzema, disseminirlangan neyrodermit, infantil ekzema, burmalar ekzemasi yoki Benye diazetik prurigosi deb ham ataladi) eng keng tarqalgan allergik kasalliklardan biri bo‘lib, u terining surunkali shikastlanishi, ayniqsa og‘ir shakllarida namoyon bo‘ladi.`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });
};

export { atopikDermatitNimaController };