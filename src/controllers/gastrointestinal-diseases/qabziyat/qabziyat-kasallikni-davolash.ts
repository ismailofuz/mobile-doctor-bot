import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallikni davolash✅

Davolash

Qabziyatni davolash quyidagilarni o‘z ichiga oladi:

ich suruvchi preparatlar;

shamlar;

klizmalar.

Bolalarda ich qotishini davolash kattalar bilan bir xil. Ota-onalar bolaning ovqatlanishini sozlashlari kerak.`, {
        reply_markup: qabziyatKeyboard(ctx),
    });

};

export { qabziyatKasallikniDavolashController };