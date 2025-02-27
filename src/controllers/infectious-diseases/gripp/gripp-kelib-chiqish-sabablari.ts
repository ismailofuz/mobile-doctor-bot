import { MyContext } from '../../../core/bot';
import { grippKeyboard } from '../../../handlers/keyboard-handlers';

const grippKelibChiqishSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Gripp — keng tarqalgan, xavfli va og‘ir yuqumli kasallik bo‘lib, havo tomchilari orqali yuqadi. Bunga gripp virusi sabab bo‘ladi. Gripp bilan ommaviy kasallanishlar davriy ravishda sodir bo‘lib, epidemiyaga aylanadi.

Kelib chiqish sabablari

Kasallik burun, tomoq va o‘pkaning shikastlanishi bilan tavsiflanadi. Gripp ko‘pincha qish faslida tarqaladi.

Grippning asosiy sabablari:

▪️kasallikning virusli qo‘zg‘atuvchilari mavjud bo‘lgan havo orqali yuqishi;

▪️bemor bilan aloqada bo‘lgan narsalar orqali yuqish.`, {
        reply_markup: grippKeyboard(ctx),
    });
};

export { grippKelibChiqishSabablariController };