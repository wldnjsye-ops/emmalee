import Navbar from '@/components/main/navbar';
import AetherHero from '@/components/main/hero';
import Features from '@/components/main/features';
import HowItWorks from '@/components/main/how-it-works';
import CtaSection from '@/components/main/cta-section';
import Footer from '@/components/main/footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <AetherHero
        title="Blog Thumbnail AI"
        subtitle="블로그 글만 입력하면, AI가 완벽한 썸네일을 자동으로 만들어드립니다. 디자인 경험 없이도 클릭을 부르는 썸네일을 몇 초 만에."
        ctaLabel="썸네일 만들기"
        ctaHref="#generate"
        secondaryCtaLabel="서비스 소개"
        secondaryCtaHref="#about"
        align="center"
      />
      <Features />
      <HowItWorks />
      <CtaSection />
      <Footer />
    </main>
  );
}
