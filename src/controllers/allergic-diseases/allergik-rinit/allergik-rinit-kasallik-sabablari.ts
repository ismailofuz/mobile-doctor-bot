import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Burun shilliq qavatining shishishi tufayli rinit paydo bo‘ladi. Kasallikni qo‘zg‘atuvchi asosiy sabablar – allergiya uyg‘otuvchilar bo‘lib, ulardan eng tarqalgani:

O‘simlik changchilari, chang, uy hayvonlari tuklari,

Kimyoviy moddalar, dori vositalari,

Zamburug‘lar.


Bu kasallik nasldan naslga o‘tadi. Bolalarda bu kasallik immunitetning zaiflashishi tufayli yuzaga keladi.`,
        {
            reply_markup: allergikRinitKeyboard(ctx),
        },
    );
};

export { allergikRinitKasallikSabablariController };