import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Tonzillit (Angina)  nima✅

Tonzillit – bu bodomcha bezlarining yallig‘lanishi bo‘lib, uni angina deb ham atashadi. Kasallik odatda virus yoki bakteriyalar sababli rivojlanadi va tomoq og‘rig‘i, yutish qiyinlashishi, isitma va umumiy holsizlik bilan namoyon bo‘ladi.

Kasallik turlari✅

1. O‘tkir tonzillit (angina) – kasallik to‘satdan boshlanadi va odatda 7-10 kun ichida tuzaladi.


2. Surunkali tonzillit – agar bodomcha bezlari tez-tez yallig‘lansa yoki davolanmasa, kasallik surunkali shaklga o‘tishi mumkin.`, {
        reply_markup: tonzillitKeyboard(ctx),
    });
};

export { tonzilitNimaController };