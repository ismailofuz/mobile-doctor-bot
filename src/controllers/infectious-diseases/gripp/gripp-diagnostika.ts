import { MyContext } from '../../../core/bot';
import { grippKeyboard } from '../../../handlers/keyboard-handlers';

const grippDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika

Grippga tashxis qo‘yish uchun umumiy amaliyot shifokori bemorni quyidagi tekshiruvlarga jo‘natishi mumkin:

▪️tomoq va burun bo‘shlig‘idan surtma;

▪️burun shilliq qavati epiteliyisidan olingan surtma.`, {
        reply_markup: grippKeyboard(ctx),
    });

};

export { grippDiagnostikaController };