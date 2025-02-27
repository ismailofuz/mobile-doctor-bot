import { MyContext } from '../../../core/bot';
import { allergikRinitKeyboard, disbakteriozKeyboard, grippKeyboard } from '../../../handlers/keyboard-handlers';

const allergikRinitProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika
Shifokorlar quyidagi profilaktika choralarini tavsiya qiladilar:

• allergiya qo zg'atuvchilar bilan aloqada bo lmaslik;
• yozda ochiq havoda harakat qilishni cheklash (agar o simlik changiga allergiya bo'lsa);
• haftasiga kamida bir marta uyda nam tozalashni amalga oshirish;
• shampunlar, cho milish uchun gellar, kremlar va boshqa kosmetika vositalarini ishlatishdan oldin, allergik reaksiyani tekshirish uchun ularni tirsakning bukiladigan joyiga surtib ko rish;
• to'g'ri ovqatlanish.

Parhez
Kasallikni davolash paytida shifokor bemorga ma'lum bir parhezni belgilaydi, bu parhez quyidagi oziq-ovqatlarni iste'mol qilishni istisno qiladi:

• tovuq go shti, tovuq tuxumi;
• mevalar (ayniqsa, sitrus mevalar);
• asal va u bilan bog'liq mahsulotlar;
• bo'yoqlar va oziq-ovqat qo'shimchalari bo'lgan yeguliklar va suyuqliklar.`, {
        reply_markup: allergikRinitKeyboard(ctx),
    });
};

export { allergikRinitProfilaktikaController };