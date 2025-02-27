import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅


Gastrit belgilari

Gastritning asosiy simptomlari quyidagilardan iborat:

Meteorizm (qorinda gaz to‘planishi).

Ko‘ngil aynishi.

Qorinning yuqori qismida og‘riq.

Kekirish.

Qusish.

Keskin vazn yo‘qotish.`, {
        reply_markup: gastritKeyboard(ctx),
    });
};

export { gastritKasallikBelgilariController };