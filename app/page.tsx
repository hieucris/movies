import Hero from "@/components/home/Hero";
import FeaturedNews from "@/components/home/FeaturedNews";
import FeaturedMovies from "@/components/home/FeaturedMovies";
import NewsletterSection from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      <Hero />
      <FeaturedNews />
      <FeaturedMovies />
      <NewsletterSection />
    </div>
  );
}
