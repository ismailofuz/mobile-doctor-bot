import { MyContext } from '../../core/bot';
import { childrenDiseasesKeyboard } from '../../handlers/keyboard-handlers';

const childrenDiseasesController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    ctx.session.step = 'child';
    const message = await ctx.reply(`❗️Bolalarda eng ko'p tarqalgan kasalliklar`, {
        reply_markup: childrenDiseasesKeyboard(ctx),
    });

    ctx.session.message_id = message?.message_id;
};

export { childrenDiseasesController };
