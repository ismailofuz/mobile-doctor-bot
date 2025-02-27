import { MyContext } from '../core/bot';
import { Languages, messages } from '../common/languages';
import { genderController } from './gender';
import { chooseWhoAreYouController } from './choose-who-are-you';
import { childrenDiseasesController } from './diseases/children-diseases';
import { childrenInfectiousDiseasesController } from './diseases/children-infectious-diseases';
import { childrenDiseasesKeyboard } from '../handlers/keyboard-handlers';
import { childrenAllergicDiseasesController } from './diseases/children-allergic-diseases';
import { childrenGastrointestinalDiseasesController } from './diseases/children-gastrointestinal-diseases';
import { orviController } from './infectious-diseases/orvi/orvi';
import { orviDiagnostikaController } from './infectious-diseases/orvi/orvi-diagnostika';
import { orviKasallikniDavolashController } from './infectious-diseases/orvi/orvi-kasallikni-davolash';
import { orviKasallikSabablariController } from './infectious-diseases/orvi/orvi-kasallik-sabablari';
import { orviKasallikBelgilariController } from './infectious-diseases/orvi/orvi-kasallik-belgilari';
import { orviXavfliJihatlariController } from './infectious-diseases/orvi/orvi-xavfli-jihatlari';
import { orviProfilaktikaController } from './infectious-diseases/orvi/orvi-profilaktika';
import { grippController } from './infectious-diseases/gripp/gripp';
import { grippKasallikBelgilariController } from './infectious-diseases/gripp/gripp-kasallik-belgilari';
import { grippKasallikniDavolashController } from './infectious-diseases/gripp/gripp-kasallikni-davolash';
import { grippKasallikSabablariController } from './infectious-diseases/gripp/gripp-kasallik-sabablari';
import { grippXavfliJihatlariController } from './infectious-diseases/gripp/gripp-xavfli-jihatlari';
import { grippDiagnostikaController } from './infectious-diseases/gripp/gripp-diagnostika';
import { grippKelibChiqishSabablariController } from './infectious-diseases/gripp/gripp-kelib-chiqish-sabablari';
import { grippProfilaktikaController } from './infectious-diseases/gripp/gripp-profilaktika';
import { rinitDiagnostikaController } from './infectious-diseases/rinit/rinit-diagnostika';
import { rinitKasallikniDavolashController } from './infectious-diseases/rinit/rinit-kasallikni-davolash';
import { rinitKasallikSabablariController } from './infectious-diseases/rinit/rinit-kasallik-sabablari';
import { rinitKasallikBelgilariController } from './infectious-diseases/rinit/rinit-kasallik-belgilari';
import { rinitXavfliJihatlariController } from './infectious-diseases/rinit/rinit-xavfli-jihatlari';
import { rinitKelibChiqishSabablariController } from './infectious-diseases/rinit/rinit-kelib-chiqish-sabablari';
import { rinitTurlariController } from './infectious-diseases/rinit/rinit-turlari';
import { rinitController } from './infectious-diseases/rinit/rinit';
import { rinitProfilaktikaController } from './infectious-diseases/rinit/rinit-profilaktika';
import { suvchechakController } from './infectious-diseases/suvchechak/suvchechak';
import { suvchechakTurlariController } from './infectious-diseases/suvchechak/suvchechak-turlari';
import { suvchechakDiagnostikaController } from './infectious-diseases/suvchechak/suvchechak-diagnostika';
import {
    suvchechakKasallikniDavolashController,
} from './infectious-diseases/suvchechak/suvchechak-kasallikni-davolash';
import { suvchechakKasallikSabablariController } from './infectious-diseases/suvchechak/suvchechak-kasallik-sabablari';
import { suvchechakKasallikBelgilariController } from './infectious-diseases/suvchechak/suvchechak-kasallik-belgilari';
import { suvchechakXavfliJihatlariController } from './infectious-diseases/suvchechak/suvchechak-xavfli-jihatlari';
import { suvchechakProfilaktikaController } from './infectious-diseases/suvchechak/suvchechak-profilaktika';
import { qizamiqController } from './infectious-diseases/qizamiq/qizamiq';
import { qizamiqDiagnostikaController } from './infectious-diseases/qizamiq/qizamiq-diagnostika';
import { qizamiqKasallikniDavolashController } from './infectious-diseases/qizamiq/qizamiq-kasallikni-davolash';
import { qizamiqKasallikSabablariController } from './infectious-diseases/qizamiq/qizamiq-kasallik-sabablari';
import { qizamiqKasallikBelgilariController } from './infectious-diseases/qizamiq/qizamiq-kasallik-belgilari';
import { qizamiqXavfliJihatlariController } from './infectious-diseases/qizamiq/qizamiq-xavfli-jihatlari';
import { qizamiqProfilaktikaController } from './infectious-diseases/qizamiq/qizamiq-profilaktika';
import { qizamiqNimaController } from './infectious-diseases/qizamiq/qizamiq-nima';
import { qizamiqUchunParhezController } from './infectious-diseases/qizamiq/qizamiq-uchun-parhez';
import { disbakteriozNimaController } from './gastrointestinal-diseases/disbakterioz/disbakterioz-nima';
import { disbakteriozDiagnostikaController } from './gastrointestinal-diseases/disbakterioz/disbakterioz-diagnostika';
import {
    disbakteriozKasallikniDavolashController,
} from './gastrointestinal-diseases/disbakterioz/disbakterioz-kasallikni-davolash';
import {
    disbakteriozKasallikSabablariController,
} from './gastrointestinal-diseases/disbakterioz/disbakterioz-kasallik-sabablari';
import {
    disbakteriozKasallikBelgilariController,
} from './gastrointestinal-diseases/disbakterioz/disbakterioz-kasallik-belgilari';
import {
    disbakteriozXavfliJihatlariController,
} from './gastrointestinal-diseases/disbakterioz/disbakterioz-xavfli-jihatlari';
import { disbakteriozProfilaktikaController } from './gastrointestinal-diseases/disbakterioz/disbakterioz-profilaktika';
import { disbakteriozController } from './gastrointestinal-diseases/disbakterioz/disbakterioz';
import { gastritController } from './gastrointestinal-diseases/gastrit/gastrit';
import { gastritKasallikBelgilariController } from './gastrointestinal-diseases/gastrit/gastrit-kasallik-belgilari';
import { gastritKasallikSabablariController } from './gastrointestinal-diseases/gastrit/gastrit-kasallik-sabablari';
import { gastritProfilaktikaController } from './gastrointestinal-diseases/gastrit/gastrit-profilaktika';
import { gastritXavfliJihatlariController } from './gastrointestinal-diseases/gastrit/gastrit-xavfli-jihatlari';
import { gastritKasallikTurlariController } from './gastrointestinal-diseases/gastrit/gastrit-kasallik-turlari';
import { gastritDiagnostikaController } from './gastrointestinal-diseases/gastrit/gastrit-diagnostika';
import { gastritKasallikniDavolashController } from './gastrointestinal-diseases/gastrit/gastrit-kasallikni-davolash';
import { diareyaController } from './gastrointestinal-diseases/diareya/diareya';
import { diareyaNimaController } from './gastrointestinal-diseases/diareya/diareya-nima';
import { diareyaXavfliJihatlariController } from './gastrointestinal-diseases/diareya/diareya-xavfli-jihatlari';
import { diareyaDiagnostikaController } from './gastrointestinal-diseases/diareya/diareya-diagnostika';
import { diareyaKasallikniDavolashController } from './gastrointestinal-diseases/diareya/diareya-kasallikni-davolash';
import { diareyaKasallikSabablariController } from './gastrointestinal-diseases/diareya/diareya-kasallik-sabablari';
import { diareyaKasallikBelgilariController } from './gastrointestinal-diseases/diareya/diareya-kasallik-belgilari';
import { diareyaProfilaktikaController } from './gastrointestinal-diseases/diareya/diareya-profilaktika';
import { qabziyatProfilaktikaController } from './gastrointestinal-diseases/qabziyat/qabziyat-profilaktika';
import { qabziyatNimaController } from './gastrointestinal-diseases/qabziyat/qabziyat-nima';
import { qabziyatDiagnostikaController } from './gastrointestinal-diseases/qabziyat/qabziyat-diagnostika';
import {
    qabziyatKasallikniDavolashController,
} from './gastrointestinal-diseases/qabziyat/qabziyat-kasallikni-davolash';
import { qabziyatKasallikSabablariController } from './gastrointestinal-diseases/qabziyat/qabziyat-kasallik-sabablari';
import { qabziyatKasallikBelgilariController } from './gastrointestinal-diseases/qabziyat/qabziyat-kasallik-belgilari';
import { qabziyatXavfliJihatlariController } from './gastrointestinal-diseases/qabziyat/qabziyat-xavfli-jihatlari';
import { qabziyatController } from './gastrointestinal-diseases/qabziyat/qabziyat';
import { allergikRinitController } from './allergic-diseases/allergik-rinit/allergik-rinit';
import {
    allergikRinitKasallikniDavolashController,
} from './allergic-diseases/allergik-rinit/allergik-rinit-kasallikni-davolash';
import { allergikRinitNimaController } from './allergic-diseases/allergik-rinit/allergik-rinit-nima';
import { allergikRinitDiagnostikaController } from './allergic-diseases/allergik-rinit/allergik-rinit-diagnostika';
import {
    allergikRinitKasallikSabablariController,
} from './allergic-diseases/allergik-rinit/allergik-rinit-kasallik-sabablari';
import {
    allergikRinitKasallikBelgilariController,
} from './allergic-diseases/allergik-rinit/allergik-rinit-kasallik-belgilari';
import {
    allergikRinitXavfliJihatlariController,
} from './allergic-diseases/allergik-rinit/allergik-rinit-xavfli-jihatlari';
import { allergikRinitProfilaktikaController } from './allergic-diseases/allergik-rinit/allergik-rinit-profilaktika';
import {
    bronxalAstmaKasallikSabablariController,
} from './allergic-diseases/bronxal-astma/bronxal-astma-kasallik-sabablari';
import { bronxalAstmaDiagnostikaController } from './allergic-diseases/bronxal-astma/bronxal-astma-diagnostika';
import {
    bronxalAstmaKasallikniDavolashController,
} from './allergic-diseases/bronxal-astma/bronxal-astma-kasallikni-davolash';
import {
    bronxalAstmaKasallikBelgilariController,
} from './allergic-diseases/bronxal-astma/bronxal-astma-kasallik-belgilari';
import {
    bronxalAstmaXavfliJihatlariController,
} from './allergic-diseases/bronxal-astma/bronxal-astma-xavfli-jihatlari';
import { bronxalAstmaProfilaktikaController } from './allergic-diseases/bronxal-astma/bronxal-astma-profilaktika';
import { bronxalAstmaController } from './allergic-diseases/bronxal-astma/bronxal-astma';
import { tonzilitKasallikSabablariController } from './respiratory-diseases/tonzilit/tonzilit-kasallik-sabablari';
import { tonzilitNimaController } from './respiratory-diseases/tonzilit/tonzilit-nima';
import { tonzilitDiagnostikaController } from './respiratory-diseases/tonzilit/tonzilit-diagnostika';
import { tonzilitKasallikniDavolashController } from './respiratory-diseases/tonzilit/tonzilit-kasallikni-davolash';
import { tonzilitKasallikBelgilariController } from './respiratory-diseases/tonzilit/tonzilit-kasallik-belgilari';
import { tonzilitXavfliJihatlariController } from './respiratory-diseases/tonzilit/tonzilit-xavfli-jihatlari';
import { tonzilitProfilaktikaController } from './respiratory-diseases/tonzilit/tonzilit-profilaktika';
import { tonzilitController } from './respiratory-diseases/tonzilit/tonzilit';
import { childrenRespiratoryDiseasesController } from './diseases/respiratory-diseases';
import { atopikDermatitNimaController } from './allergic-diseases/atopik-dermatit/atopik-dermatit-nima';
import { atopikDermatitDiagnostikaController } from './allergic-diseases/atopik-dermatit/atopik-dermatit-diagnostika';
import {
    atopikDermatitKasallikniDavolashController
} from './allergic-diseases/atopik-dermatit/atopik-dermatit-kasallikni-davolash';
import {
    atopikDermatitKasallikSabablariController
} from './allergic-diseases/atopik-dermatit/atopik-dermatit-kasallik-sabablari';
import {
    atopikDermatitKasallikBelgilariController
} from './allergic-diseases/atopik-dermatit/atopik-dermatit-kasallik-belgilari';
import {
    atopikDermatitXavfliJihatlariController
} from './allergic-diseases/atopik-dermatit/atopik-dermatit-xavfli-jihatlari';
import { atopikDermatitProfilaktikaController } from './allergic-diseases/atopik-dermatit/atopik-dermatit-profilaktika';
import { atopikDermatitController } from './allergic-diseases/atopik-dermatit/atopik-dermatit';

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
                await childrenDiseasesController(ctx);
            } else if (step === 'allergic_diseases') {
                ctx.session.step = 'child';
                await childrenDiseasesController(ctx);
            } else if (step === 'respiratory_diseases') {
                ctx.session.step = 'child';
                await childrenDiseasesController(ctx);
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
            } else if (step === 'disbakterioz') {
                ctx.session.step = 'gastrointestinal_diseases';
                await childrenGastrointestinalDiseasesController(ctx);
            } else if (step === 'gastrit') {
                ctx.session.step = 'gastrointestinal_diseases';
                await childrenGastrointestinalDiseasesController(ctx);
            } else if (step === 'diareya') {
                ctx.session.step = 'gastrointestinal_diseases';
                await childrenGastrointestinalDiseasesController(ctx);
            } else if (step === 'qabziyat') {
                ctx.session.step = 'gastrointestinal_diseases';
                await childrenGastrointestinalDiseasesController(ctx);
            } else if (step === 'allergik_rinit') {
                ctx.session.step = 'allergic_diseases';
                await childrenAllergicDiseasesController(ctx);
            } else if (step === 'bronxal_astma') {
                ctx.session.step = 'allergic_diseases';
                await childrenAllergicDiseasesController(ctx);
            } else if (step === 'atopik_dermatit') {
                ctx.session.step = 'allergic_diseases';
                await childrenAllergicDiseasesController(ctx);
            } else if (step === 'tonzilit') {
                ctx.session.step = 'respiratory_diseases';
                await childrenRespiratoryDiseasesController(ctx);
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
        } else if (`${messages[language]['respiratory_diseases']}` === message) {
            ctx.session.step = 'respiratory_diseases';
            await childrenRespiratoryDiseasesController(ctx);
        }

        if (`${messages[language]['orvi']}` === message) {
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

        if (`${messages[language]['disbakterioz']}` === message) {
            await disbakteriozController(ctx);
        } else if (`${messages[language]['gastrit']}` === message) {
            await gastritController(ctx);
        } else if (`${messages[language]['diareya']}` === message) {
            await diareyaController(ctx);
        } else if (`${messages[language]['qabziyat']}` === message) {
            await qabziyatController(ctx);
        }

        if (`${messages[language]['allergik_rinit']}` === message) {
            await allergikRinitController(ctx);
        } else if (`${messages[language]['bronxal_astma']}` === message) {
            await bronxalAstmaController(ctx);
        } else if (`${messages[language]['atopik_dermatit']}` === message) {
            await atopikDermatitController(ctx);
        }

        if (`${messages[language]['tonzilit']}` === message) {
            await tonzilitController(ctx);
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

        if (`${messages[language]['disbekterioz_nima']}` === message && step === 'disbakterioz') {
            await disbakteriozNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'disbakterioz') {
            await disbakteriozDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'disbakterioz') {
            await disbakteriozKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'disbakterioz') {
            await disbakteriozKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'disbakterioz') {
            await disbakteriozKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'disbakterioz') {
            await disbakteriozXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'disbakterioz') {
            await disbakteriozProfilaktikaController(ctx);
        }

        if (`${messages[language]['kasallik_turlari']}` === message && step === 'gastrit') {
            await gastritKasallikTurlariController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'gastrit') {
            await gastritDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'gastrit') {
            await gastritKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'gastrit') {
            await gastritKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'gastrit') {
            await gastritKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'gastrit') {
            await gastritXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'gastrit') {
            await gastritProfilaktikaController(ctx);
        }

        if (`${messages[language]['diareya_nima']}` === message && step === 'diareya') {
            await diareyaNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'diareya') {
            await diareyaDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'diareya') {
            await diareyaKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'diareya') {
            await diareyaKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'diareya') {
            await diareyaKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'diareya') {
            await diareyaXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'diareya') {
            await diareyaProfilaktikaController(ctx);
        }

        if (`${messages[language]['qabziyat_nima']}` === message && step === 'qabziyat') {
            await qabziyatNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'qabziyat') {
            await qabziyatDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'qabziyat') {
            await qabziyatKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'qabziyat') {
            await qabziyatKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'qabziyat') {
            await qabziyatKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'qabziyat') {
            await qabziyatXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'qabziyat') {
            await qabziyatProfilaktikaController(ctx);
        }

        if (`${messages[language]['allergik_rinit_nima']}` === message && step === 'allergik_rinit') {
            await allergikRinitNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'allergik_rinit') {
            await allergikRinitDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'allergik_rinit') {
            await allergikRinitKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'allergik_rinit') {
            await allergikRinitKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'allergik_rinit') {
            await allergikRinitKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'allergik_rinit') {
            await allergikRinitXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'allergik_rinit') {
            await allergikRinitProfilaktikaController(ctx);
        }

        if (`${messages[language]['diagnostika']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'bronxal_astma') {
            await bronxalAstmaProfilaktikaController(ctx);
        }

        if (`${messages[language]['atopik_dermatit_nima']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'atopik_dermatit') {
            await atopikDermatitProfilaktikaController(ctx);
        }

        if (`${messages[language]['tonzillit_nima']}` === message && step === 'tonzilit') {
            await tonzilitNimaController(ctx);
        } else if (`${messages[language]['diagnostika']}` === message && step === 'tonzilit') {
            await tonzilitDiagnostikaController(ctx);
        } else if (`${messages[language]['kasallikni_davolash']}` === message && step === 'tonzilit') {
            await tonzilitKasallikniDavolashController(ctx);
        } else if (`${messages[language]['kasallik_sabablari']}` === message && step === 'tonzilit') {
            await tonzilitKasallikSabablariController(ctx);
        } else if (`${messages[language]['kasallik_belgilari']}` === message && step === 'tonzilit') {
            await tonzilitKasallikBelgilariController(ctx);
        } else if (`${messages[language]['xavfli_jihatlari']}` === message && step === 'tonzilit') {
            await tonzilitXavfliJihatlariController(ctx);
        } else if (`${messages[language]['profilaktika']}` === message && step === 'tonzilit') {
            await tonzilitProfilaktikaController(ctx);
        }

    } catch (error) {
        console.log(error);
    }
};

export { messageController };
