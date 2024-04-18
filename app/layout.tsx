import type { Metadata } from "next";
import { Alexandria } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer";

const font = Alexandria({
  subsets: ["arabic"],
  weight: ["300", "500", "700"],
});

export const metadata: Metadata = {
  title: "Moaz Ayman - Seo Specialist",
  description: `اهلا بيك..
  انا معاذ ايمن
  متخصص في تحسين محركات البحث (SEO)، لدي خبرة واسعة في تحسين ترتيب المتاجر الالكترونية و مواقع الخدمات من خلال تحسين تجربة المستخدم ومعدلات التحويل (CTR) إذا كنت تبحث عن شريك يتمتع بالخبرة والنهج الاستراتيجي لتعزيز تواجدك الرقمي، فأنا هنا لمساعدتك.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
