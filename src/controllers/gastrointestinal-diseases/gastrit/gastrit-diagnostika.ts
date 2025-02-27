import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritDiagnostikaController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diagnostika✅


Diagnostika

Biopsiya

Oshqozonni UZI qilish

Qorin bo‘shlig‘i rentgeni

Umumiy qon tekshiruvi


Gastritni tashxislash uchun gastroenterolog shifokor quyidagilarni buyurishi mumkin:

Oshqozonning ultratovush tekshiruvi.

Ezofagogastroduodenoskopiya (gastroskop yordamida oshqozonni tekshirish).

Me’da shilliq qavatining biopsiyasi.

Oshqozon sekretsiyasini tekshirish.

Qonning klinik tahlili.

Qorin bo‘shlig‘i rentgenografiyasi.


To‘liq tashxisni zamonaviy gastroenterologiya markazida o‘tkazish mumkin.`, {
        reply_markup: gastritKeyboard(ctx),
    });

};

export { gastritDiagnostikaController };