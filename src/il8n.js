import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
    en: {
        translation: {
            "nav_home": "Home",
            "nav_sponsors": "Sponsors",
            "nav_contact": "Contact",
            "sponsors_title": "Our Trusted ",
            "contact_title": "Join The Community",
            "contact_subtitle": "CONNECT WITH ME",
            "whatsapp_label": "Chat Directly",
            "nav_transformations": "Transformations",
            "btn_training": "Start Training",
            "btn_collab": "Collaboration",
            "about_name": "Mohammad Salman",
            "about_subtitle": "ONLINE COACHING",
            "about_title_stop": "Stop Wishing,",
            "about_title_start": "Start ",
            "about_title_doing": "Doing",
            "about_cert": "Certified Nutritionist — Liverpool College",
            "about_desc": "Transform your physique with expert guidance. Whether you're looking to lose fat or build elite muscle, I provide the roadmap to your best self.",
            "about_stat_clients": "Clients Transformed",
            "about_stat_years": "Years Experience",
            "about_stat_uk": "Certified Coach",
            "about_tap_hint": "Tap to swap",
            // Transformations Data - English
            "client_1_name": "Samira",
            "client_1_duration": "3 Months",
            "client_2_name": "Raed",
            "client_2_duration": "5 Months",
            "client_3_name": "Mohammad",
            "client_3_duration": "1 Year",
            "client_4_name": "Osama",
            "client_4_duration": "6 Months",
            "client_5_name": "Khaled",
            "client_5_duration": "5 Months",
            "client_6_name": "Ashraf",
            "client_6_duration": "1 Month",



            "tab_male": "Male",
            "tab_female": "Female",
            "female_privacy_label": "Photos kept private — out of respect",
            "female_card_badge": "✓ Verified Result",




            "trans_subtitle": "REAL RESULTS",
            "trans_title": "Client",
            "trans_highlight": "Transformations",
            "trans_before": "Before",
            "trans_after": "After",
            "month": "Month",
            "months": "Months",
            "desc_fat_loss": "Lost 8kg fat and diet plan",
            "desc_muscle_growth": "Muscle growth & definition",
            "desc_fat_loss_journey": "Incredible fat loss journey",
            "desc_clean_bulk": "Clean bulk & muscle gain",

            "sponsors_subtitle": "Partnerships",
            "sponsors_highlight": "Sponsors",
            "sponsors_description": "Collaborating with industry leaders to bring you the best results.",
            "promo_label": "Special Offer",
            "promo_use_code": "Use code",
            "promo_for": "for a",
            "promo_discount": "10% Discount",
            "promo_on_products": "on all the products of our sponsors",
            "desc_myprotein": "Premium supplements fueling our athletes with the purest whey isolate and pre-workout formulas.",
            "desc_squatwolf": "Clothing brand for athletes and fitness enthusiasts based in Dubai.",
            "desc_ghithaa": "Health food for athletes and fitness enthusiasts.",


            "client_7_name": "Asmaa",
            "client_7_duration": "4 Months",
            "client_8_name": "Rasha",
            "client_8_duration": "3 Months",
            "client_9_name": "Shahd",
            "client_9_duration": "1 Month",
            "client_7_desc": "Lost 15kg — from 85kg to 70kg",
            "client_1_desc": "Lost 10kg — from 84kg to 74kg",  // رشا
            "client_9_desc": "Lost 5kg — from 58kg to 53kg",   // شهد
            "client_8_desc": "Lost weight & body recomposition", // سميرة — ما عندنا أرقام            "contact_subtitle": "CONNECT WITH ME",
            "contact_title": "Join The ",
            "contact_highlight": "Community",
            "contact_desc": "Ready to start? Contact me on WhatsApp for coaching inquiries or follow my daily tips on social media.",
            "whatsapp_chat": "Chat Directly",
            "facebook_name": "Mohammd Salman",

            "footer_rights": "All rights reserved.",
            "footer_made_by": "Made by",

            "whatsapp_training_msg": "Hello Coach Salman, I am interested in starting online training with you. Could you please provide more details?",
            "whatsapp_collab_msg": "Hello Coach Salman, I would like to discuss a potential collaboration or partnership with you.",

            "whatsapp_subscription": "Subscriptions",
            "whatsapp_subscription_sub": "Training & nutrition plans",
            "whatsapp_collab": "Collaboration",
            "whatsapp_collab_sub": "Partnerships & sponsorships",
            "whatsapp_cta": "Contact us",
            "free_consultation": "Get a Free Consultation"
        }
    },
    ar: {
        translation: {
            "nav_home": "الرئيسية",
            "nav_sponsors": "الرعاة",
            "nav_contact": "تواصل معي",
            "sponsors_title": "رعاة نثق بهم",
            "contact_title": "انضم إلى المجتمع",
            "contact_subtitle": "تواصل معي",
            "whatsapp_label": "دردشة مباشرة",
            "nav_transformations": "تحولات",
            "btn_training": "ابدأ التمرين",
            "btn_collab": "للاعلانات والشراكات",
            "about_name": "محمد سلمان",
            "about_subtitle": "تدريب شخصي أونلاين",
            "about_title_stop": "توقف عن التمني،",
            "about_title_start": "ابدأ ",
            "about_title_doing": "بالتنفيذ",
            "about_cert": "أخصائي تغذية معتمد — كلية ليفربول",
            "about_desc": "غيّر شكل جسمك بتوجيه احترافي. سواء كنت تبحث عن حرق الدهون أو بناء كتل عضلية صافية، سأوفر لك خارطة الطريق للوصول لأفضل نسخة من نفسك.",
            "about_stat_clients": "عميل تغيرت حياتهم",
            "about_stat_years": "سنوات من الخبرة",
            "about_stat_uk": "مدرب معتمد",
            "about_tap_hint": "اضغط لتغيير الصورة",



            "client_7_name": "أسماء",
            "client_7_duration": "4 أشهر",
            "client_8_name": "رشا",
            "client_8_duration": "3 أشهر",
            "client_9_name": "شهد",
            "client_9_duration": "شهر واحد",
            "client_7_desc": "خسرت ١٥ كيلو — من ٨٥ إلى ٧٠ كيلو",
            "client_1_desc": "خسرت ١٠ كيلو — من ٨٤ إلى ٧٤ كيلو",
            "client_9_desc": "خسرت ٥ كيلو — من ٥٨ إلى ٥٣ كيلو",
            "client_8_desc": "خسارة وزن وإعادة تشكيل الجسم",


            // بيانات التحولات - عربي
            "client_1_name": "سميرة",
            "client_1_duration": "3 أشهر",
            "client_2_name": "رائد",
            "client_2_duration": "5 أشهر",
            "client_3_name": "محمد",
            "client_3_duration": "سنة كاملة",
            "client_4_name": "أسامة",
            "client_4_duration": "6 أشهر",
            "client_5_name": "خالد",
            "client_5_duration": "5 أشهر",
            "client_6_name": "أشرف",
            "client_6_duration": "شهر واحد",


            "tab_male": "ذكور",
            "tab_female": "إناث",
            "female_privacy_label": "الصور محجوبة — احتراماً للخصوصية",
            "female_card_badge": "✓ نتيجة موثقة",

            "trans_subtitle": "نتائج حقيقية",
            "trans_title": "نتائج",
            "trans_highlight": "المتدربين",
            "trans_before": "قبل",
            "trans_after": "بعد",
            "month": "شهر",
            "months": "شهور",
            "desc_fat_loss": "خسارة 8 كيلو دهون مع نظام غذائي",
            "desc_muscle_growth": "بناء عضلي وإبراز تفاصيل الجسم",
            "desc_fat_loss_journey": "رحلة مذهلة في خسارة الوزن",
            "desc_clean_bulk": "ضخامة عضلية صافية",

            "sponsors_subtitle": "الشراكات",
            "sponsors_title": "الرعاة ",
            "sponsors_highlight": "المعتمدون",
            "sponsors_description": "نتعاون مع رواد الصناعة لتقديم أفضل النتائج لك.",
            "promo_label": "عرض خاص",
            "promo_use_code": "استخدم الكود",
            "promo_for": "للحصول على خصم",
            "promo_discount": "10%",
            "promo_on_products": "على جميع منتجات شركائنا",
            "desc_myprotein": "مكملات غذائية ممتازة تدعم رياضيينا بأنقى أنواع الواي بروتين وتركيبات ما قبل التمرين.",
            "desc_squatwolf": "علامة تجارية للملابس الرياضية مخصصة للرياضيين ومحبي اللياقة البدنية، مقرها دبي.",
            "desc_ghithaa": "وجبات صحية مخصصة للرياضيين والمهتمين بالرشاقة واللياقة البدنية.",

            "contact_subtitle": "تواصل معي",
            "contact_title": "انضم إلى ",
            "contact_highlight": "مجتمعنا",
            "contact_desc": "هل أنت مستعد للبدء؟ تواصل معي عبر الواتساب للاستفسار عن التدريب أو تابع نصائحي اليومية على وسائل التواصل الاجتماعي.",
            "whatsapp_chat": "دردشة مباشرة",
            "facebook_name": "محمد سلمان",

            "footer_rights": "جميع الحقوق محفوظة.",
            "footer_made_by": "صُنع بواسطة",

            "whatsapp_training_msg": "أهلاً كوتش محمد, ممكن استفسر عن الجداول و الخطط التدريبية",
            "whatsapp_collab_msg": "أهلاً كوتش محمد، أرغب في مناقشة فرصة تعاون أو شراكة معك.",

            "whatsapp_subscription": "الاشتراكات",
            "whatsapp_subscription_sub": "برامج التدريب والتغذية",
            "whatsapp_collab": "التعاون",
            "whatsapp_collab_sub": "شراكات وإعلانات",
            "whatsapp_cta": "تواصل معنا",
            "free_consultation": "احصل على استشارة مجانية الآن"
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'ar', 
        fallbackLng: 'ar',
        interpolation: { escapeValue: false }
    });

i18n.on('languageChanged', (lng) => {
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
});

export default i18n;