import { MyContext } from '../../core/bot';
import {
    infectiousDiseasesKeyboard,
} from '../../handlers/keyboard-handlers';

const childrenInfectiousDiseasesController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'infectious_diseases';
    const message = await ctx.reply(`❗️Yuqumli kasalliklar`, {
        reply_markup: infectiousDiseasesKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;

};
export { childrenInfectiousDiseasesController };