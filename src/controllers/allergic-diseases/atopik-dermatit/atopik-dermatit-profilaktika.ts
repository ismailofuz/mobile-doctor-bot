import { MyContext } from '../../../core/bot';
import {
    atopikDermatitKeyboard,
    diareyaKeyboard,
    disbakteriozKeyboard,
    gastritKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const atopikDermatitProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅

Profilaktika (Oldini olish choralari)

Diareyaning oldini olish uchun quyidagi gigiyena qoidalariga amal qilish lozim:

Qo‘llarni ovqatdan oldin va keyin yaxshilab yuvish.

Qaynatilmagan suvni ichmaslik.

Muddati o‘tgan yoki buzilgan oziq-ovqat mahsulotlarini iste’mol qilmaslik.

Sabzavot va mevalarni ovqatga ishlatishdan oldin yaxshilab yuvish.


 Parhez✅

To‘rtinchi raqamli parhez buyuriladi. Ko‘p miqdorda suv, qaynatilgan guruch, qaynatma sho‘rvalar, dimlab pishirilgan sabzavotlar va mevalar tavsiya etiladi, nonni quritib, qoqnon ko‘rinishida yeyish tavsiya etiladi. Yog‘li, qovurilgan, sho‘r oziq-ovqat mahsulotlari, xom meva va sabzavotlarni iste’mol qilish taqiqlanadi.`, {
        reply_markup: atopikDermatitKeyboard(ctx),
    });
};

export { atopikDermatitProfilaktikaController };