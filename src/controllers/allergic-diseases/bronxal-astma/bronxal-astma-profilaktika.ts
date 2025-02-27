import { MyContext } from '../../../core/bot';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅

Profilaktika

Bronxial astma rivojlanishining oldini olish uchun shifokorlarning tavsiyalari:

kamharakat turmush tarzini olib bormang, ko‘proq vaqtingizni uyda emas, toza havoda o‘tkazing;

allergiya keltirib chiqaradigan oziq-ovqatlarni iste’mol qilmang;

davolovchi mashqlar darslarida qatnashing;

atrof-muhitni zaharlaydigan qo‘zg‘atuvchilardan saqlaning (masalan, tamaki tutuni).`, {
        reply_markup: bronxalAstmaKeyboard(ctx),
    });
};

export { bronxalAstmaProfilaktikaController };