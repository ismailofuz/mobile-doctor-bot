import { MyContext } from '../../../core/bot';
import { gastritKeyboard } from '../../../handlers/keyboard-handlers';

const gastritProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅



Oldini olish

Gastrit profilaktikasi quyidagilarni o‘z ichiga oladi:

Ratsional ovqatlanishga rioya qilish.

Chekish va alkogoldan voz kechish.

Qorin bo‘shlig‘i kasalliklarini o‘z vaqtida davolash.

Yiliga ikki marta gastroenterolog shifokorida muntazam ko‘rikdan o‘tish.


Parhez

Gastritda No1 parhez quyidagilarni istisno qiladi:

Non.

Sho‘rvalar.

Makkajo‘xori va shaftoli yormasi, dukkaklilar.

Yog‘li baliq va go‘sht navlari.

Konservalar.

Nordon sut mahsulotlari.

Gazlangan ichimliklar, choy, qahva, alkogol.

Shokolad va muzqaymoq.`, {
        reply_markup: gastritKeyboard(ctx),
    });
};

export { gastritProfilaktikaController };