import { FC } from "react";
import { Accordion } from "@/components/ui/accordion";
import Image from "next/image";
import ServicesCard from "./services-card";

interface ServicesProps {}

const Services: FC<ServicesProps> = ({}) => {
  return (
    <section id="services" className="md:bg-main pt-8 text-center">
      <h2 className="text-main md:text-white font-bold">
        خدماتي في تحسين محركات البحث
      </h2>
      <div className="w-2/3 mx-auto p-3 text-center my-5">
        <Accordion type="single" collapsible>
          <ServicesCard
            item="1"
            imgSrc="/keyword.png"
            title="Keyword Research"
            content="أتفوق في إجراء بحث دقيق عن الكلمات الرئيسية، باستخدام الأدوات والمنهجيات
            المتقدمة لتحديد الكلمات الرئيسية والعبارات عالية التأثير التي تتوافق مع
            هدف البحث لدى الجمهور المستهدف. يمكّنني هذا النهج الاستراتيجي من تحسين
            محتوى موقع الويب والبيانات التعريفية بشكل فعال، مما يؤدي إلى تحسين
            التصنيفات وزيادة حركة المرور العضوية."
          />
          <ServicesCard
            item="2"
            imgSrc="/page.png"
            title="On-Page SEO"
            content="لدي كفائة في تحسين محركات البحث على الصفحة من خلال قدرتي على تحسين عناصر موقع الويب بدقة، بما في ذلك العناوين التعريفية والأوصاف التعريفية وعلامات الرأس والنصوص البديلة للصور. من خلال الالتزام بأفضل ممارسات تحسين محركات البحث (SEO)، أضمن أن مواقع الويب ليست صديقة لمحركات البحث فحسب، بل توفر أيضًا تجربة مستخدم سلسة وجذابة."
          />
          <ServicesCard
            item="3"
            imgSrc="/backlink.png"
            title="BackLink Building"
            content="لدي فهم قوي لاستراتيجيات بناء الروابط الخلفية، مما يسمح لي بالحصول على روابط خلفية عالية الجودة وذات صلة وموثوقة. تمكنني قدرات شبكتي والتواصل الواسعة التي أمتلكها من إقامة شراكات وتعاونات قيمة، مما يعزز بشكل كبير المصداقية عبر الإنترنت وسلطة المجال لمواقع الويب."
          />
          <ServicesCard
            item="4"
            imgSrc="/data.png"
            title="Data Analysis and Tool Ulti"
            content="من خلال الاستفادة من قوة أدوات التحليلات المتطورة، مثل Google Analytics وGoogle Search Console، أقوم بتفسير البيانات للحصول على رؤى قيمة حول أداء موقع الويب وسلوك المستخدم. يمكّنني نهجي المبني على البيانات من اتخاذ قرارات مستنيرة وتكييف الاستراتيجيات في الوقت الفعلي وتحديد فرص النمو للعملاء أو المشاريع."
          />
          <ServicesCard
            item="5"
            imgSrc="/content.png"
            title="Content Strategy and Creative Writing"
            content="باعتباري كاتبًا مبدعًا وماهرًا، أقوم بصياغة محتوى جذاب وصديق لمحركات البحث (SEO) يلقى صدى لدى كل من المستخدمين ومحركات البحث. من خلال استخدام السرد القصصي المقنع ودمج الكلمات الرئيسية المستهدفة بشكل طبيعي، أقوم بتعزيز المشاركة العضوية، وتشجيع المشاركة الاجتماعية، وإنشاء مواقع الويب كمصادر موثوقة في مجالات تخصصها."
          />
          <ServicesCard
            item="6"
            imgSrc="/tech.png"
            title="Technical SEO"
            content="تتيح لي فطنتي التقنية إجراء عمليات تدقيق شاملة لموقع الويب، وتحديد وحل المشكلات التي قد تعيق برامج زحف محركات البحث من فهرسة صفحات الويب وتصنيفها بشكل صحيح. من خلال التحسين الدقيق لبنية الموقع، وتكوين خريطة موقع XML، والتحديد الأساسي، أقوم بتحسين إمكانية الزحف إلى موقع الويب وكفاءة الفهرسة."
          />
          <ServicesCard
            item="7"
            imgSrc="/mobile.png"
            title="Mobile Optimization"
            content="إدراكًا لأهمية سهولة استخدام الهاتف المحمول في المشهد الرقمي اليوم، أقوم ببراعة بتحسين مواقع الويب لتناسب مختلف الأجهزة، مما يضمن تجارب مستخدم سلسة وتحسين تصنيفات محركات البحث على منصات الأجهزة المحمولة."
          />
          <ServicesCard
            item="8"
            imgSrc="/rank.png"
            title="Rank Monitoring and Reporting"
            content="من خلال حرصي الشديد على تتبع الأداء، أقوم باستمرار بمراقبة تصنيفات الكلمات الرئيسية وحركة المرور العضوية والمقاييس الحيوية الأخرى لقياس مدى فعالية استراتيجيات تحسين محركات البحث. تتيح تقاريري المختصرة والثاقبة للعملاء وأصحاب المصلحة البقاء على اطلاع بالتقدم والنتائج."
          />
          <ServicesCard
            item="9"
            imgSrc="/comm.png"
            title="Communication and Collaboration"
            content="أنا متواصل قوي، ماهر في التعبير بشكل فعال عن مفاهيم تحسين محركات البحث المعقدة لكل من أصحاب المصلحة التقنيين وغير التقنيين. من خلال التعاون بسلاسة مع فرق متعددة الوظائف، أقوم بدمج تحسين محركات البحث (SEO) في استراتيجيات التسويق الأوسع لقيادة حملات متماسكة ومؤثرة."
          />
        </Accordion>
      </div>
    </section>
  );
};

export default Services;