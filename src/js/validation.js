export function getValidationMessage(id){
  switch(id) {
    case "13":
    return "Warning - Projects Budget Transfer - MOF Approval Required  تحذير- مناقلة المالية للمشاريع - موافقة وزارة المالية مطلوبة"
    case "20":
    return "Warning -Transfer Between Different Account Groups - Approval Required تحذير - مناقلة بين مجموعات حسابية مختلفة - الموافقة مطلوبة"
    case "21":
    return "Warning - Transfer between Different Strategic Objectives - Approval Required تحذير - مناقلة بين أهداف استراتيجية مختلفة - الموافقة مطلوبة"
    case "22":
    return "Warning - Transfer Between Different Programs - Approval Required تحذير - مناقلة بين برامج مختلفة - الموافقة مطلوبة"
    case "23":
    return "Warning - Location not allowed as Destination  خطأ - الموقع غير مسموح به كهدف"
    case "24":
    return "Warning -  Location  not allowed as Source خطأ - الموقع غير مسموح به كمصدر"
    case "25":
    return "Warning - Activity not allowed as Destination خطأ - النشاط غير مسموح به كهدف"
    case "26":
    return "Warning -  Activity not allowed as Source خطأ - النشاط غير مسموح به كمصدر"
    case "27":
    return "Warning - Account not allowed as Destination خطأ - الحساب غير مسموح به كهدف"
    case "28":
    return "Warning - Account not allowed as Source خطأ - الحساب غير مسموح به كمصدر"
    case "29":
    return "Warning - Transfer exceeds Ceiling on Total-Ministry Level- Approval Required تحذير - تم تجاوز سقف المناقلات على مستوى الوزارة / الجهة - موافقة وزارة المالية مطلوبة "
    case "30":
    return "Warning - Transfer exceeds Ceiling on Total-SO Level- Approval Required تحذير - تم تجاوز سقف المناقلات على مستوى الهدف الإستراتيجي - موافقة وزارة المالية مطلوبة"
    case "31":
    return "Warning - Transfer exceeds Ceiling on Total-PRog Level- Approval Required تحذير - تم تجاوز سقف المناقلات على مستوى البرنامج - موافقة وزارة المالية مطلوبة"
    case "32":
    return "Warning - Transfer exceeds percentage or amount limitation on Expense Total-Activity Level- Approval Required"
    case "33":
    return "Warning - One of the Source combination was used as Target in Addition Fund Transfer"
    case "34":
    return "Warning - One of the Source combination was used as Target in Ministry Fund Transfer"
    case "35":
    return "Warning - One of the Target combination was used as Source in Ministry Fund Transfer"
    case "36":
    return "Warning - Source combination was used as Target in previous transactions تحذير - توليفة المصدر استخدمت من قبل كهدف في مناقلة سابقة"
    case "37":
    return "Warning - Target combination was used as Source in previous transactions تحذير - توليفة الهدف استخدمت من قبل كمصدر في مناقلة سابقة"
    case "38":
    return "Warning - Source Combination received Additional Fund before تحذير - توليفة المصدر حصلت من قبل على دعم إضافي"
    case "882":
    return "Error - Target value is missing"
    case "883":
    return "Error - The activity selected is not valid as a Target activity النشاط المستخدم محظور كهدف"
    case "884":
    return "Error - The activity selected in not valid for the Source activity النشاط المستخدم محظور كمصدر"
    case "885":
    return "Error - Transfer not allowed from accounts that got an \"Additional fund\"  for a period determined by MOF خطأ - المناقلة غير مسموح بها من الحسابات التي بها \"مناقلة اضافية\" في الفترة المحددة من وزارة المالية"
    case "886":
    return "Error - Click Save Button on the dataform to validate again خطأ - اضغط على زر الحفظ"
    case "887":
    return "Error - Refresh From FMIS Required خطأ - التحديث من نظام معلومات الإدارة المالية مطلوب"
    case "888":
    return "Error - One of the dimension missing for valid Combination for Projects"
    case "889":
    return "Error - Two of the dimension missing for valid Combination for Projects"
    case "890":
    return "Error - Three of the dimension missing for valid Combination for Projects"
    case "891":
    return "Error - Attachment Required for this type of Transaction خطأ - المرفق مطلوب لهذا النوع من المعاملات"
    case "892":
    return "Error -This combination is not enabled in FMIS خطأ - التوليفة غير مفعلة في النظام المالي"
    case "893":
    return "Error - Data is missing proper combination خطأ - البيانات تنقصها التوليفة الصحيحة"
    case "894":
    return "Error - Account & Location Missing from valid combination  خطأ - الحساب والموقع مفقود من التوليفة الصالحة"
    case "895":
    return "Error - Activity & Location Missing from valid combination خطأ - النشاط والموقع مفقود من التوليفة الصالحة"
    case "896":
    return "Error - Account & Activity Missing from valid combination خطأ - الحساب والنشاط مفقود من التوليفة الصالحة"
    case "897":
    return "Error - Location Missing from valid combination خطأ - الموقع مفقود من التوليفة الصالحة"
    case "898":
    return "Error - Account Missing from valid combination خطأ - الحساب مفقود من التوليفة الصالحة"
    case "899":
    return "Error - Activity Missing from valid combination خطأ - النشاط مفقود من التوليفة الصالحة"
    case "977":
    return "Error - Source value cannot exceed the Fund Transfer Limit % خطأ - لا يمكن أن تتجاوز قيمة المصدر النسبة المئوية لحد المناقلات"
    case "978":
    return "Error - Source value cannot exceed the Fund Transfer Limit Value خطأ - لا يمكن أن تتجاوز قيمة المصدر قيمة حد المناقلات"
    case "987":
    return "Error - No Funds Available for the Source خطأ - لا توجد اعتمادات كافية في توليفة المصدر"
    case "988":
    return "Error - You cannot transfer funds to 219999 Account خطأ - لا يمكنك عمل مناقلة الي الحساب رقم 219999"
    case "989":
    return "Error - You cannot transfer funds from 219999 to other than group 21 Accounts  خطأ - لا يمكنك عمل مناقلة من الحساب رقم 219999 الى حسابات اخري خارج مجموعة 21"
    case "990":
    return "Error - One of the selected Account(s) and Location(s) combination defined as source which was used in previous year Additional Fund  خطأ - احدى توليفة الحسابات والمواقع معرفة كمصدر التي تم استخدامها من قبل في المناقلات الاضافية السنة الماضية"
    case "991":
    return "Error - Source cannot be more than Approved Budget خطأ - المصدر لا يمكن ان يكون اكبر من الميزانية المعتمدة"
    case "992":
    return "Error - Source cannot be more than Funds Available خطأ - المصدر لا يمكن ان يكون اكبر من الاعتمادات المتاحة"
    case "993":
    return "Error - Target combination was used as Source in previous transactions خطأ - توليفة الهدف استخدمت من قبل كمصدر في مناقلة سابقة"
    case "994":
    return "Error - Source combination was used as Target in previous transactions خطأ - توليفة المصدر استخدمت من قبل كهدف في مناقلة سابقة"
    case "995":
    return "Error - Net Transfer should be always Zero خطأ - صافي المناقلة يجب ان يكون دائما يساوي صفر"
    case "996":
    return "Error - Cannot have values for both Source & Target for vaild combination خطأ - لا يمكن للتوليفة الواحدة أن تكون مصدر وهدف في آن واحد"
    case "997":
    return "Error - Source & Destination both are empty  خطأ - المصدر والهدف كلاهما فارغ"
    case "998":
    return "Error - Please enter positive value for Destination خطأ - الرجاء ادخال قيم موجبة للهدف"
    case "999":
    return "Error - Please enter positive value for Source خطأ - الرجاء ادخال قيم موجبة للمصدر"
    case "1000":
    return "Error - Please specify Additional Fund amount خطأ: الرجاء تحديد قيمة المناقلة الاضافية"


    default:
    return id;
  }
}
