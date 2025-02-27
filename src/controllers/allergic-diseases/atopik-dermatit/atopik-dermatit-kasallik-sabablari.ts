import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅

Atopik dermatit sabablari

Atopik dermatit kattalar va bolalarda quyidagi sabablarga ko‘ra paydo bo‘lishi mumkin:

Irsiyat (agar yaqin qarindoshlarda kasallik mavjud bo‘lsa, xavf yuqori bo‘ladi);

Yomon ekologiya;

Tez-tez stresslar;

Sifatsiz mahsulotlarni iste’mol qilish;

Immunitetning pasayishi.`,
        {
            reply_markup: atopikDermatitKeyboard(ctx),
        },
    );
};

export { atopikDermatitKasallikSabablariController };