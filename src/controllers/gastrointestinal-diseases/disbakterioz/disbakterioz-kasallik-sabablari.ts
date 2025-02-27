import { MyContext } from '../../../core/bot';
import { disbakteriozKeyboard } from '../../../handlers/keyboard-handlers';

const disbakteriozKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅

▪️Sabablari

▪️Disbakteriozning ko‘plab sabablari mavjud, jumladan:

▪️oshqozon-ichak trakti kasalliklari (kolit, xoletsistit, pankreatit, anatsid gastrit va boshqalar);

▪️infeksiyalar va parazitlar;

▪️ORVI;

▪️allergiya;

▪️nosog‘lom ovqatlanish;

▪️stress;

▪️dorilarni qabul qilish (antibiotiklar, sulfanilamidlar, gistaminoblokatorlar, immunodepressantlar, sil statiklari, antatsidlar, bo‘shashtiruvchi, tarkibida gormonlar bo‘lgan va nosteriod yallig‘lanishga qarshi preparatlar);

▪️kimyoterapiya va nur terapiyasi;

immunitet tanqisligi holati.`,
        {
            reply_markup: disbakteriozKeyboard(ctx),
        },
    );
};

export { disbakteriozKasallikSabablariController };