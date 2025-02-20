import { MyContext } from '../../core/bot';
import { suvchechakKeyboard } from '../../handlers/keyboard-handlers';

const suvchechakKasallikSabablariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Suvchechakni tashqi muhitga chidamsiz bo'lgan Varicella Zoster virusi chaqiradi. Infeksiya havo-tomchi yo'li bilan va transplatsentar yo'l bilan yuqadi.

Asosiy jihatlar:

▪️Infeksiya manbai: toshma paydo bo'lishidan 2 kun oldin va 5 kun o'tgach kasallangan odamlar.

▪️Kontaktdan yuqadigan kasallik kam uchraydi, lekin uni istisno qilib bo'lmaydi.

▪️Ko'pincha bolalar kasallanadi, yangi tug'ilgan chaqaloqlar antitelolar bilan himoyalangan boladi.

▪️Patogenezi: virus nafas yollariga o'tadi, limfa tugunlari va qon orqali tarqaladi, terida pufakchalar paydo qiladi.`,
        {
            reply_markup: suvchechakKeyboard(ctx),
        },
    );
};

export { suvchechakKasallikSabablariController };