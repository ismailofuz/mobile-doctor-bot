import { MyContext } from '../../../core/bot';
import {
    qabziyatKeyboard,
} from '../../../handlers/keyboard-handlers';

const qabziyatController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'qabziyat';
    const message = await ctx.reply(`❗ QABZIYAT`, {
        reply_markup: qabziyatKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;
};

export { qabziyatController };