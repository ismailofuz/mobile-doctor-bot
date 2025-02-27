import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritKasallikTurlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Kasallik turlari✅


Gastrit

Gastrit me’da shilliq pardasining yallig‘lanishi bilan ta’riflanadigan kasallikdir. Gastritning o‘tkir va surunkali xillari tafovut qilinadi. Bolalarda gastrit ko‘pincha organizmning intensiv o‘sish davrida, masalan, 5-6 va 9-12 yoshda rivojlanadi.

Gastrit turlari:

Yuzaki: faqat shilliq qavatning yallig‘lanishi.

Eroziv: shilliq qavatdagi eroziyalar.

Atrofik: shilliq qavatning kichrayishi.

Flegmonoz: me’daning barcha qavatlarining yallig‘lanishi, ko‘pincha yara yoki saraton tufayli.`, {
        reply_markup: gastritKeyboard(ctx),
    });
};

export { gastritKasallikTurlariController };