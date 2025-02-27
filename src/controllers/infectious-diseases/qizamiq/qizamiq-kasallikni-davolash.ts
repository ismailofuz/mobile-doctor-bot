import { MyContext } from '../../../core/bot';
import { qizamiqKeyboard } from '../../../handlers/keyboard-handlers';

const qizamiqKasallikniDavolashController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Qizamiqni davolash

Qizamiq bilan kasallangan bemorlar kasalxonaga yotqiziladi, ammo aksariyat hollarda ambulator sharoitida davolanish yetarli. Isitma davrida yotish qat’iy buyuriladi. Umuman olganda, qizamiqni davolash asoratlarni rivojlanishiga yo‘l qo‘ymaslik va simptomlarni engillashtirishga qaratilgan. Bugungi kunda samarali etiopropik terapiya mavjud emas.

Tanadan toksinlarni olib tashlashni tezlashtirish uchun ko‘p miqdorda suyuqlik ichish kerak. Shuningdek, bemorlarga yorqin nurdan saqlanish, ko‘z va og‘iz gigiyenasini diqqat bilan kuzatib borish tavsiya etiladi. Issiqni tushiruvchi vositalar va antigistaminlar, adaptogenlar, vitaminlar va interferon simptomatik va patogenetik davolash usullari sifatida ishlatilishi mumkin.

Qizamiqni davolashning xalq usullari

Uyda qizamiq bilan kasallanganlar an’anaviy tibbiyot retseptlariga murojaat qilishlari mumkin:

Petrushka ildizlari (yangi yoki quruq) maydalanadi va qaynoq suv quyiladi. 3 soat kutib, kuniga 3-4 marta 100 ml dan ichiladi. Bu vosita toshmalarni kamaytirishga yordam beradi.

Quritilgan malina damlamasi:
1 osh qoshiq quritilgan malinaga 1 stakan qaynoq suv quyiladi. 30 daqiqa tindiriladi. Kuniga 2-3 marta 20 ml ichiladi. Asal qo‘shish ham mumkin. Bu vosita immunitetni oshirib, tana haroratini me’yorga keltirishga yordam beradi.

Lipa gullari damlamasi:
1 osh qoshiq lipa gullariga 1 stakan qaynoq suv quyiladi va suv hammomida 10 daqiqa ushlab turiladi. Ovqatdan oldin kuniga 2 marta ½ chashka ichiladi. Bu damlama intoksikatsiya alomatlarini engillashtirib, yo‘talni davolaydi va isitmani pasaytiradi.

Binafsha gullari damlamasi:
2 osh qoshiq quritilgan binafsha gullari termosga solinadi, 400 ml qaynoq suv quyiladi va 2 soat tindiriladi. Kun davomida ovqatdan oldin ichish tavsiya etiladi. Ushbu damlama kasallik tarqalishini kamaytirish, qonni tozalash va bosh og‘rig‘ini yo‘qotishga yordam beradi.

Kalina gullari damlamasi:
1 osh qoshiq kalina gullariga 1 stakan qaynoq suv quyiladi, termosda 4 soat saqlanadi. Kuniga 3 marta 3-4 osh qoshiqdan ichiladi. Ushbu damlama C vitaminiga boy bo‘lib, yallig‘lanishga qarshi xususiyatlari bilan ajralib turadi.


Oziq-ovqat tavsiyalari

Qizamiqni davolash davrida bemor ko‘proq meva va sabzavotlarni iste’mol qilishi kerak. Go‘shtli bulyonlar, donli sabzavotli sho‘rvalarga ruxsat beriladi.

Ovqatning juda issiq yoki sovuq emas, iliq bo‘lishi muhim, chunki aks holda tomoq og‘rig‘i kuchayishi mumkin.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });

};

export { qizamiqKasallikniDavolashController };