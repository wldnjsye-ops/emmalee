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
        title="Emma's Blog Thumbnail AI"
        subtitle={
          '블로그 글만 입력하면, AI가 완벽한 썸네일을 자동으로 만들어드립니다.\n문구와 디자인 경험 없이도 클릭을 부르는 썸네일을 몇 초 만에.'
        }
        ctaLabel="지금 시작하기"
        ctaHref="/auth"
        secondaryCtaLabel="더 알아보기"
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
