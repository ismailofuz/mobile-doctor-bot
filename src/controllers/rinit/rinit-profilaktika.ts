import { MyContext } from '../../core/bot';
import { rinitKeyboard } from '../../handlers/keyboard-handlers';

const rinitProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Tumovning oldini olish uchun quyidagilar tavsiya etiladi:

▪️Organizmni qizdirish.

▪️O‘ta sovqotishdan saqlanish.

▪️Xonada optimal harorat va namlikni saqlab turish.

▪️Kasal odamlar bilan aloqani cheklash.`, {
        reply_markup: rinitKeyboard(ctx),
    });
};

export { rinitProfilaktikaController };