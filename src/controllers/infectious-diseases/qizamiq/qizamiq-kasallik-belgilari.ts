import { MyContext } from '../../../core/bot';
import { qizamiqKeyboard } from '../../../handlers/keyboard-handlers';

const qizamiqKasallikBelgilariController = async (ctx: MyContext) => {
    await ctx.deleteMessages([ctx.session?.message_id as number]);
    await ctx.deleteMessages([ctx.message?.message_id as number]);

    await ctx.reply(`Qizamiq belgilari

Qizamiqning inkubatsiya davri 1-2 haftagacha. Agar bemorga immunoglobulin yuborilgan bo‘lsa, u 3-4 haftagacha cho‘zilishi mumkin. Qizamiqning tipik shakli uchta ketma-ket bosqichni chetlab o‘tadi:

Kataral davr. Bu tana haroratining keskin ko‘tarilishi, aniq umumiy intoksikatsiya belgilari bilan boshlanadi. Bemor kuchli bosh og‘rig‘ini boshdan kechiradi, uyqusizlik va zaiflikdan aziyat chekadi. Intoksikatsiya alomatlariga quruq yo‘tal qo‘shiladi. Konyunktivit kuzatilishi mumkin (ko‘z qovoqlari juda shishib ketadi). Auskultatsiya paytida (o‘pkani tinglash) shifokor quruq xirillash va qattiq nafas olishni qayd etadi. Ba’zi hollarda tipik qizamiqning kataral davri qusish, ko‘ngil aynish, kekirish, jig‘ildon qaynashi, diareya bilan o‘tadi. Isitmaning birinchi to‘lqini 3-4 kundan oshmaydi. Keyin harorat normal qiymatlarga tushadi, ammo keyingi kun yana ko‘tariladi. Intoksikatsiya belgilari keskin kuchayadi, kataral hodisalar yanada aniqroq bo‘ladi. Agar qizamiqning fotosuratiga qarasangiz, bu gipermik shilliq qavat bilan o‘ralgan kichik oq dog‘lar ekanligini aniq bo‘ladi. Terida toshma paydo bo‘lganda dog‘lar yo‘qoladi. Ularga parallel ravishda, qoida tariqasida, qattiq va yumshoq tanglayda enantema hosil bo‘ladi, ya’ni tartibsiz shaklga ega bo‘lgan qizil dog‘lar. Kataral davr taxminan 5-7 kun davom etadi.

Toshmalar. Qizamiq toshmasi – yorqin qizil-jigarrang rangning dog‘li-papulez ekzantemasi. Gemorragik xususiyatga ega bo‘lishi mumkin. U avval quloqlarning orqasida va boshida hosil bo‘ladi, so‘ngra bo‘yin va yuzga o‘tadi. Birinchi dog‘lar paydo bo‘lganidan bir kun o‘tib, u allaqachon butun tanani, elkalarga qamrab oladi. Keyin u oyoq-qo‘llarga tarqaladi va shu bilan birga yuzidagi toshmalar asta-sekin oqara boshlaydi. Teri toshmalari davrida intoksikatsiya yana bir bor kuchayadi, harorat ko‘tariladi, kataral alomatlar yanada aniqroq bo‘ladi. Kasallikning bu bosqichi taxminan 2-3 kun davom etadi.

Rekonvalessensiya. Qizamiq paydo bo‘lganidan 7-10 kun o‘tgach boshlanadi. Kasallik belgilari yo‘qoladi, harorat normallashadi, toshma oqara boshlaydi. Toshmalardan so‘ng, terida ochiq jigarrang joylar qoladi, ular 5-7 kun ichida so‘rilib ketadi.`, {
        reply_markup: qizamiqKeyboard(ctx),
    });
};

export { qizamiqKasallikBelgilariController };