export function getSegmentName(name) {
  switch (name) {
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

export function getLine(name) {
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
      return "-";
  }
}

export function getTransferName(name) {
  var end = name.substring(4, name.length);
  switch (end) {
    case "01":
      return "حزمة ١";
    case "02":
      return "حزمة ٢";
    case "03":
      return "حزمة ٣";
    case "04":
      return "حزمة ٤";
    case "05":
      return "حزمة ٥";
    case "06":
      return "حزمة ٦";
    case "07":
      return "حزمة ٧";
    case "08":
      return "حزمة ٨";
    case "09":
      return "حزمة ٩";
    case "10":
      return "حزمة ١٠";
    case "11":
      return "حزمة ١١";
    case "12":
      return "حزمة ١٢";
    case "13":
      return "حزمة ١٣";
    case "14":
      return "حزمة ١٤";
    case "15":
      return "حزمة ١٥";
    case "16":
      return "حزمة ١٦";
    case "17":
      return "حزمة ١٧";
    case "18":
      return "حزمة ١٨";
    case "19":
      return "حزمة ١٩";
    case "20":
      return "حزمة ٢٠";
    default:
      return "Cannot match transfer";
  }
}

export function getEntityName(name) {
  switch (name) {
    case "M102":
      return "102: وزارة الطاقة والبنية التحتية";
    case "M103":
      return "103: وزارة الثقافة والشباب";
    case "M104":
      return "104: وزارة الدولة لشئون الرئاسة";
    case "M105":
      return "105: وزارة الخارجية والتعاون الدولي";
    case "M106":
      return "106: وزارة الداخلية.";
    case "M107":
      return "107: وزارة الدفاع";
    case "M108":
      return "108: جهاز الامن";
    case "M109":
      return "109: وزارة التربية والتعليم العالى";
    case "M110":
      return "110: وزارة الصحة ووقاية المجتمع";
    case "M111":
      return "111: وزارة الصناعة والتكنولوجيا المتقدمة";
    case "M112":
      return "112: وزارة المالية";
    case "M113":
      return "113: وزارة الاقتصاد";
    case "M118":
      return "118: وزارة الموارد البشرية والتوطين";
    case "M120":
      return "120: وزير الدولة – معالى جبر محمد السويدى";
    case "M121":
      return "121: وزارة العدل";
    case "M122":
      return "122: وزارة التغير المناخي والبيئة";
    case "M126":
      return "126: وزارة تنمية المجتمع";
    case "M129":
      return "129: وزارة الدولة لشئون المجلس الوطني";
    case "M132":
      return "132: وزارة الدولة - معالى ميثاء الشامسي";
    case "M133":
      return "133: مكتب وزير الدولة - سلطان الجابر";
    case "M234":
      return "234: مكتب الشؤون السياسية لنائب رئيس الدولة";
    case "M135":
      return "135: وزارة دولة (35) زكي أنور نسيبة";
    case "M136":
      return "136: وزارة الدولة للتسامح";
    case "M137":
      return "137: وزارة الدولة لشوؤن الدفاع";
    case "M143":
      return "143: وزارة الدولة 43 - معالي احمد علي الصائغ";
    case "M198":
      return "198: مصروفات اتحادية أخرى";
    case "M348":
      return "348: المكتب التنفيذي لمواجهة غسل الاموال وتمويل الارهاب";
    case "M351":
      return "351: جامعة الامارات العربية المتحدة";
    case "M352":
      return "352: كليات التقنية العليا";
    case "M353":
      return "353: جامعة زايد";
    case "M354":
      return "354: اللجنة الاستراتيجية لمواجهة غسيل الأموال و تمويل الارهاب - وزارة الخارجية";
    case "M355":
      return "355: اللجنة الاستراتيجية لمواجهة غسيل الأموال و تمويل الارهاب - وزارة العدل";
    case "M258":
      return "258: الهيئة العامة للرياضة";
    case "M364":
      return "364: صندوق الزكاة";
    case "M366":
      return "366: اللجنة الاستراتيجية لمواجهة غسيل الأموال و تمويل الارهاب - وزارة الاقتصاد";
    case "M370":
      return "370: هيئة الاوراق المالية والسلع";
    case "M274":
      return "274: مكتب وزير التسامح";
    case "M277":
      return "277: هيئة الامارات للهوية";
    case "M379":
      return "379: الهيئة العامة لتنظيم قطاع الاتصالات";
    case "M385":
      return "385: المجلس الإتحادي للتركيبة السكانية";
    case "M286":
      return "286: وكالة الإمارات للفضاء";
    case "M296":
      return "296: الهيئة العامة للشئون الإسلامية والأوقاف";
    case "M297":
      return "297: الهيئة الاتحادية للموارد البشرية الحكومية";
    case "M115":
      return "115: مكتب رئاسة مجلس الوزراء";
    case "M116":
      return "116: الامانة العامة لمجلس الوزراء";
    case "M117":
      return "117: ديوان المحاسبة";
    case "M245":
      return "245: مؤسسة الامارات للتعليم المدرسي";
    case "M246":
      return "246: مؤسسة الامارات للخدمات الصحية";
    case "M247":
      return "247: وكالة انباء الامارات";
    case "M250":
      return "250: المجلس الوطني الاتحادي";
    case "M256":
      return "256: المركز الاتحادى للمعلومات الجغرافية";
    case "M267":
      return "267: مجلس الامارات للتوازن بين الجنسين";
    case "M268":
      return "268: المكتب الإعلامي لحكومة دولة الامارات";
    case "M278":
      return "278: المجلس الاعلى للامومة والطفولة";
    case "M280":
      return "280: اكاديمية الامارات الدبلوماسية";
    case "M284":
      return "284: المركز الوطني للمناصحة";
    case "M306":
      return "M306";
    case "M363":
      return "363: اللجنة الاستراتيجية لمواجهة غسيل الأموال و تمويل الارهاب - الجمارك";
    case "M338":
      return "338: الهيئة الاتحادية للضرائب";

    default:
      return "Cannot find Entity";
  }
}

export function numFormat(number) {
  number += "";
  if (number.includes(".")) {
    return (
      numFormat(number.substring(0, number.indexOf("."))) +
      "." +
      number.substring(number.indexOf(".") + 1, number.indexOf(".") + 2)
    );
  }
  if (number.length < 4) {
    return number;
  } else {
    return (
      numFormat(number.substring(0, number.length - 3)) +
      "," +
      numFormat(number.substring(number.length - 3, number.length))
    );
  }
}

export function getStageNumber(username) {
  username = username.toLowerCase();
  switch (username) {
    case "admin":
      return 5;
    case "whahmed":
      return 3;
    case "mobadmin3":
      return 3;
    case "mobadmin4":
      return 4;
    case "mobadmin5":
      return 5;
    case "mobadmin6":
      return 6;
    case "mobadmin7":
      return 7;
    case "karim.taha":
      return 4;
    case "karimtaha":
      return 3;
    case "mohammadyasser":
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
      return null;
  }
}

export function getStageName(number) {
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

export function getStageNameEN(number) {
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

export function getFormName(number) {
  number += "";
  switch (number) {
    case "3":
      return "Transfers_Stage_3";
    case "4":
      return "Transfers_Stage_4";
    case "5":
      return "Transfers_Stage_5";
    case "6":
      return "Transfers_Stage_6";
    case "7":
      return "Transfers_Stage_7";
    default:
      return "TransfersKarim";
  }
}

export function transferType(name) {
  var start = name.substring(0, 2);
  if (start === "PF" && name.substring(4, name.length) > 10) {
    return "PFT1";
  }
  switch (start) {
    case "NF":
      return "NFT";
    case "AF":
      return "AFT";
    case "PF":
      return "PFT";
    case "MP":
      return "MPFT";
    case "MF":
      return "MFT";
    default:
      return "Transfer type not matched";
  }
}

export function getRuleName(stageNum) {
  stageNum += "";
  switch (stageNum) {
    case "3":
      return "Stage 3 rule";
    case "4":
      return "Stage 4 rule";
    case "5":
      return "Stage 5 rule";
    case "6":
      return "Stage 6 rule";
    case "7":
      return "Stage 7 rule";
    default:
  }
}

export function getTransferTypeArabic(name) {
  switch (name) {
    case "NFT":
      return "عادية";
    case "PFT":
      return "مشاريع";
    case "PFT1":
      return "مشاريع";
    case "MFT":
      return "بين الوزارات";
    case "MPFT":
      return "مشاريع بين الوزارات";
    case "AFT":
      return "دعم إضافي";

    default:
      return "Cannot match transfer type";
  }
}
