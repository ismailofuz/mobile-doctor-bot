import { MyContext } from '../../../core/bot';
import { suvchechakKeyboard } from '../../../handlers/keyboard-handlers';

const suvchechakKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Davolash

Bolalar va kattalardagi suvchechakni davolash quyidagilarni o'z ichiga oladi:

5-7 kun davomida yotoq rejimi. Parhez: qovurilgan, achchiq va tuzlangan ovqatlarni istisno qiling.
Ko'p ichimliklar: suv, mors, kompot, o'tli qaynatmalar, shakarsiz choy.

Gigiyena:

▪️Dushni mochalkasiz oling, terini sochiq bilan namlang.

▪️Yotoq va ichki kiyimlarni har kuni almashtirish.

▪️Og'izni iliq suv yoki antiseptiklar bilan kuniga 3 marta chayish.

Zarur hollarda issiqni tushiruvchi preparatlar.

Vezikulalarga antiseptiklar bilan ishlov berish:

Kalamin, Fukorsin, ko'kat.

Antigistamin preparatlar.

Og'ir kechishida virusga qarshi vositalar.

Vitaminoterapiya.

Karantin: vezikulalar paydo bo'lganidan keyin 5-9 kun va oxirgi pufakchadan keyin 5 kun, jami taxminan 14 kun`, {
        reply_markup: suvchechakKeyboard(ctx),
    });

};

export { suvchechakKasallikniDavolashController };