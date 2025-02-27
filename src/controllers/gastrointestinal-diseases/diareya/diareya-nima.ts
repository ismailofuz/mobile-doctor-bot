import { MyContext } from '../../../core/bot';
import {
    diareyaKeyboard,
} from '../../../handlers/keyboard-handlers';

const diareyaNimaController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Diareya nima✅

Diareya xalq orasida ichog‘riq, ich ketishi nomlari bilan ataladigan xastalik bo‘lib, ichak yo‘llarining funksional buzilishi hisoblanib, ichaklarni tez-tez bo‘shatish va ichning suyuq holatda kelishi bilan kechadi. Diareya bilan kattalar ham, bolalar ham kasallanishi mumkin.`, {
        reply_markup: diareyaKeyboard(ctx),
    });
};

export { diareyaNimaController };