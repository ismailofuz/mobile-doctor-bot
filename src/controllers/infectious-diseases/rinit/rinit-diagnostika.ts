import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika

▪️Rinoskopiya

▪️Allergik tekshiruvlar

▪️Burun bakteriologik bakposev

▪️Umumiy qon tekshiruvi

Shunga o‘xshash alomatlar sinusit va O‘RVI kabi burun va burun-halqumning boshqa kasalliklarida ham kuzatilishi mumkin. Rinitni aniq tashhislash va davolashni tayinlash uchun otolaringolog shifokor quyidagilarni buyurishi mumkin.`, {
        reply_markup: rinitKeyboard(ctx),
    });

};

export { rinitDiagnostikaController };