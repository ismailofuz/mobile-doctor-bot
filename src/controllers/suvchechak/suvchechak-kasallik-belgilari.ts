import { MyContext } from '../../core/bot';
import { suvchechakKeyboard } from '../../handlers/keyboard-handlers';

const suvchechakKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Bolalar va kattalardagi suvchechak belgilari

Suvchechakning inkubatsiya davri 11-21 kun davom etadi. Shundan song quyidagi alomatlar paydo boladi:

▪️Bosh og'rig'i

▪️Uyqusizlik

▪️Qichishish

▪️Umumiy zaiflik

▪️Umumiy darmonsizlik

▪️Tana haroratining ko'tarilishi

▪️Teridagi toshma

▪️Shillia qavatlardagi toshma

▪️Ishtaha pasayishi

Dastiab tugunchalari (papulalari) bo'lgan qizil dog'lar hosil bo ladi, ular pufakchalarga (vezikulalarga) aylanadi. Keyin bu pufakchalar quriydi va po'stloq bilan qoplanadi. Jarayon 5-9 kun davom etib, har 1-2 kunda toshmaning yangi elementlari paydo boladi.

Toshmaning tarqalishi infeksiya va chandiqlarga olib kelishi mumkin. Shilliq pardadagi vezikulalar
3-5 kunda bitadi.`, {
        reply_markup: suvchechakKeyboard(ctx),
    });
};

export { suvchechakKasallikBelgilariController };