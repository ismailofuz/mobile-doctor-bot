import { MyContext } from '../../core/bot';
import { suvchechakKeyboard } from '../../handlers/keyboard-handlers';

const suvchechakTurlariController = async (ctx: MyContext) => {

    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Suvchechak (Shamolchechak) - gerpes oilasiga mansub Varicella Zoster virusi keltirib chiqaradigan o'tkir virusli kasallik. Asosiy belgilari teri va shilliq pardalarda tiniq suyuqlik pufakchalari paydo bo'lishini o'z ichiga oladi. Kasallikdan keyin umrbod immunitet paydo bo'ladi, ammo immunitet zaiflashganida, kasallik qaytadan yuqishi mumkin va virus faollashib, belbog'li lishayni keltirib chiqarishi mumkin.
Kasallik shakllari:
Odatiy:

▪️Yengil: kichik toshma, harorat 37-38°C, 2-3 kun davom etadi.

▪️O'rtacha og'irlik: teri va shillia qavatlarga toshma toshishi, harorat 38-39°C, bosh og'rig'i.

▪️Og'ir: yirik pufakchalar, harorat 39°C dan yuqori, talvasalar bo'lishi mumkin.

Atipik:

▪️Rudimentar: kichik pufakchalar, ko'pincha emlangan yoki yangi tug'ilgan chaqaloqlarda.

▪️Tarqalgan: virus ichki organlarni zararlaydi, tana harorati yuqori, bosh og'rig'i, qusish.

▪️Gemorragik: qonli pufakchalar, qon ketish.

▪️Gangrenoz: yaralar, sepsisning yuqori ehtimoli.`, {
        reply_markup: suvchechakKeyboard(ctx),
    });

};

export { suvchechakTurlariController };