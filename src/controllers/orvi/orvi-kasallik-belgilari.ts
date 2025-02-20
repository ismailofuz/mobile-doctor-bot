import { MyContext } from '../../core/bot';
import { orviKeyboard } from '../../handlers/keyboard-handlers';

const orviKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari

Kasallikning belgilari quyidagicha:

▪️burun va tomoq bo‘shlig‘ida yoqimsiz tuyg‘ular;
▪️umumiy holatning yomonligi;
▪️ishtahaning yo‘qolishi;
▪️ko‘ngil aynishi;
▪️o‘qchish va qusish;
▪️yo‘tal;
▪️aksirish;
▪️bosh og‘rig‘i;
▪️"tirnash"ga o‘xshaydigan tomoq og‘rig‘i;
▪️burun bitishi, burun oqishi;
▪️tana haroratining biroz ko‘tarilishi;
▪️varaja;
▪️mushaklar va bo‘g‘imlarda og‘riq;
▪️konyunktivit (ba'zan).`, {
        reply_markup: orviKeyboard(ctx),
    });
};

export { orviKasallikBelgilariController };