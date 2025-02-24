import { MyContext } from '../../core/bot';
import { qizamiqKeyboard } from '../../handlers/keyboard-handlers';

const qizamiqProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Emlashdan keyin qizamiq belgilar
Bolalarning 5-15 foizida vaksina kiritilgandan so‘ng qizamiq belgilar paydo bo‘ladi:

▪️yo‘tal;

▪️burun oqishi;

▪️tana haroratining ko‘tarilishi;

▪️yuzdagi mayda toshma.


Ammo bu bola kasallik yuqtirib olgan degani emas. Barcha alomatlar bir necha kun ichida o‘z-o‘zidan yo‘qoladi. Shu bilan birga, bolani boshqalardan ajratib qo‘yish kerak emas, chunki bu yuqumli emas.

Agar oilada kimdir qizamiq bilan kasallangan bo‘lsa...

Qizamiqqa qarshi chora-tadbirlar
Qizamiqqa qarshi emlangan odamlar kasal odam bilan aloqa qilishdan qo‘rqmasliklari mumkin. Bundan tashqari, ular 100% infeksiyani istisno qilish uchun qizamiqqa qarshi immunoglobulinni yuborish uchun shifokorga murojaat qilishlari mumkin (dori faqat qizamiq bilan kasallangan paytdan boshlab dastlabki 5 kun ichida qo‘llanishi mantiqan to‘g‘ri keladi).

Bunday holda, bemorni birinchi toshmalar paydo bo‘lishining boshlanganidan to‘rtinchi kungacha izolyatsiya qilish kerak. Boshqalar bilan muloqotda u paxta-doka bog‘ich kiyishi kerak. Infeksiyalangan odam alohida idish, sochiq ishlatishi kerak. U tuzalgunga qadar barcha oila a’zolari C va A vitaminlarini qabul qilishlari lozim.

Qizamiqning oldini olish
Aholining ko‘p qismini qizamiq virusini yuqtirishdan saqlaydigan o‘ziga xos profilaktika muntazam emlashdan iborat. Qizamiqqa qarshi birinchi emlash bolaning 12-15 oyligida amalga oshiriladi. Kuchaytiruvchi emlash 6 yoshda amalga oshiriladi.

QQP vaksinasini (qizamiq, qizilcha, parotit) shifokorlar 50 yildan ortiq vaqt mobaynida qo‘llab kelishmoqda. Bugungi kunda uning xavfsizligi va samaradorligi ilmiy jihatdan isbotlangan. Bolaga preparatni yuborish natijasida asoratlar rivojlanish xavfi nolga yaqin. Ommaviy emlash tufayli shifokorlar qizamiqni xavfli patologiyadan oddiy infeksiyaga aylantirishga muvaffaq bo‘lishdi.

Monovaksinalarda zaiflashgan qizamiq virusi mavjud bo‘lib, u kasallikka olib kelishi mumkin emas, ammo tanani uning qo‘zg‘atuvchisi bilan tanishtiradi. Natijada antitanachalar ishlab chiqarila boshlaydi, immunitet hosil bo‘ladi. Agar kelajakda emlangan odam virus bilan uchrashsa, u endi yuqtirmaydi. Agar qizamiqqa qarshi emlash bolalik davrida amalga oshirilmagan bo‘lsa, uni kattalik chog‘ida qilish mumkin.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
};

export { qizamiqProfilaktikaController };