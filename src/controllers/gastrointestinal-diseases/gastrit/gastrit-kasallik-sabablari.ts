import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅



Gastritning sabablari

O‘tkir gastrit ko‘pincha Helicobacter pylori bakteriyasi keltirib chiqaradigan me’da ichki pardasining yallig‘lanishi tufayli rivojlanadi. O‘tkir gastrit sabablaridan ba’zilari quyidagilar:

Oziq-ovqat toksik infeksiyalari (salmonellez).

Ortiqcha ovqatlanish.

Spirtli ichimliklarni suiiste’mol qilish va chekish.

Shilliq pardaga dorilarning (analgetiklar, sitostatiklar) ta’siri.

Oziq-ovqat allergiyasi.

Stresslar, toliqish, surunkali uyqusizlik.


Surunkali gastrit esa quyidagi omillar tufayli yuzaga keladi:

O‘tkir gastritni yetarli darajada davolamaslik.

Uzoq vaqt davomida ovqatlanish tartibining buzilishi.

O‘tkir va dag‘al ovqatlarni suiiste’mol qilish.

Ovqatni yaxshi chaynamaslik.

Irsiy moyillik.`,
        {
            reply_markup: gastritKeyboard(ctx),
        },
    );
};

export { gastritKasallikSabablariController };