export type Languages = 'uz' | 'ru' | 'en';
export type Messages =
    'choose_language'
    | 'choose_gender'
    | 'choose_who_are_you'
    | 'back'
    | 'infectious_diseases'
    | 'gastrointestinal_diseases'
    | 'allergic_diseases'
    | 'respiratory_diseases'
    | 'diseases_of_the_nervous_system'
    | 'immune_problems'
    | 'skin_diseases'
    | 'child_diseases'
    | 'child'
    | 'teenager'
    | 'student'
    | 'middle_aged'
    | 'elderly'
    | 'man'
    | 'woman'

    // tarjima qilinmaganlar
    | 'orvi'
    | 'gripp'
    | 'shamollash'
    | 'rinit'
    | 'suvchechak'
    | 'qizamiq'

    | 'diagnostika'
    | 'kasallikni_davolash'
    | 'kasallik_sabablari'
    | 'kasallik_belgilari'
    | 'xavfli_jihatlari'
    | 'profilaktika'
    | 'kelib_chiqish_sabablari'
    | 'kasallik_turlari'
    | 'qizamiq_nima'
    | 'qizamiq_uchun_parhez'
    | 'qabziyat_nima'
    | 'allergik_rinit_nima'
    | 'atopik_dermatit_nima'
    | 'tonzillit_nima'
    | 'diareya_nima'
    | 'disbekterioz_nima'

    | 'disbakterioz'
    | 'gastrit'
    | 'diareya'
    | 'qabziyat'

    | 'allergik_rinit'
    | 'bronxal_astma'
    | 'atopik_dermatit'

    | 'tonzilit'


export const messages: Record<Languages, Record<Messages, string>> = {
    uz: {
        choose_language: `Tilni tanlang 🇺🇿`,
        choose_gender: 'Jinsingizni tanlang',
        man: '👨 Erkak',
        woman: '👩 Ayol',
        choose_who_are_you: 'Siz kimsiz?',
        back: '⬅️ Ortga',

        infectious_diseases: '😷 Yuqumli kasalliklar',
        gastrointestinal_diseases: '🤕 Oshqozon ichak kasalliklari',
        allergic_diseases: '🤧 Allergik kasalliklar',
        respiratory_diseases: '🤒 Nafas yo\'llari kasalliklari',
        diseases_of_the_nervous_system: '🫨 Nerv tizimi kasalliklari',
        immune_problems: '❗ Immunitet bilan bog\'liq muammolar',
        skin_diseases: '🫥 Teriga oid kasalliklar',
        child_diseases: '👦 Bolalarda eng ko\'p tarqalgan kasalliklar',

        child: '👦 Bola',
        teenager: '🧑 O‘smir',
        student: '🎓 Talaba',
        middle_aged: '👨‍🦳 30-50 yosh',
        elderly: '🧓 50 yoshdan katta',

        // tarjima qilinmaganlar
        orvi: 'O‘RVI',
        gripp: 'Gripp',
        shamollash: 'Shamollash',
        rinit: 'Rinit',
        suvchechak: 'Suvchechak',
        qizamiq: 'Qizamiq',

        // Oshqozon ichak kasalliklari🤕
        disbakterioz: 'Disbakterioz❗️(ichak mikroflorasining buzulishi)',
        gastrit: 'Gastrit❗️(oshqozon yarasi)',
        diareya: 'Ich ketishi❗️(diareya)',
        qabziyat: 'Ich qotishi❗️(qabziyat)',

        // Allergik kasalliklar🤧
        allergik_rinit: 'Allergik rinit✅',
        bronxal_astma: 'Bronxal astma✅',
        atopik_dermatit: 'Atopik dermatit✅',

        // nafas yo'llari kasalliklari
        tonzilit: 'Tonzilit✅',

        diagnostika: 'Diagnostika✅',
        kasallikni_davolash: 'Kasallikni davolash✅',
        kasallik_sabablari: 'Kasallik sabablari✅',
        kasallik_belgilari: 'Kasallik belgilari✅',
        xavfli_jihatlari: 'Xavfli jihatlari✅',
        profilaktika: 'Profilaktika✅',
        kelib_chiqish_sabablari: 'Kelib chiqish sabablari✅',
        kasallik_turlari: 'Kasallik turlari✅',
        qizamiq_nima: 'Qizamiq nima✅',
        qizamiq_uchun_parhez: 'Qizamiq uchun parhez✅',
        qabziyat_nima: 'Qabziyat nima ✅',
        allergik_rinit_nima: 'Allergik rinit nima✅',
        atopik_dermatit_nima: 'Atopik dermatit nima✅',
        tonzillit_nima: 'Tonzillit (angina)nima✅',
        diareya_nima: 'Diareya nima✅',
        disbekterioz_nima: 'Disbekterioz nima✅',
    },
    ru: {
        choose_language: `Выберите язык 🇷🇺`,
        choose_gender: 'Выберите ваш пол',
        man: '👨 Мужчина',
        woman: '👩 Женщина',
        choose_who_are_you: 'Кто вы?',
        back: '⬅️ Назад',

        infectious_diseases: '😷 Инфекционные заболевания',
        gastrointestinal_diseases: '🤕 Желудочно-кишечные заболевания',
        allergic_diseases: '🤧 Аллергические заболевания',
        respiratory_diseases: '🤒 Респираторные заболевания',
        diseases_of_the_nervous_system: '🫨 Заболевания нервной системы',
        immune_problems: '❗ Проблемы с иммунитетом',
        skin_diseases: '🫥 Кожные заболевания',
        child_diseases: '👦 Наиболее распространенные заболевания у детей',

        child: '👦 Ребенок',
        teenager: '🧑 Подросток',
        student: '🎓 Студент',
        middle_aged: '👨‍🦳 30-50 лет',
        elderly: '🧓 Старше 50 лет',

        // tarjima qilinmaganlar
        orvi: 'ORVI',
        gripp: 'Gripp',
        shamollash: 'Shamollash',
        rinit: 'Rinit',
        suvchechak: 'Suvchechak',
        qizamiq: 'Qizamiq',

        // Oshqozon ichak kasalliklari🤕
        disbakterioz: 'Disbakterioz❗️(ichak mikroflorasining buzulishi)',
        gastrit: 'Gastrit❗️(oshqozon yarasi)',
        diareya: 'Ich ketishi❗️(diareya)',
        qabziyat: 'Ich qotishi❗️(qabziyat)',

        // Allergik kasalliklar🤧
        allergik_rinit: 'Allergik rinit✅',
        bronxal_astma: 'Bronxal astma✅',
        atopik_dermatit: 'Atopik dermatit✅',

        // nafas yo'llari kasalliklari
        tonzilit: 'Tonzilit✅',

        diagnostika: 'Diagnostika✅',
        kasallikni_davolash: 'Kasallikni davolash✅',
        kasallik_sabablari: 'Kasallik sabablari✅',
        kasallik_belgilari: 'Kasallik belgilari✅',
        xavfli_jihatlari: 'Xavfli jihatlari✅',
        profilaktika: 'Profilaktika✅',
        kelib_chiqish_sabablari: 'Kelib chiqish sabablari✅',
        kasallik_turlari: 'Kasallik turlari✅',
        qizamiq_nima: 'Qizamiq nima✅',
        qizamiq_uchun_parhez: 'Qizamiq uchun parhez✅',
        qabziyat_nima: 'Qabziyat nima ✅',
        allergik_rinit_nima: 'Allergik rinit nima✅',
        atopik_dermatit_nima: 'Atopik dermatit nima✅',
        tonzillit_nima: 'Tonzillit (angina)nima✅',
        diareya_nima: 'Diareya nima✅',
        disbekterioz_nima: 'Disbekterioz nima✅',
    },
    en: {
        choose_language: `Choose your language 🇬🇧`,
        choose_gender: 'Choose your gender',
        man: '👨 Man',
        woman: '👩 Woman',
        choose_who_are_you: 'Who are you?',
        back: '⬅️ Back',
        infectious_diseases: '😷 Infectious diseases',
        gastrointestinal_diseases: '🤕 Gastrointestinal diseases',
        allergic_diseases: '🤧 Allergic diseases',
        respiratory_diseases: '🤒 Respiratory diseases',
        diseases_of_the_nervous_system: '🫨 Diseases of the nervous system',
        immune_problems: '❗ Immune problems',
        skin_diseases: '🫥 Skin diseases',
        child_diseases: '👦 Наиболее распространенные заболевания у детей',
        child: '👦 Child',
        teenager: '🧑 Teenager',
        student: '🎓 Student',
        middle_aged: '👨‍🦳 30-50-aged',
        elderly: '🧓 50 and older',

        // tarjima qilinmaganlar
        orvi: 'ORVI',
        gripp: 'Gripp',
        shamollash: 'Shamollash',
        rinit: 'Rinit',
        suvchechak: 'Suvchechak',
        qizamiq: 'Qizamiq',

        // Oshqozon ichak kasalliklari🤕
        disbakterioz: 'Disbakterioz❗️(ichak mikroflorasining buzulishi)',
        gastrit: 'Gastrit❗️(oshqozon yarasi)',
        diareya: 'Ich ketishi❗️(diareya)',
        qabziyat: 'Ich qotishi❗️(qabziyat)',

        // Allergik kasalliklar🤧
        allergik_rinit: 'Allergik rinit✅',
        bronxal_astma: 'Bronxal astma✅',
        atopik_dermatit: 'Atopik dermatit✅',

        // nafas yo'llari kasalliklari
        tonzilit: 'Tonzilit✅',

        diagnostika: 'Diagnostika✅',
        kasallikni_davolash: 'Kasallikni davolash✅',
        kasallik_sabablari: 'Kasallik sabablari✅',
        kasallik_belgilari: 'Kasallik belgilari✅',
        xavfli_jihatlari: 'Xavfli jihatlari✅',
        profilaktika: 'Profilaktika✅',
        kelib_chiqish_sabablari: 'Kelib chiqish sabablari✅',
        kasallik_turlari: 'Kasallik turlari✅',
        qizamiq_nima: 'Qizamiq nima✅',
        qizamiq_uchun_parhez: 'Qizamiq uchun parhez✅',
        qabziyat_nima: 'Qabziyat nima ✅',
        allergik_rinit_nima: 'Allergik rinit nima✅',
        atopik_dermatit_nima: 'Atopik dermatit nima✅',
        tonzillit_nima: 'Tonzillit (angina)nima✅',
        diareya_nima: 'Diareya nima✅',
        disbekterioz_nima: 'Disbekterioz nima✅',
    },
};