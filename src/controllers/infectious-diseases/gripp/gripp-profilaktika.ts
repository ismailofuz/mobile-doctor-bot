import { MyContext } from '../../../core/bot';
import { grippKeyboard } from '../../../handlers/keyboard-handlers';

const grippProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika

Kattalar va bolalarda kasallikning oldini olish uchun quyidagilarga rioya qilish lozim:

▪️grippga qarshi mavsumiy emlanish (mushak ichiga yuboriladigan ineksiya yoki tomchi dori shaklida bo‘ladi);

▪️maxsus dori vositalari bilan immunitetni mustahkamlash;

▪️vitamin C ichish;

▪️gripp avj olgan paytlarda odamlar ko‘p to‘planadigan joylarga bormaslik;

▪️uylarni doimiy ravishda shamollatib turish;

▪️bemor bilan bog‘lanish zarurati tug‘ilsa, himoya niqobini taqish.`, {
        reply_markup: grippKeyboard(ctx),
    });
};

export { grippProfilaktikaController };