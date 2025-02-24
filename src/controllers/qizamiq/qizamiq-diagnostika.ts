import { MyContext } from '../../core/bot';
import { qizamiqKeyboard } from '../../handlers/keyboard-handlers';

const qizamiqDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅


Kasallikni tashxislash

Shifokor kasallikning klinik ko‘rinishini sinchkovlik bilan o‘rganib, to‘g‘ri tashxis qo‘yishi mumkin. Shuningdek, bemorga quyidagilar buyurilishi mumkin:

Umumiy qon tekshiruvi.

Retrospektiv xarakterga ega serologik va bakteriologik tadqiqotlar.

O‘pka rentgenografiyasi (agar pnevmoniyaga shubha qilingan bo‘lsa).

Lumbal punksiya (agar meningit rivojlanish xavfi yuqori bo‘lsa).


Agar bemorda qizamiq fonida nevrologik kasalliklar bo‘lsa, u nevrologga uchrashi va miya EEG va reoensefalografiyadan o‘tishi kerak.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
};

export { qizamiqDiagnostikaController };