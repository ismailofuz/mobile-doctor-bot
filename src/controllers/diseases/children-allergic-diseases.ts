import { MyContext } from '../../core/bot';
import {
    allergicDiseasesKeyboard,
} from '../../handlers/keyboard-handlers';

const childrenAllergicDiseasesController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    ctx.session.step = 'allergic_diseases';
    const message = await ctx.reply(`❗️Allergik kasalliklar`, {
        reply_markup: allergicDiseasesKeyboard(ctx),
    });
    ctx.session.message_id = message?.message_id;

};
export { childrenAllergicDiseasesController };