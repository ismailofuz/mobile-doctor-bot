import { MyContext } from '../core/bot';
import { Languages, messages } from '../common/languages';
import { genderController } from './gender';
import { chooseWhoAreYouController } from './choose-who-are-you';
import { childrenDiseasesController } from './diseases/children-diseases';
import { childrenInfectiousDiseasesController } from './diseases/children-infectious-diseases';
import { childrenDiseasesKeyboard } from '../handlers/keyboard-handlers';
import { childrenAllergicDiseasesController } from './diseases/children-allergic-diseases';
import { childrenGastrointestinalDiseasesController } from './diseases/children-gastrointestinal-diseases';
import { orviController } from './orvi/orvi';
import { orviDiagnostikaController } from './orvi/orvi-diagnostika';
import { orviKasallikniDavolashController } from './orvi/orvi-kasallikni-davolash';
import { orviKasallikSabablariController } from './orvi/orvi-kasallik-sabablari';
import { orviKasallikBelgilariController } from './orvi/orvi-kasallik-belgilari';
import { orviXavfliJihatlariController } from './orvi/orvi-xavfli-jihatlari';
import { orviProfilaktikaController } from './orvi/orvi-profilaktika';
import { grippController } from './gripp/gripp';
import { grippKasallikBelgilariController } from './gripp/gripp-kasallik-belgilari';
import { grippKasallikniDavolashController } from './gripp/gripp-kasallikni-davolash';
import { grippKasallikSabablariController } from './gripp/gripp-kasallik-sabablari';
import { grippXavfliJihatlariController } from './gripp/gripp-xavfli-jihatlari';
import { grippDiagnostikaController } from './gripp/gripp-diagnostika';
import { grippKelibChiqishSabablariController } from './gripp/gripp-kelib-chiqish-sabablari';
import { grippProfilaktikaController } from './gripp/gripp-profilaktika';
import { rinitDiagnostikaController } from './rinit/rinit-diagnostika';
import { rinitKasallikniDavolashController } from './rinit/rinit-kasallikni-davolash';
import { rinitKasallikSabablariController } from './rinit/rinit-kasallik-sabablari';
import { rinitKasallikBelgilariController } from './rinit/rinit-kasallik-belgilari';
import { rinitXavfliJihatlariController } from './rinit/rinit-xavfli-jihatlari';
import { rinitKelibChiqishSabablariController } from './rinit/rinit-kelib-chiqish-sabablari';
import { rinitTurlariController } from './rinit/rinit-turlari';
import { rinitController } from './rinit/rinit';
import { rinitProfilaktikaController } from './rinit/rinit-profilaktika';
import { suvchechakController } from './suvchechak/suvchechak';
import { suvchechakTurlariController } from './suvchechak/suvchechak-turlari';
import { suvchechakDiagnostikaController } from './suvchechak/suvchechak-diagnostika';
import { suvchechakKasallikniDavolashController } from './suvchechak/suvchechak-kasallikni-davolash';
import { suvchechakKasallikSabablariController } from './suvchechak/suvchechak-kasallik-sabablari';
import { suvchechakKasallikBelgilariController } from './suvchechak/suvchechak-kasallik-belgilari';
import { suvchechakXavfliJihatlariController } from './suvchechak/suvchechak-xavfli-jihatlari';
import { suvchechakProfilaktikaController } from './suvchechak/suvchechak-profilaktika';
import { qizamiqController } from './qizamiq/qizamiq';
import { qizamiqDiagnostikaController } from './qizamiq/qizamiq-diagnostika';
import { qizamiqKasallikniDavolashController } from './qizamiq/qizamiq-kasallikni-davolash';
import { qizamiqKasallikSabablariController } from './qizamiq/qizamiq-kasallik-sabablari';
import { qizamiqKasallikBelgilariController } from './qizamiq/qizamiq-kasallik-belgilari';
import { qizamiqXavfliJihatlariController } from './qizamiq/qizamiq-xavfli-jihatlari';
import { qizamiqProfilaktikaController } from './qizamiq/qizamiq-profilaktika';
import { qizamiqNimaController } from './qizamiq/qizamiq-nima';
import { qizamiqUchunParhezController } from './qizamiq/qizamiq-uchun-parhez';

const messageController = async (ctx: MyContext) => {
    const message = ctx.message?.text as string;
    const language: Languages = ctx.session.language as Languages;
    const step = ctx.session.step as string;

    try {
        if (message === messages[language]['back']) {
            if (step === 'choose_who_are_you') {
                await ctx.deleteMessages([ctx.session?.message_id as number]);
                await ctx.deleteMessages([ctx.message?.message_id as number]);
                ctx.session.step = 'choose_gender';
                await genderController(ctx);
            } else if (step === 'child') {
                ctx.session.step = 'choose_who_are_you';
                await ctx.deleteMessages([ctx.message?.message_id as number]);
                await chooseWhoAreYouController(ctx);
            } else if (step === 'infectious_diseases') {
                ctx.session.step = 'child';
                await childrenDiseasesController(ctx);
            } else if (step === 'gastrointestinal_diseases') {
                ctx.session.step = 'child';
                await childrenDiseasesKeyboard(ctx);
            } else if (step === 'allergic_diseases') {
                ctx.session.step = 'child';
                await childrenDiseasesKeyboard(ctx);
            } else if (step === 'orvi') {
                ctx.session.step = 'infectious_diseases';
                await childrenInfectiousDiseasesController(ctx);
            } else if (step === 'gripp') {
                ctx.session.step = 'infectious_diseases';
                await childrenInfectiousDiseasesController(ctx);
            } else if (step === 'rinit') {
                ctx.session.step = 'infectious_diseases';
                await childrenInfectiousDiseasesController(ctx);
            } else if (step === 'suvchechak') {
                ctx.session.step = 'infectious_diseases';
                await childrenInfectiousDiseasesController(ctx);
            } else if (step === 'qizamiq') {
                ctx.session.step = 'infectious_diseases';
                await childrenInfectiousDiseasesController(ctx);
            }
        }


        if (`${messages[language]['child']}` === message) {
            ctx.session.step = 'child';
            await childrenDiseasesController(ctx);
        }


        if (`${messages[language]['infectious_diseases']}` === message) {
            ctx.session.step = 'infectious_diseases';
            await childrenInfectiousDiseasesController(ctx);
        } else if (`${messages[language]['gastrointestinal_diseases']}` === message) {
            ctx.session.step = 'gastrointestinal_diseases';
            await childrenGastrointestinalDiseasesController(ctx);
        } else if (`${messages[language]['allergic_diseases']}` === message) {
            ctx.session.step = 'allergic_diseases';
            await childrenAllergicDiseasesController(ctx);
        }

        if (`${messages[language]['orvi']}` === message) {
            ctx.session.step = 'orvi';
            await orviController(ctx);
        } else if (`${messages[language]['gripp']}` === message) {
            await grippController(ctx);
        } else if (`${messages[language]['shamollash']}` === message) {

        } else if (`${messages[language]['rinit']}` === message) {
            await rinitController(ctx);
        } else if (`${messages[language]['suvchechak']}` === message) {
            await suvchechakController(ctx);
        } else if (`${messages[language]['qizamiq']}` === message) {
            await qizamiqController(ctx);
        }

        if (`${messages[language]['diagnostika']}` === message && step === 'orvi') {
            await orviDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'orvi') {
            await orviKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'orvi') {
            await orviKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'orvi') {
            await orviKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'orvi') {
            await orviXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'orvi') {
            await orviProfilaktikaController(ctx);
        }

        if (`${messages[language]['diagnostika']}` === message && step === 'gripp') {
            await grippDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'gripp') {
            await grippKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'gripp') {
            await grippKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'gripp') {
            await grippKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'gripp') {
            await grippXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'gripp') {
            await grippProfilaktikaController(ctx);
        } else if (`${messages[language]['kelib_chiqish_sabablari']}` === message && step === 'gripp') {
            await grippKelibChiqishSabablariController(ctx);
        }

        if (`${messages[language]['kasallik_turlari']}` === message && step === 'rinit') {
            await rinitTurlariController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'rinit') {
            await rinitDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'rinit') {
            await rinitKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'rinit') {
            await rinitKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'rinit') {
            await rinitKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'rinit') {
            await rinitXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'rinit') {
            await rinitProfilaktikaController(ctx);
        } else if (`${messages[language]['kelib_chiqish_sabablari']}` === message && step === 'rinit') {
            await rinitKelibChiqishSabablariController(ctx);
        }

        if (`${messages[language]['kasallik_turlari']}` === message && step === 'suvchechak') {
            await suvchechakTurlariController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'suvchechak') {
            await suvchechakDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'suvchechak') {
            await suvchechakKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'suvchechak') {
            await suvchechakKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'suvchechak') {
            await suvchechakKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'suvchechak') {
            await suvchechakXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'suvchechak') {
            await suvchechakProfilaktikaController(ctx);
        }

        if (`${messages[language]['qizamiq_nima']}` === message && step === 'qizamiq') {
            await qizamiqNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'qizamiq') {
            await qizamiqDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'qizamiq') {
            await qizamiqKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'qizamiq') {
            await qizamiqKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'qizamiq') {
            await qizamiqKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'qizamiq') {
            await qizamiqXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'qizamiq') {
            await qizamiqProfilaktikaController(ctx);
        } else if (`${messages[language]['qizamiq_uchun_parhez']}` === message && step === 'qizamiq') {
            await qizamiqUchunParhezController(ctx);
        }

    } catch (error) {
        console.log(error);
    }
};

export { messageController };
