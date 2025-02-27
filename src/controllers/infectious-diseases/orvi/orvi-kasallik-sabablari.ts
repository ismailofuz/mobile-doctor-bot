import { MyContext } from '../../../core/bot';
import { orviKeyboard } from '../../../handlers/keyboard-handlers';

const orviKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik sabablari

Asosan, o'tkir respirator kasalliklarning sabablari quyidagilardan iborat:

▪️Viruslar tanaga havo orgali kiradi, shuning uchun bemorning yonida bolish va u bilan aloqa gilish xavflidir;
▪️tananing gipotermiyasi (sovqotish);
▪️immunitetning pasayishi;
▪️Agar ona kasal bo'lsa, chaqaloqlarga O'RVI (ORK) emizish paytida yuqishi mumkin.`,
        {
            reply_markup: orviKeyboard(ctx),
        },
    );
};

export { orviKasallikSabablariController };