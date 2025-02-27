import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari

Xavf

Ichak disbakteriozida ichak devori allergenlar va toksinlarga o‘ta sezuvchan bo‘lib qoladi, bu jigar va oshqozon osti bezi faoliyatini yomonlashtirishi, shuningdek, vitaminlar va mikroelementlarning so‘rilishini pasaytirishi mumkin. Bu holat quyidagi muammolarni keltirib chiqarishi mumkin:

▪️allergiya;

▪️oshqozon-ichak tizimi kasalliklari;

▪️kariyes;

biriktiruvchi to‘qima kasalliklari.`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });
};

export { disbakteriozXavfliJihatlariController };