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
        .text(`${messages[language]['child']}`)
        .text(`${messages[language]['teenager']}`).row()
        .text(`${messages[language]['student']}`)
        .text(`${messages[language]['middle_aged']}`).row()
        .text(`${messages[language]['elderly']}`).row()
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
        .text(`${messages[language]['respiratory_diseases']}`)
        .text(`${messages[language]['diseases_of_the_nervous_system']}`).row()
        .text(`${messages[language]['immune_problems']}`)
        .text(`${messages[language]['skin_diseases']}`).row()
        .text(`${messages[language]['back']}`).row()
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function infectiousDiseasesKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['orvi']}`)
        .text(`${messages[language]['gripp']}`).row()
        .text(`${messages[language]['shamollash']}`)
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
        .text(`${messages[language]['allergik_rinit']}`)
        .text(`${messages[language]['bronxal_astma']}`).row()
        .text(`${messages[language]['atopik_dermatit']}`)
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
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['kelib_chiqish_sabablari']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function rinitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['kasallik_turlari']}`)
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['kelib_chiqish_sabablari']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function suvchechakKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['kasallik_turlari']}`)
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
        .text(`${messages[language]['diagnostika']}`)
        .text(`${messages[language]['kasallikni_davolash']}`).row()
        .text(`${messages[language]['kasallik_sabablari']}`)
        .text(`${messages[language]['kasallik_belgilari']}`).row()
        .text(`${messages[language]['xavfli_jihatlari']}`)
        .text(`${messages[language]['profilaktika']}`).row()
        .text(`${messages[language]['qizamiq_uchun_parhez']}`).row()
        .text(`${messages[language]['back']}`)
        .oneTime()
        .resized(); // Tugmalar kichraytiriladi
}

export function disbakteriozKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['disbekterioz_nima']}`)
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
        .text(`${messages[language]['kasallik_turlari']}`)
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
        .text(`${messages[language]['diareya_nima']}`)
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
        .text(`${messages[language]['qabziyat_nima']}`)
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
        .text(`${messages[language]['allergik_rinit_nima']}`)
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

export function tonzillitKeyboard(ctx: MyContext) {
    const language: Languages = ctx.session.language as Languages;

    return new Keyboard()
        .text(`${messages[language]['tonzillit_nima']}`)
        .text(`${messages[language]['kasallik_turlari']}`)
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
