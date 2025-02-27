import { MyContext } from '../../../core/bot';
import { rinitKeyboard } from '../../../handlers/keyboard-handlers';

const rinitKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Rinit (burun oqishi)ni davolash

Rinitni davolash quyidagilarni o‘z ichiga oladi:

▪️Ko‘p ichimlik;

▪️Burunni yuvish;

▪️Dori surtmalari va tomchilari;

▪️Tomirlarni toraytiruvchi tomchilar;

▪️Burun sohasining UYUCH-terapiyasi;

▪️Ingalyatsiyalar.

Surunkali rinit uchun quyidagilar buyurilishi mumkin:

▪️Kuydirish;

▪️Burun chig‘anoqlari tomirlarining ultratovushli dezintegratsiyasi;

▪️Krioterapiya.`, {
        reply_markup: rinitKeyboard(ctx),
    });

};

export { rinitKasallikniDavolashController };