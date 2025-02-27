import { MyContext } from '../../../core/bot';
import { qizamiqKeyboard } from '../../../handlers/keyboard-handlers';

const qizamiqKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kasallik sabablari✅

Qizamiq Morbillivirus turiga RNK-virusni keltirib chiqaradi. Tashqi muhitda u beqaror – to‘g‘ridan-to‘g‘ri quyosh nuri ta’sirida, 50°C gacha qizdirilganda, quritilganda yo‘q bo‘ladi. Xona haroratida virus 1-2 kun davomida yashaydi.

Qizamiq virusining manbai kasallangan odamdir. U inkubatsiya davrining 1-2 kunida (toshmalarning 4 kunigacha) atrofdagi odamlarga yuqtirishni boshlaydi. Ba’zi hollarda yuqumli kasallik ekzantema paydo bo‘lgan paytdan boshlab 10 kungacha cho‘ziladi.

Qizamiq havo tomchilari orqali yuqadi (aerozol mexanizmi). Infeksiyalangan odam aksirish, yo‘talish, suhbat paytida atrof-muhitga o‘tkir infeksiyaning qo‘zg‘atuvchisini tarqatadi. Havo oqimi bilan xona bo‘ylab nozik dispers suspenziya tarqaladi. Agar homilador ayol kasallikka chalingan bo‘lsa, uni homilaga yuqtirishi mumkin (transplasentar yuqish yo‘li).

Hamma odamlar qizamiqqa moyil. Uni boshdan o‘tkazgandan so‘ng, umrbod immunitet rivojlanadi. Ko‘pincha patologiya bolalikda paydo bo‘ladi. Kattalar kamdan-kam hollarda qizamiq bilan og‘riydilar va bolalarga qaraganda yengilroq o‘tkazadilar.

Kasallik qish va bahorda avj oladi. Avgust va sentyabr oylarida infeksiya juda kam uchraydi.

Kasallik rivojlanishining patogenezi

Morbillivirus oilasining RNK-virusi tanaga kirib, yuqori nafas yo‘llarining shilliq pardalarini chetlab o‘tadi. U epiteliy hujayralarida ko‘payadi va qon oqimi bilan tarqaladi.

Qizamiq ko‘n’yunktivaga, teri, og‘iz va nafas yo‘llarining shilliq pardalariga eng kuchli ta’sirini ko‘rsatadi. Ba’zida u miyaga ta’sir qiladi, u holatda qizamiq ensefaliti rivojlanadi. Qizamiq virusidan ta’sirlangan shilliq nafas olish tizimining epiteliyasi nekrozga uchrashi mumkin. Natijada bakterial infeksiya qo‘shilish xavfi ortadi.

Kasallikning qo‘zg‘atuvchisi inson tanasida juda uzoq vaqt saqlanib qolishi mumkin, bu jiddiy tizimli kasalliklarning paydo bo‘lishiga olib keladi – qizil tizimli Lupus, sklerodermiya, skleroz.`,
        {
            reply_markup: qizamiqKeyboard(ctx),
        },
    );
};

export { qizamiqKasallikSabablariController };