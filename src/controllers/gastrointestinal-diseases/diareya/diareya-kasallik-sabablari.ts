import { MyContext } from '../../../core/bot';
import {
    diareyaKeyboard,
} from '../../../handlers/keyboard-handlers';

const diareyaKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅

Diareyaning turlari

Osmolyar shakli: oshqozon osti bezining fermentativ funksiyasi buzilganda, shuningdek, organizmga rotavirus infeksiyasi tushganda yuzaga kelishi mumkin. Kasallikning bu shakli bolalar orasida eng keng tarqalgan.
Ichak faoliyatini buzadigan stressdan kelib chiqqan diareya shakli ham mavjud.

Sekretor shakli: surgi vositalardan tez-tez yoki ko‘p miqdorda foydalanilganda kelib chiqadi. Shuningdek, turli xil zaharlar yoki vabo vibrionlari (bakteriyalari) ham diareyaning ushbu turini keltirib chiqarishi mumkin.
Bunday diareya och rangli suyuq axlat bilan xarakterlanadi, u hidsiz bo‘ladi va tarkibida qon, yiring bo‘lmaydi.

Ekssudativ shakli: ichak infeksiyalari, masalan, dizenteriya va salmonellyoz, gijjalar, Kron kasalligi, oshqozon yarasi koliti, oshqozon-ichak tizimi kasalliklari sabab bo‘ladi.
Axlat miqdori ko‘p bo‘lmay`,
        {
            reply_markup: diareyaKeyboard(ctx),
        },
    );
};

export { diareyaKasallikSabablariController };