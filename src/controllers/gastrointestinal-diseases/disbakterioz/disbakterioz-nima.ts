import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Disbakterioz nima✅

Ichak disbakteriozi (Disbiyozi) – bu ichakdagi foydali va zararli mikroorganizmlar o‘rtasidagi muvozanatning buzilishi bo‘lib, bu foydali bakteriyalarning yetishmasligiga olib keladi.`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });
};

export { disbakteriozNimaController };