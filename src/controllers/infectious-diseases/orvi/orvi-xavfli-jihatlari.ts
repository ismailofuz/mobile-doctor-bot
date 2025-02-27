import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari

O‘RVI gripp kabi xavfli emas (grippni davolash kechiktirilsa, o‘limga olib kelishi mumkin). Ammo vaqtida davolanmagan shamollashning ham ba'zi asoratlari bor:

▪️bronxit;

▪️laringit;

▪️zotiljam;

▪️rinit;

▪️faringit va boshqalar.`, {
        reply_markup: orviKeyboard(ctx),
    });
};

export { orviXavfliJihatlariController };