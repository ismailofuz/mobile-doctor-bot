import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik belgilari✅


▪️Meteorizm

▪️Qorin og‘rig‘i

▪️Teridagi toshmalar

▪️Bosh og‘rig‘i

▪️Og‘iz burchagidagi yaralar

▪️Najasni bo‘shatishning buzilishi

▪️Og‘izda yoqimsiz ta’m

▪️Umumiy zaiflik

▪️Yomon uyqu

▪️Ishtahaning pasayishi

▪️Teri qurug‘ligi

▪️Shilliq qavatning qurug‘ligi

▪️Qusadigan ko‘ngil aynish`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });
};

export { disbakteriozKasallikBelgilariController };