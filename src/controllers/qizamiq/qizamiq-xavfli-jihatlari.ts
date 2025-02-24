import { MyContext } from '../../core/bot';
import { qizamiqKeyboard } from '../../handlers/keyboard-handlers';

const qizamiqXavfliJihatlariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);
    await ctx.reply(`Xavfli jihatlari✅


Qizamiq nima uchun xavfli?

Ko'pincha qizamiq bakterial pnevmoniyaga aylanib ketadi. 1 yoshdan 3 yoshgacha bo'lgan bolalarda bu laringit, bronxit, asfiksiya, stomatitga olib kelishi mumkin. Kattalardagi kasallik meningit, polinevrit, meningoensefalitni keltirib chiqaradi. Kasallikning kamdan-kam uchraydigan, ammo xavfli asoratlari – bu qizamiq ensefaliti.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
};

export { qizamiqXavfliJihatlariController };