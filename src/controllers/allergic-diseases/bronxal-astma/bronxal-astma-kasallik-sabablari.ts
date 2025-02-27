import { MyContext } from '../../../core/bot';
import {
    allergikRinitKeyboard,
    bronxalAstmaKeyboard,
    disbakteriozKeyboard,
    grippKeyboard,
} from '../../../handlers/keyboard-handlers';

const bronxalAstmaKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Kelib chiqish sabablari✅


Sabablari

Kasallik bronxlar yallig‘lanish, shish yoki balg‘am quyqalari tufayli torayib ketganda paydo bo‘ladi.

Astma turli sabablarga ko‘ra paydo bo‘lishi mumkin:

irsiy moyillik;

allergiya (chang va gulchanglar, hayvon junlari, oziq-ovqat va kimyoviy moddalarga nisbatan);

noqulay muhit (tamaki tutuni, bezovta qiluvchi gazlar);

bakterial va virusli turdagi infeksiyalar (bronxit, gripp);

dori vositalari (yallig‘lanishga qarshi, harorat tushiruvchi, og‘riq qoldiruvchi vositalar);

stress, qo‘rquv, boshqa hissiy kechinmalar;

me’yoridan ortiq jismoniy faollik.`,
        {
            reply_markup: bronxalAstmaKeyboard(ctx),
        },
    );
};

export { bronxalAstmaKasallikSabablariController };