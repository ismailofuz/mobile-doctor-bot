import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Diareya belgilari

Suyuqlangan axlat – diareyaning eng asosiy belgisidir. Shuningdek, kasallikka quyidagi belgilar ham xos:

Qorin og‘rig‘i, sanchiq;

Meteorizm (ichakda gaz to‘planishi);

Ko‘ngil aynishi, qusish;

Varaja (tez-tez hojatga chiqish istagi);

Defekatsiya bo‘lgan soxta intilish.`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });
};

export { atopikDermatitKasallikBelgilariController };