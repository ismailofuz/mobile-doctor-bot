import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅

Tomoqda kuchli og‘riq
Yutishda qiyinchilik
Isitma (38-40°C)
Bodomcha bezlarining shishishi va qizarishi
Oq yoki sarg‘ish dog‘lar paydo bo‘lishi
Bosh og‘rig‘i va umumiy holsizlik`, {
        reply_markup: tonzillitKeyboard(ctx),
    });
};

export { tonzilitKasallikBelgilariController };