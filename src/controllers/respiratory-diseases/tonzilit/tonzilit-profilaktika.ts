import { MyContext } from '../../../core/bot';
import {
    tonzillitKeyboard,
} from '../../../handlers/keyboard-handlers';

const tonzilitProfilaktikaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Profilaktika✅

Shaxsiy gigiyenaga rioya qilish
Immunitetni mustahkamlash
Kasallangan odamlar bilan aloqani cheklash
Sog‘lom ovqatlanish va yetarli dam olish
Agar tonzillit tez-tez takrorlansa yoki asoratlar yuzaga kelsa, shifokor bodomcha bezlarini olib tashlash (tonsillektomiya) operatsiyasini tavsiya qilishi mumkin.`, {
        reply_markup: tonzillitKeyboard(ctx),
    });
};

export { tonzilitProfilaktikaController };