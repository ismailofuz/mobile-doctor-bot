import { MyContext } from '../../core/bot';
import { grippKeyboard } from '../../handlers/keyboard-handlers';

const grippXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari

Agar gripp o‘z vaqtida davolanmasa, quyidagi asoratlar kelib chiqishi mumkin:

▪️zotiljam;

▪️bronxit;

▪️bronxiolit;

▪️eshitish qobiliyatining buzilishi;

▪️burun shilliq qavatining atrofiyasi;

▪️Reye sindromi;

▪️meningit;

▪️ensefalit.

Grippning ko‘p turlari intoksikatsiya, insult yoki yurak va o‘pka yetishmovchiligi tufayli o‘limga olib kelishi mumkin.▪️`, {
        reply_markup: grippKeyboard(ctx),
    });
};

export { grippXavfliJihatlariController };