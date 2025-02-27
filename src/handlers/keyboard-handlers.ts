import { InlineKeyboard, Keyboard } from 'grammy';
import { MyContext } from '../core/bot';
import { Languages, messages } from '../common/languages';

export const languageKeyboard = new InlineKeyboard()
    .text('🇺🇿 O\'zbek', 'language_uz')
    .text('🇷🇺 Русский', 'language_ru')
    .text('🇬🇧 English', 'language_en');

export function genderKeyboard(ctx: MyContext) {
    const language = ctx.session.language as Languages; // Type assertion

    return new InlineKeyboard()
        .text(`${messages[language]['man']}`, 'gender_male')
        .text(`${messages[language]['woman']}`, 'gender_female').row()
        .text(`${messages[language]['back']}`, 'back');
}

// 👤 "Siz kimsiz?" oddiy reply keyboard
export function whoAreYouReplyKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['child']}`).row()
        // .text(`${messages[language]['teenager']}`).row()
        // .text(`${messages[language]['student']}`)
        // .text(`${messages[language]['middle_aged']}`).row()
        // .text(`${messages[language]['elderly']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function childrenDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['infectious_diseases']}`)
        .text(`${messages[language]['gastrointestinal_diseases']}`).row()
        .text(`${messages[language]['allergic_diseases']}`)
        .text(`${messages[language]['respiratory_diseases']}`).row()
        // .text(`${messages[language]['diseases_of_the_nervous_system']}`).row()
        // .text(`${messages[language]['immune_problems']}`)
        // .text(`${messages[language]['skin_diseases']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function infectiousDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['orvi']}`).row()
        .text(`${messages[language]['gripp']}`)
        // .text(`${messages[language]['shamollash']}`)
        .text(`${messages[language]['rinit']}`).row()
        .text(`${messages[language]['suvchechak']}`)
        .text(`${messages[language]['qizamiq']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function gastrointestinalDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['disbakterioz']}`)
        .text(`${messages[language]['gastrit']}`).row()
        .text(`${messages[language]['diareya']}`)
        .text(`${messages[language]['qabziyat']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function allergicDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['allergik_rinit']}`).row()
        .text(`${messages[language]['bronxal_astma']}`)
        .text(`${messages[language]['atopik_dermatit']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function respiratoryDiseasesDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['tonzilit']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function orviKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function grippKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['diagnostika']}`).row()
        .text(`${messages[language]['kasallikni_davolash']}`)
        .text(`${messages[language]['kasallik_sabablari']}`).row()
        .text(`${messages[language]['kasallik_belgilari']}`)
        .text(`${messages[language]['xavfli_jihatlari']}`).row()
        .text(`${messages[language]['profilaktika']}`)
        .text(`${messages[language]['kelib_chiqish_sabablari']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function rinitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['kasallik_turlari']}`)
        .text(`${messages[language]['diagnostika']}`).row()
        .text(`${messages[language]['kasallikni_davolash']}`)
        .text(`${messages[language]['kasallik_sabablari']}`).row()
        .text(`${messages[language]['kasallik_belgilari']}`)
        .text(`${messages[language]['xavfli_jihatlari']}`).row()
        .text(`${messages[language]['profilaktika']}`)
        .text(`${messages[language]['kelib_chiqish_sabablari']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function suvchechakKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['kasallik_turlari']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}


export function qizamiqKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['qizamiq_nima']}`)
        .text(`${messages[language]['diagnostika']}`).row()
        .text(`${messages[language]['kasallikni_davolash']}`)
        .text(`${messages[language]['kasallik_sabablari']}`).row()
        .text(`${messages[language]['kasallik_belgilari']}`)
        .text(`${messages[language]['xavfli_jihatlari']}`).row()
        .text(`${messages[language]['profilaktika']}`)
        .text(`${messages[language]['qizamiq_uchun_parhez']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function disbakteriozKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['disbekterioz_nima']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function gastritKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['kasallik_turlari']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function diareyaKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['diareya_nima']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function qabziyatKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['qabziyat_nima']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function allergikRinitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['allergik_rinit_nima']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function bronxalAstmaKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function atopikDermatitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['atopik_dermatit_nima']}`)
        // .text(`${messages[language]['diagnostika']}`)
        // .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`).row()
        // .text(`${messages[language]['kasallik_belgilari']}`).row()
        // .text(`${messages[language]['xavfli_jihatlari']}`)
        // .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function tonzillitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['tonzillit_nima']}`)
        .text(`${messages[language]['kasallik_turlari']}`).row()
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}
