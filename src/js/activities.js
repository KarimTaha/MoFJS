export function getActivityName(entity, type, id){
  id += "";
  if(id.length == 0){
    return "";
  }
  if(type === "MFT" || type === "MPFT" || type === "PFT"){
    if(entity.substring(1,3) < 10){
      id = '17'+entity.substring(1,3)+id.substring(1,id.length);
    }
    else{
      id = '17'+entity.substring(1,3)+'0'+id.substring(2,id.length);
    }
  }
  else{
    id = '17'+entity.substring(1,3)+id.substring(1,id.length);
  }
  switch(id) {
    case "171201010001":
    return "171201010001: اعداد الميزانية العامة للاتحاد وتطوير آليات إعدادها وفقا لتنبؤات ا"
    case "171201010002":
    return "171201010002: إعداد تنبؤات الإيرادات العامة للاتحاد وتطوير آلياتها"
    case "171201010003":
    return "171201010003: الاستئناس برأي المواطنين في تخطيط الميزانية العامة للاتحاد"
    case "171201010000":
    return "171201010000: تطوير التخطيط المالي الاستراتيجي في الحكومة الاتحادية"
    case "171201020001":
    return "171201020001: إعداد واعتماد مشاريع ميزانيات الجهات الاتحادية (خدمة ذات أولوية)"
    case "171201020002":
    return "171201020002: الموافقة على الاعتمادات الإضافية (خدمة ذات أولوية)"
    case "171201020003":
    return "171201020003: نقل المخصصات المالية بين الأبواب والبرامج"
    case "171201020004":
    return "171201020004: تعديل هيكل برامج الميزانية"
    case "171201020005":
    return "171201020005: إصدار ونشر الميزانية العامة للدولة"
    case "171201020000":
    return "171201020000: إعداد الميزانية العامة"
    case "171201030001":
    return "171201030001: إعداد واعتماد تنبؤات إيرادات الحكومة الإتحادية"
    case "171201030002":
    return "171201030002: تجديد اعتماد تنبؤات إيرادات الحكومة الاتحادية"
    case "171201030003":
    return "171201030003: فرض الرسوم أو تعديلها أو الإعفاء منها (خدمة ذات أولوية)"
    case "171201030004":
    return "171201030004: الإعفاء من كل أو بعض الديون والمستحقات المطلوبة للدولة"
    case "171201030005":
    return "171201030005: تحصيل إيرادات الحكومة الإتحادية"
    case "171201030006":
    return "171201030006: رد الإيرادات المستحقة للمتعاملين (خدمة ذات أولوية)"
    case "171201030007":
    return "171201030007: الرقابة على إيرادات الحكومة الاتحادية"
    case "171201030008":
    return "171201030008: تسليم أدوات تحصيل الإيرادات للجهات الإتحادية"
    case "171201030009":
    return "171201030009: استعاضة أدوات تحصيل الإيرادات للجهات الاتحادية"
    case "171201030000":
    return "171201030000: تنبؤات الإيرادات وتحصيلها والرقابة عليها"
    case "171201040001":
    return "171201040001: تنمية وتنويع مصادر الإيرادات العامة للاتحاد"
    case "171201040002":
    return "171201040002: تقييم السيناريوهات المالية وتحديد فجوات الاستدامة المالية"
    case "171201040003":
    return "171201040003: ادارة المخاطر المالية ومراقبتها"
    case "171201040004":
    return "171201040004: ادارة الدين العام"
    case "171201040005":
    return "171201040005: إنشاء الاحتياطي النقدي الاتحادي"
    case "171201040006":
    return "171201040006: تحليل وتقييم فرص خفض النفقات وتقدير مستهدفات الاحتياطات والعوائد و"
    case "171201040007":
    return "171201040007: إدارة الاستثمارات الحكومية"
    case "171201040000":
    return "171201040000: استدامة المالية العامة وإدارة المخاطر"
    case "171201050001":
    return "171201050001: صندوق الابتكار"
    case "171201050002":
    return "171201050002: برنامج المسرع"
    case "171201050003":
    return "171201050003: ادارة الموازنة العامة للابتكار"
    case "171201050000":
    return "171201050000: تطوير البيئة الداعمة للابتكار في الحكومة الاتحادية"
    case "171201060001":
    return "171201060001: تحديد متطلبات ومبادئ إرشادية موحّدة للإبلاغ عن البيانات"
    case "171201060002":
    return "171201060002: تقييم الثغرات في البيانات والإجراءات وأدوات الإبلاغ"
    case "171201060003":
    return "171201060003: التواصل مع الجهات المعنية بالدولة لمشاركة البيانات ذات الصلة"
    case "171201060000":
    return "171201060000: تطوير إطار عمل لجمع بيانات وعمليات وأدوات التخطيط المالي"
    case "171201070001":
    return "171201070001: تأهيل موظفي الحكومة الاتحادية عبر برنامج المدير المالي التخصصي"
    case "171201070002":
    return "171201070002: استقطاب وتأهيل اقتصاديين في الحكومة الاتحادية"
    case "171201070003":
    return "171201070003: إنشاء برنامج تدريبي لبناء القدرات المالية والمحاسبية في الجهات الا"
    case "171201070000":
    return "171201070000: بناء القدرات المالية والاقتصادية في الحكومة الاتحادية"
    case "171201080001":
    return "171201080001: تدريب المختصين بالجهات الاتحادية على تنفيذ الإجراءات والأنظمة (خدم"
    case "171201080002":
    return "171201080002: إصدار وتوفير الأدلة الإسترشادية لأنظمة وإجراءات العمل في الحكومة ا"
    case "171201080000":
    return "171201080000: التدريب وتوفير أدلة العمل"
    case "171202010001":
    return "171202010001: تحسين وتطوير آليات متابعة تنفيذ الميزانية"
    case "171202010002":
    return "171202010002: تطوير النظام المالي الإلكتروني للحكومة الاتحادية"
    case "171202010003":
    return "171202010003: تحسين جودة البيانات المتعلقة بتنفيذ ومراقبة الميزانية"
    case "171202010000":
    return "171202010000: تطوير آليات مبتكرة و فعالة لمتابعة تنفيذ المصروفات العامة للاتحاد"
    case "171202020001":
    return "171202020001: إعداد ورفع الحساب الختامي للحكومة الاتحادية (خدمة ذات أولوية)"
    case "171202020002":
    return "171202020002: إصدار ونشر الحساب الختامي للحكومة الاتحادية"
    case "171202020003":
    return "171202020003: فتح الحسابات الصفرية للهيئات الاتحادية المستقلة"
    case "171202020004":
    return "171202020004: فتح الحسابات المصرفية لدى البنوك العاملة بالدولة"
    case "171202020005":
    return "171202020005: سداد الالتزامات المالية للحكومة الاتحادية"
    case "171202020006":
    return "171202020006: تعديل الدفعات المالية للجهات الاتحادية"
    case "171202020007":
    return "171202020007: تقديم الدعم الفني المحاسبي للجهات الإتحادية (خدمة ذات أولوية)"
    case "171202020008":
    return "171202020008: إصدار التقرير المالي الدوري لمتابعة تنفيذ الميزانية"
    case "171202020000":
    return "171202020000: تنفيذ الميزانية العامة وإعداد الحساب الختامي"
    case "171202030001":
    return "171202030001: إعتماد التطبيق أو الربط على الأنظمة المالية في الجهات الإتحادية"
    case "171202030002":
    return "171202030002: تعديل الإجراءات المالية في الأنظمة الإلكترونية"
    case "171202030003":
    return "171202030003: تقديم الدعم الفني لمستخدمي الأنظمة المالية في الجهات الاتحادية (خد"
    case "171202030004":
    return "171202030004: منح صلاحيات إستخدام الأنظمة المالية للجهات الحكومية"
    case "171202030005":
    return "171202030005: توفير رخص نظم التشغيل والبرامج الأساسية للحكومة الاتحادية"
    case "171202030006":
    return "171202030006: تجديد رخص نظم التشغيل والبرامج الأساسية للحكومة الاتحادية"
    case "171202030007":
    return "171202030007: استضافة الأنظمة الإلكترونية للجهات الاتحادية"
    case "171202030008":
    return "171202030008: تقديم الدعم الفني لأنظمة الجهات الاتحادية التي تستضيفها الوزارة"
    case "171202030000":
    return "171202030000: خدمات الأنظمة المالية"
    case "171202040001":
    return "171202040001: تحصيل الإيرادات العامة للدولة والرقابة عليها"
    case "171202040002":
    return "171202040002: تطوير وسائل الرقابة وأنظمة تحصيل الإيرادات العامة للاتحاد"
    case "171202040000":
    return "171202040000: تطوير آليات مبتكرة وفعالة لمتابعة تنفيذ تحصيل الإيرادات العامة للا"
    case "171202050001":
    return "171202050001: إضافة رسوم الخدمات الجديدة في نظام الدرهم الإلكتروني"
    case "171202050002":
    return "171202050002: تحويل إيرادات الجهات الخارجية التي تستخدم نظام الدرهم الإلكتروني ("
    case "171202050003":
    return "171202050003: اعتماد التطبيق أو الربط على نظام الدرهم الإلكتروني في الجهات المعن"
    case "171202050004":
    return "171202050004: منح صلاحيات إستخدام نظام الدرهم الإلكتروني للجهات المعنية"
    case "171202050000":
    return "171202050000: خدمات الدرهم الإلكتروني"
    case "171202060001":
    return "171202060001: إدارة الأصول الحكومية"
    case "171202060002":
    return "171202060002: إدارة التدفقات النقدية"
    case "171202060000":
    return "171202060000: إدارة المركز المالي والتدفقات النقدية للحكومة الاتحادية"
    case "171202070001":
    return "171202070001: بناء القدرات الداخلية لمراجعة عمليات الجهات الاتحادية"
    case "171202070002":
    return "171202070002: تأسيس كيان مشترك مع مكتب رئاسة مجلس الوزراء لمراجعة أداء الجهات ال"
    case "171202070003":
    return "171202070003: استحداث إطار خاص لعكس نتائج تنفيذ الميزانية والأداء السابق على الم"
    case "171202070000":
    return "171202070000: تطوير اطار عمل مع مكتب رئاسة مجلس الوزراء لتقارير وتقييم اداء الجه"
    case "171202080001":
    return "171202080001: تسجيل الموردين في سجل الموردين الاتحادي"
    case "171202080002":
    return "171202080002: تجديد تسجيل الموردين في سجل الموردين الاتحادي (خدمة ذات أولوية)"
    case "171202080003":
    return "171202080003: البت في تظلمات الموردين على الجهات الاتحادية (خدمة ذات أولوية)"
    case "171202080004":
    return "171202080004: الرد على إستفسارات الجهات الإتحادية المتعلقة بالمدفوعات والرواتب و"
    case "171202080000":
    return "171202080000: خدمات الموردين والرد على الإستفسارات المالية"
    case "171203010001":
    return "171203010001: انتداب وتعيين المواطنين في المؤسسات والمنظمات المالية الدولية"
    case "171203010002":
    return "171203010002: الاستفادة من المنظمات الدولية لخدمة اقتصاد الدولة."
    case "171203010003":
    return "171203010003: التزام الدولة بالمتطلبات العالمية للشفافية وتبادل المعلومات الضريب"
    case "171203010000":
    return "171203010000: تنمية وتعزيز العلاقات مع المؤسسات والمنظمات المالية الدولية"
    case "171203020001":
    return "171203020001: توقيع اتفاقيات تجنب الازدواج الضريبي"
    case "171203020002":
    return "171203020002: توقيع اتفاقيات حماية وتشجيع الاستثمار"
    case "171203020003":
    return "171203020003: توقيع اتفاقيات تبادل المعلومات الضريبية"
    case "171203020000":
    return "171203020000: تنمية وتعزيز العلاقات المالية الدولية على المستوى الثنائي"
    case "171203030001":
    return "171203030001: إصدار شهادات القيمة المضافة والموطن الضريبي (خدمة ذات أولوية)"
    case "171203030000":
    return "171203030000: الشهادات الضريبية"
    case "171203040001":
    return "171203040001: معالجة معوقات التبادل التجاري والسوق الخليجية المشتركة"
    case "171203040002":
    return "171203040002: تعميق التكامل الاقتصادي الخليجي لخدمة المصالح المالية والاقتصادية"
    case "171203040000":
    return "171203040000: تفعيل فرص ومميزات التكامل المالي والاقتصادي الخليجي المشترك"
    case "171203050001":
    return "171203050001: الرد على الشكاوى في مجال التكامل الاقتصادي الخليجي"
    case "171203050002":
    return "171203050002: الرد على الاستفسارات في مجال التكامل الإقتصادي الخليجي"
    case "171203050003":
    return "171203050003: الرد على الاقتراحات في مجال التكامل الإقتصادي الخليجي"
    case "171203050004":
    return "171203050004: إصدار ونشر التقارير الإحصائية عن التكامل الإقتصادي لدول مجلس التعا"
    case "171203050000":
    return "171203050000: تقديم الخدمات المساندة للتكامل الاقتصادي الخليجي"
    case "171204010001":
    return "171204010001: توحيد السياسات المالية على مستوى الدولة"
    case "171204010002":
    return "171204010002: توحيد البيانات المالية على مستوى الدولة"
    case "171204010000":
    return "171204010000: تعزيز التنسيق الفعلي للسياسات والبيانات المالية على مستوى الدولة"
    case "171204020001":
    return "171204020001: إصدار ونشر التقرير المالي الموحد للدولة"
    case "171204020000":
    return "171204020000: إعداد التقرير المالي الموحد لدولة الامارات العربية المتحدة"
    case "171204030001":
    return "171204030001: إعداد ومراجعة القوانين والسياسات المالية للحكومة الاتحادية"
    case "171204030002":
    return "171204030002: إعداد دراسات الاقتصاد الكلي واستحداث السياسات المالية بالدولة"
    case "171204030003":
    return "171204030003: دراسة الاطار التشريعي للابتكار"
    case "171204030000":
    return "171204030000: مراجعة واستحداث القوانين والسياسات المالية"
    case "171204040001":
    return "171204040001: تأسيس مجلس الاستقرار المالي"
    case "171204040002":
    return "171204040002: تحديد ورصد صدمات ومخاطر الاستقرار المالي والإطار التنظيمي المناسب"
    case "171204040003":
    return "171204040003: تعزيز تدابير الاستقرار المالي"
    case "171204040000":
    return "171204040000: حماية وسلامة النظام المالي للدولة"
    case "171205010001":
    return "171205010001: إعداد الميزانية ومتابعة تنفيذها"
    case "171205010002":
    return "171205010002: إدارة الرواتب"
    case "171205010003":
    return "171205010003: إدارة المدفوعات والاستحقاقات"
    case "171205010004":
    return "171205010004: إجراء التدقيق الداخلي"
    case "171205010000":
    return "171205010000: إادارة الموارد المالية بكفاءة وفعالية"
    case "171205020001":
    return "171205020001: إدارة المشتريات"
    case "171205020002":
    return "171205020002: إدارة العقود ومتابعتها"
    case "171205020000":
    return "171205020000: إدارة المشتريات وفق أفضل الممارسات العالمية"
    case "171205030001":
    return "171205030001: تخطيط الموارد البشرية والاستقطاب والتعيين"
    case "171205030002":
    return "171205030002: تدريب وتطوير الموظفين"
    case "171205030003":
    return "171205030003: إدارة خدمات الموارد البشرية الأخرى ( تقييم الأداء، التعويضات والفو"
    case "171205030000":
    return "171205030000: تطبيق أفضل ممارسات الموارد البشرية"
    case "171205040001":
    return "171205040001: إدارة الجودة"
    case "171205040002":
    return "171205040002: إدارة علاقات المتعاملين"
    case "171205040003":
    return "171205040003: الإعداد للمشاركة بجائزة الشيخ خليفة للتميز"
    case "171205040000":
    return "171205040000: ضمان تطبيق معايير الجودة والتميز المؤسسي"
    case "171205050001":
    return "171205050001: الرد على استفسارات المتعاملين"
    case "171205050002":
    return "171205050002: الرد على شكاوى المتعاملين (خدمة ذات أولوية)"
    case "171205050003":
    return "171205050003: الرد على اقتراحات المتعاملين"
    case "171205050000":
    return "171205050000: التواصل مع المتعاملين"
    case "171205060001":
    return "171205060001: تخطيط وتنسيق الاتصالات الداخلية والخارجية"
    case "171205060002":
    return "171205060002: إدارة النشاط الإعلامي"
    case "171205060000":
    return "171205060000: ضمان تحقيق الاتصال الداخلي والخارجي"
    case "171205070001":
    return "171205070001: مكاتب الوزراء والمدير العام (الوكيل) والمديرين التنفيذيين"
    case "171205070002":
    return "171205070002: مستشاري الوزير والمدير العام (الوكيل)"
    case "171205070000":
    return "171205070000: تطبيق أفضل الممارسات العالمية فى القيادة"
    case "171205080001":
    return "171205080001: وضع وتطوير الخطة التشغيلية والإستراتيجية"
    case "171205080002":
    return "171205080002: تحديد مؤشرات الأداء الرئيسية وقياس الأداء"
    case "171205080000":
    return "171205080000: وضع وتطوير الخطة الاستراتيجية وقياس الأداء"
    case "171205090001":
    return "171205090001: إعداد الدراسات والاستشارات القانونية"
    case "171205090002":
    return "171205090002: إدارة الشؤون القانونية"
    case "171205090000":
    return "171205090000: توفير أفضل الخدمات القانونية"
    case "171205100001":
    return "171205100001: تطوير النظم والتطبيقات الإلكترونية"
    case "171205100002":
    return "171205100002: توفير الدعم الفني للمستخدمين (خط مساعدة)"
    case "171205100003":
    return "171205100003: إدارة الشبكات وأمن المعلومات"
    case "171205100000":
    return "171205100000: توفير أحدث خدمات تقنية المعلومات"
    case "171205110001":
    return "171205110001: الصيانة"
    case "171205110002":
    return "171205110002: الإيجار"
    case "171205110003":
    return "171205110003: المواصلات"
    case "171205110004":
    return "171205110004: رسوم الاستشارات"
    case "171205110005":
    return "171205110005: المصروفات المتكررة الأخرى (الصادر والوارد، المراقف، الهواتف والانت"
    case "171205110006":
    return "171205110006: الخدمات المشتركة الأخرى (أدوات مكتب، قرطاسية ومتفرقات، الخ)"
    case "171205110000":
    return "171205110000: توفير خدمات مشتركة لكافة الوحدات التنظيمية بكفاءة عالية"
    case "171206010001":
    return "171206010001: تنفيذ برامج تدريبية للموظفين في مجال الابتكار."
    case "171206010002":
    return "171206010002: إشراك الموظفين في برنامج دبلوم خبير الابتكار الحكومي"
    case "171206010003":
    return "171206010003: تنفيذ حملات توعية داخلية لنشر ثقافة الابتكار بين الموظفين"
    case "171206010000":
    return "171206010000: بناء قدرات الموظفين في مجال الابتكار"
    case "171206020001":
    return "171206020001: تطوير مسابقات داخلية لتحفيز المبتكرين"
    case "171206020002":
    return "171206020002: تنفيذ مختبرات للابتكار/ جلسات عصف ذهني لجذب الأفكار"
    case "171206020000":
    return "171206020000: تبني أحدث أدوات ووسائل الابتكار داخل الوزارة"
    case "171206030001":
    return "171206030001: تفعيل آلية إدارة الاقتراحات لدعم الابتكار في الوزارة"
    case "171206030002":
    return "171206030002: توثيق كافة الابتكارات في الوزارة"
    case "171206030003":
    return "171206030003: عقد شراكات في مجال الابتكار مع المؤسسات الأكاديمية/ المنظمات الدول"
    case "171206030000":
    return "171206030000: تـهيئة بيئة داعمة ومحفزة للابتكار"



    default:
    return id;
  }
}
