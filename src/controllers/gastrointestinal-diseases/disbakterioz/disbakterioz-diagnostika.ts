import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅

Najasni bakteriologik tekshirish

Ichak disbakteriozining klinik manzarasi xira bo‘lishi mumkin. Aniq tashxis qo‘yish uchun mutaxassislar quyidagi usullardan foydalanadilar:`, {
        reply_markup: disbakteriozKeyboard(ctx),
    });

};

export { disbakteriozDiagnostikaController };