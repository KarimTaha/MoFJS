export function getLocationName(id){
  switch(id) {
    case "100":
    return "الامارات العربية المتحدة"
    case "101":
    return "أبوظبي"
    case "102":
    return "دبي"
    case "103":
    return "الشارقة"
    case "104":
    return "عجمان"
    case "105":
    return "الفجيرة"
    case "106":
    return "رأس الخيمة"
    case "107":
    return "أم القيوين"
    case "108":
    return "العين"
    case "109":
    return "المنطقة الغربية"
    case "0":
    return "موقع عام"
    case "200":
    return "آسيا"
    case "201":
    return "أفغانستان - كابول"
    case "202":
    return "استراليا - كانبيرا"
    case "203":
    return "استراليا - سيدني"
    case "204":
    return "البحرين - المنامة"
    case "205":
    return "بنغلاديش - دكا"
    case "206":
    return "الصين - بكين"
    case "207":
    return "الصين - هونغ كونغ"
    case "208":
    return "الصين - تشانغهاى"
    case "209":
    return "الهند - نيودلهي"
    case "210":
    return "قنصلية الإمارات العربية المتحدة الهند - مومباي"
    case "211":
    return "أندونيسيا - جاكرتا"
    case "212":
    return "إيران - طهران"
    case "213":
    return "قنصلية الإمارات العربية المتحدة إيران - بندر عباس"
    case "214":
    return "العراق - بغداد"
    case "215":
    return "العراق - اربيل"
    case "216":
    return "اليابان - طوكيو"
    case "217":
    return "الأردن - عمان"
    case "218":
    return "كازاخستان - ألماتي"
    case "219":
    return "كازاخستان - استانا"
    case "220":
    return "كوريا الجنوبية - سيول"
    case "221":
    return "الكويت"
    case "222":
    return "لبنان - بيروت"
    case "223":
    return "ماليزيا - كوالالمبور"
    case "224":
    return "عمان - مسقط"
    case "225":
    return "باكستان - اسلام اباد"
    case "226":
    return "قنصلية الإمارات العربية المتحدة باكستان - كراتشي"
    case "227":
    return "الفلبين - مانيلا"
    case "228":
    return "قطر - الدوحة"
    case "229":
    return "روسيا - موسكو"
    case "230":
    return "قنصلية الإمارات العربية المتحدة المملكة العربية السعودية - الرياض"
    case "231":
    return "قنصلية الإمارات العربية المتحدة المملكة العربية السعودية - جدة"
    case "232":
    return "سنغافورة - سنغافورة"
    case "233":
    return "سريلانكا - كولومبو"
    case "234":
    return "سوريا - دمشق"
    case "235":
    return "تايلاند - بانكوك"
    case "236":
    return "تركيا - أنقرة"
    case "237":
    return "قنصلية الإمارات العربية المتحدة تركيا - اسطنبول"
    case "238":
    return "تركمانستان - عشق أباد"
    case "239":
    return "قنصلية الإمارات العربية المتحدة في أوزبكستان - طشقند"
    case "240":
    return "سفارة الإمارات العربية المتحدة - هانوي فيتنام"
    case "241":
    return "اليمن - صنعاء"
    case "242":
    return "أرمانيا"
    case "243":
    return "ملبورن - استراليا"
    case "244":
    return "ويلينغتون - نيوزيلاندا"
    case "245":
    return "قنصلية الامارات العربية المتحدة – الهند - كيرلا"
    case "246":
    return "سفارة الامارات العربية المتحدة - نيبال - كاتماندو"
    case "247":
    return "سفارة الامارات العربية المتحدة - منغوليا – اولان باتور"
    case "249":
    return "249: سفارة الإمارات العربية المتحدة – ماليه – المالديف"
    case "250":
    return "L250: قنصلية الإمارات العربية المتحدة – حيدر باد - الهند"
    case "300":
    return "أفريقيا"
    case "301":
    return "الجزائر - الجزائر"
    case "302":
    return "كينيا"
    case "303":
    return "ليبيا - طرابلس"
    case "304":
    return "موريتانيا - نواكشوط"
    case "305":
    return "المغرب - الرباط"
    case "306":
    return "سفارة الإمارات العربية المتحدة - أبوجا نيجيريا"
    case "307":
    return "سفارة الإمارات العربية المتحدة  - دكار في السنغال،"
    case "308":
    return "الصومال - مقديشو"
    case "309":
    return "جنوب أفريقيا - بريتوريا"
    case "310":
    return "السودان - الخرطوم"
    case "311":
    return "سوازيلاند"
    case "312":
    return "تنزانيا - دار السلام"
    case "313":
    return "تونس - تونس"
    case "314":
    return "أوغندا"
    case "315":
    return "جيبوتي"
    case "316":
    return "إثيوبيا - أديس أبابا"
    case "317":
    return "مصر - القاهرة"
    case "318":
    return "كوناكري- غينيا"
    case "319":
    return "لواندا - أنجولا"
    case "320":
    return "مابوتو - موزبيق"
    case "321":
    return "سفارة الإمارات العربية المتحدة - سيشل - فيكتوريا"
    case "322":
    return "سفارة الإمارات العربية المتحدة - غانا - اكرا"
    case "323":
    return "سفارة الامارات العربية المتحدة – تبليسي - جورجيا"
    case "324":
    return "سفارة الإمارات العربية المتحدة – تشاد – انجمينا"
    case "325":
    return "قنصلية الإمارات العربية المتحدة – لاغوس  – نيجيريا"
    case "326":
    return "قنصلية الإمارات العربية المتحدة – كيب تاون – جنوب افريقيا"
    case "327":
    return "سفارة الإمارات العربية المتحدة – باماكو – مالي"
    case "328":
    return "سفارة الإمارات العربية المتحدة – هراري – زيمبابوي"
    case "329":
    return "سفارة الإمارات العربية المتحدة – كيغالي  – رواندا"
    case "330":
    return "L330: قنصلية الإمارات العربية المتحدة – زنجبار - تنزانيا"
    case "331":
    return "L331: سفارة الإمارات العربية المتحدة – ابيدجان – ساحل العاج"
    case "332":
    return "L332: سفارة الإمارات العربية المتحدة – بورت لويس  – موريشيوس"
    case "333":
    return "L333: سفارة الإمارات العربية المتحدة – بورتونوفو – بنين"
    case "334":
    return "L334: سفارة الإمارات العربية المتحدة – انتاناناريفو – مدغشقر"
    case "400":
    return "أوروبا"
    case "401":
    return "فيينا - الوفد الدائم للطاقة"
    case "402":
    return "النمسا - فيينا"
    case "403":
    return "أذربيجان"
    case "404":
    return "سفارة الإمارات العربية المتحدة - روسيا البيضاء"
    case "405":
    return "بلجيكا - بروكسل"
    case "406":
    return "الدنمارك"
    case "407":
    return "استونيا"
    case "408":
    return "فرنسا - باريس"
    case "409":
    return "ألمانيا - برلين"
    case "410":
    return "قنصلية الإمارات العربية المتحدة ألمانيا - ميونيخ"
    case "411":
    return "سفارة الإمارات العربية المتحدة - اليونان"
    case "412":
    return "ايرلندا - دبلن"
    case "413":
    return "إيطاليا - روما"
    case "414":
    return "ايطاليا - ميلان"
    case "415":
    return "مونتينيجرو"
    case "416":
    return "هوللاند - لاهاي"
    case "417":
    return "النرويج - أوسلو"
    case "418":
    return "بولندا - وارسو"
    case "419":
    return "البرتغال - لشبونة"
    case "420":
    return "رومانيا - بوخارست"
    case "421":
    return "صربيا - بلغراد"
    case "422":
    return "إسبانيا - مدريد"
    case "423":
    return "اسبانيا - برشلونة"
    case "424":
    return "السويد - استوكهولم"
    case "425":
    return "سويسرا - جنيف"
    case "426":
    return "اوكرانيا - كييف"
    case "427":
    return "المملكة المتحدة - لندن"
    case "428":
    return "سويسرا - برن"
    case "429":
    return "بعثة الدولة بحلف الناتو / بروكسل"
    case "430":
    return "بعثة الدولة لدى مجلس الاتحاد الأوروبي - بروكسل"
    case "431":
    return "أوسلو - النرويج"
    case "432":
    return "براغ- التشيك"
    case "433":
    return "سفارة الامارات العربية المتحدة - قبرص - نيقوسيا"
    case "437":
    return "سفارة الإمارات العربية المتحدة – بودابست – هنغاريا"
    case "438":
    return "سفارة الإمارات العربية المتحدة – صوفيا – بلغاريا"
    case "439":
    return "L439: قنصلية الإمارات العربية المتحدة – بون – ألمانيا"
    case "500":
    return "أمريكا الشمالية"
    case "501":
    return "كندا - أوتاوا"
    case "502":
    return "السلفادور"
    case "503":
    return "مكسيكو سيتي"
    case "504":
    return "الولايات المتحدة الأمريكية - نيويورك"
    case "505":
    return "الولايات المتحدة الأمريكية + كندا - واشنطن العاصمة"
    case "506":
    return "الولايات المتحدة - بوسطن"
    case "507":
    return "الولايات المتحدة الأمريكية - هيوستن"
    case "508":
    return "الولايات المتحدة الأمريكية - لوس أنجلوس"
    case "509":
    return "تورونتو - كندا"
    case "510":
    return "قنصلية الامارات العربية المتحدة – الولايات المتحدة الامريكية - نيويورك"
    case "600":
    return "أمريكا الجنوبية"
    case "601":
    return "سفارة الإمارات العربية المتحدة - الأرجنتين"
    case "602":
    return "البرازيل - برازيليا"
    case "603":
    return "البرازيل - ساو باولو"
    case "604":
    return "شيلي"
    case "605":
    return "بوغوتا"
    case "606":
    return "كوبا - هافانا"
    case "607":
    return "سفارة الامارات العربية المتحدة - بيرو - ليما"
    case "609":
    return "L609: سفارة الإمارات العربية المتحدة – سان خوسيه  – كوستاريكا"
    case "900":
    return "مواقع أخرى"
    case "800":
    return "كينيا – مكتب التأشيرات"
    case "801":
    return "سيرلانكا – مكتب التأشيرات"
    case "802":
    return "اندونيسيا – مكتب التأشيرات"
    case "803":
    return "اليمن – مكتب التأشيرات"
    case "804":
    return "بنغلاديش – مكتب التأشيرات"
    case "805":
    return "السنغال – مكتب التأشيرات"
    case "806":
    return "نيجيريا – مكتب التأشيرات"
    case "807":
    return "مصر – مكتب التأشيرات"
    case "808":
    return "لبنان – مكتب التأشيرات"
    case "809":
    return "تونس – مكتب التأشيرات"
    case "810":
    return "ليبيا – مكتب التأشيرات"
    case "811":
    return "مكتب تأشيرات -نيودلهي"
    case "812":
    return "مكتب تأشيرات - اسلام اباد"
    case "813":
    return "مكتب تأشيرات-بومباي"
    case "814":
    return "مكتب تأشيرات -كيرلا"
    case "815":
    return "مكتب تأشيرات- كراتشي"



    default:
    return id;
  }
}
