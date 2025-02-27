import { MyContext } from '../../../core/bot';
import { grippKeyboard } from '../../../handlers/keyboard-handlers';

const grippKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari

Gripp quyidagi belgilar bilan namoyon bo‘ladi:

▪️yuqori harorat (40 darajagacha);

▪️bosh og‘rig‘i;

▪️bo‘g‘imlardagi og‘riqlar;

▪️kuchli terlash;

▪️tomoq og‘rig‘i;

▪️ko‘krak qismida og‘riq;

▪️burun bitishi;

▪️burun shilliq qavatida qurish;

▪️yo‘tal.


Agar grippning og‘ir shakli bo‘lsa:

▪️o‘qish va qusish;

▪️burundan qon ketishi;

▪️hushdan ketish;

▪️alahsirash.`, {
        reply_markup: grippKeyboard(ctx),
    });
};

export { grippKasallikBelgilariController };