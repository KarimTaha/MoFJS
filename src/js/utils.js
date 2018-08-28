export function getSegmentName(name){
  switch(name) {
    case "TS01":
    return "مناقلة ١";
    case "TS02":
    return "مناقلة ٢";
    case "TS03":
    return "مناقلة ٣";
    case "TS04":
    return "مناقلة ٤";
    case "TS05":
    return "مناقلة ٥";
    case "TS06":
    return "مناقلة ٦";
    case "TS07":
    return "مناقلة ٧";
    case "TS08":
    return "مناقلة ٨";
    case "TS09":
    return "مناقلة ٩";
    case "TS10":
    return "مناقلة ١٠";

    default:
    return "Cannot match segment";
  }
}

export function getLine(name){
  switch (name) {
    case "LI01":
    return "1";
    case "LI02":
    return "2";
    case "LI03":
    return "3";
    case "LI04":
    return "4";
    case "LI05":
    return "5";
    case "LI06":
    return "6";
    case "LI07":
    return "7";
    case "LI08":
    return "8";
    case "LI09":
    return "9";
    default:
    return "-"
  }
}

export function getTransferName(name){
  switch(name) {
    case "NFT001":
    return "حزمة ١";
    case "NFT002":
    return "حزمة ٢";
    case "NFT003":
    return "حزمة ٣";
    case "NFT004":
    return "حزمة ٤";
    case "NFT005":
    return "حزمة ٥";
    case "NFT006":
    return "حزمة ٦";
    case "NFT007":
    return "حزمة ٧";
    case "NFT008":
    return "حزمة ٨";
    case "NFT009":
    return "حزمة ٩";
    case "NFT010":
    return "حزمة ١٠";
    default:
    return "Cannot match transfer";
  }
}

export function getEntityName(name){
  switch(name) {
    case "M04":
    return "04: وزارة الدولة لشئون الرئاسة"
    case "M05":
    return "05: وزارة الخارجية والتعاون الدولي"
    case "M06":
    return "06: وزارة الداخلية."
    case "M07":
    return "07: وزارة الدفاع"
    case "M08":
    return "08: جهاز الامن"
    case "M09":
    return "09: وزارة التربية والتعليم"
    case "M10":
    return "10: وزارة الصحة ووقاية المجتمع"
    case "M12":
    return "12: وزارة المالية"
    case "M13":
    return "13: وزارة الاقتصاد"
    case "M14":
    return "14: وزارة الطاقة"
    case "M16":
    return "16: وزارة التجارة الخارجية"
    case "M18":
    return "18: وزارة الموارد البشرية والتوطين"
    case "M19":
    return "19: وزارة تطوير البنية التحتية"
    case "M21":
    return "21: وزارة العدل"
    case "M22":
    return "22: وزارة التغير المناخي والبيئة"
    case "M23":
    return "23: وزارة التنمية و التعاون الدولي"
    case "M26":
    return "26: وزارة تنمية المجتمع"
    case "M28":
    return "28: وزارة الثقافة وتنمية المعرفة"
    case "M29":
    return "29: وزارة الدولة لشئون المجلس الوطني"
    case "M32":
    return "32: معالي ميثاء الشامسي"
    case "M33":
    return "33: وزارة الدولة _ 2"
    case "M35":
    return "35: وزارة الدولة - معالى راشد بن فهد"
    case "M36":
    return "36: وزارة الدولة للتسامح"
    case "M37":
    return "37: وزارة الدولة لشوؤن الدفاع"
    case "M98":
    return "98: مصروفات اتحادية أخرى"
    case "M17":
    return "17: ديوان المحاسبة"
    case "M34":
    return "34: وزارة الدولة 3"
    case "M38":
    return "الهيئة الاتحادية للضرائب"
    case "M50":
    return "50: المجلس الوطني الاتحادي"
    case "M51":
    return "51: جامعة الامارات العربية المتحدة"
    case "M52":
    return "52: كليات التقنية العليا"
    case "M53":
    return "53: جامعة زايد"
    case "M57":
    return "57: الهيئة الاتحادية للكهرباء والماء"
    case "M58":
    return "58: الهيئة العامة لرعاية الشباب والرياضة"
    case "M60":
    return "60: الهلال الأحمر"
    case "M61":
    return "61: صندوق الزواج"
    case "M62":
    return "62: برنامج الشيخ زايد للاسكان"
    case "M64":
    return "64: صندوق الزكاة"
    case "M70":
    return "70: هيئة الاوراق المالية والسلع"
    case "M72":
    return "72: هيئة المؤهلات الوطنية"
    case "M73":
    return "73: الهيئة الاتحادية للمواصلات البرية و البحرية"
    case "M74":
    return "74: مكتب وزير التسامح"
    case "M75":
    return "75: هيئة التأمين"
    case "M76":
    return "76: اللجنة الوطنية للمعارض والمؤتمرات"
    case "M77":
    return "77: هيئة الامارات للهوية"
    case "M78":
    return "78: المجلس الأعلى للأمومة والطفولة"
    case "M79":
    return "79: الهيئة العامة لتنظيم قطاع الاتصالات"
    case "M80":
    return "80: أكاديمية الإمارات الدبلوماسية"
    case "M81":
    return "81: الهيئة الاتحادية للتنافسية والإحصاء"
    case "M85":
    return "85: المجلس الإتحادي للتركيبة السكانية"
    case "M86":
    return "86: وكالة الإمارات للفضاء"
    case "M87":
    return "87: هيئة تنمية وتوظيف الموارد البشرية الوطنية"
    case "M89":
    return "89: معهد التدريب والدراسات القضائية"
    case "M90":
    return "90: اتحاد غرف التجارة والصناعة"
    case "M91":
    return "91: المركز الوطني للإحصاء"
    case "M92":
    return "92: المجلس الوطني للسياحة والآثار"
    case "M93":
    return "93: الهيئة الاتحادية للجمارك"
    case "M94":
    return "94: هيئة الامارات للمواصفات والمقاييس"
    case "M95":
    return "95: المجلس الوطني للإعلام"
    case "M96":
    return "96: الهيئة العامة للشئون الإسلامية والأوقاف"
    case "M97":
    return "97: الهيئة الاتحادية للموارد البشرية الحكومية"

    default:
    return "Cannot find Entity";
  }
}

export function numFormat(number){
  number += "";
  if(number.length <4){
    return number;
  }
  else{
    return numFormat(number.substring(0,number.length-3))+","+numFormat(number.substring(number.length-3,number.length));
  }
}

export function getStageNumber(username){
  switch(username){
    case "karim.taha":
    return 5;
    case "mohamed.nasser":
    return 4;
    case "aaelshamy":
    return 3;
    case "afhegazi":
    return 3;
    case "naaljagbeer":
    return 3;
    case "mialhajri":
    return 4;
    case "aasharafi":
    return 4;
    case "sralyateem":
    return 5;
    case "yalkhoori":
    return 6;
    default:
    return 3;
  }
}

export function getStageName(number){
  number += "";
  switch (number) {
    case "1":
    return "المرحلة الاولى - الجهة الاتحادية";
    case "2":
    return "المرحلة الثانية - فريق الميزانية";
    case "3":
    return "المرحلة الثالثة - فريق الميزانية - مشرفين";
    case "4":
    return "المرحلة الرابعة - مدير إدارة الميزانية";
    case "5":
    return "المرحلة الخامسة - وكيل الوزارة المساعد";
    case "6":
    return "المرحلة السادسة - وكيل وزارة";
    case "7":
    return "المرحلة السابعة - وزير";
    case "8":
    return "المرحلة الثامنة - اعتمدت";
    case "9":
    return "المرحلة التاسعة - ارسلت الى النظام المالي";
    default:
    return "Cannot match stage number to get stage name";
  }
}

export function getStageNameEN(number){
  number += "";
  switch (number) {
    case "1":
    return "Stage 1 - Working";
    case "2":
    return "Stage 2 - Budget Team";
    case "3":
    return "Stage 3 - Budget Team - Admins";
    case "4":
    return "Stage 4 - Budget Department Head";
    case "5":
    return "Stage 5 - Assistant Undersecretary";
    case "6":
    return "Stage 6 - Undersecretary";
    case "7":
    return "Stage 7 - Minister";
    case "8":
    return "Stage 8 - Signed Off";
    case "9":
    return "Stage 9 - Posted to FMIS";
    default:
    return "Cannot match stage number to get stage name";
  }
}

export function getFormName(number){
  number += "";
  switch (number) {
    case "2":
    return "NFT-Transfers Karim";
    case "3":
    return "NFT-Transfers Karim";
    case "4":
    return "NFT-Transfers Karim";
    case "5":
    return "NFT-Transfers Karim";
    case "6":
    return "NFT-Transfers Karim";
    case "7":
    return "NFT-Transfers Karim";
    default:
    return "cannot match stage number to get form name";
  }
}
