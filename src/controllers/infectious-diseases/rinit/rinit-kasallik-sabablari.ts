import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Sabablari

O‘tkir rinit burun shilliq pardasining yallig‘lanishi tufayli boshlanadi. Asosiy sabablar:

▪️O‘ta sovitish;

▪️Tez-tez uchraydigan virusli infeksiyalar;

▪️Burun shilliq qavati jarohatlari;

▪️Changli yoki tutunli xonalarda bo‘lish.`,
        {
            reply_markup: rinitKeyboard(ctx),
        },
    );
};

export { rinitKasallikSabablariController };