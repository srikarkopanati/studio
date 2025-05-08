
import { HeroSection } from '@/components/shared/HeroSection';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { CarList } from '@/components/cars/CarList';
import { cars as allCarsData } from '@/lib/data/cars'; 
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Lightbulb, Search, CheckCircle, ArrowRight } from 'lucide-react'; // Changed Users to Search
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function HomePage() {
  const featuredCars = allCarsData.slice(0, 3);

  const features = [
    {
      icon: <Lightbulb className="h-10 w-10 md:h-12 md:w-12 text-accent mb-4" />,
      title: "AI-Powered Recommendations",
      description: "Our intelligent AI Car Finder helps you discover the perfect vehicle based on your unique preferences and needs.",
    },
    {
      icon: <Search className="h-10 w-10 md:h-12 md:w-12 text-accent mb-4" />,
      title: "Vast Selection",
      description: "Explore a wide variety of makes and models, from fuel-efficient sedans to rugged SUVs and luxury vehicles.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-accent mb-4" />,
      title: "Trusted Quality",
      description: "Each car is thoroughly inspected to ensure you get a reliable vehicle you can trust for years to come.",
    },
  ];

  return (
    <>
      <HeroSection
        title="Find Your Dream Car Today"
        subtitle="Browse thousands of new and used cars, or let our AI guide you to the perfect match."
        ctaText="Explore Car Gallery"
        ctaLink="/gallery"
        imageUrl="https://picsum.photos/seed/family-suv-roadtrip/1920/1080"
        imageHint="family car roadtrip" 
      />

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Why Choose The Wheels Garage?"
            subtitle="We offer a seamless and intelligent car buying experience."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card border border-border rounded-xl p-6 md:p-8">
                <CardHeader className="items-center pb-4 pt-2">
                  {feature.icon}
                  <CardTitle className="text-xl md:text-2xl font-semibold text-primary mt-2">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Featured Cars"
            subtitle="Check out some of our most popular models"
          />
          <CarList cars={featuredCars} />
          <div className="mt-10 md:mt-12 text-center">
            <Link href="/gallery" passHref>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 hover:text-primary-foreground text-base md:text-md px-6 py-3 shadow-sm">
                View All Cars <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
           <SectionTitle
            title="Not Sure Where to Start?"
            subtitle="Our AI Car Finder makes it easy!"
            className="text-primary-foreground" 
          />
          <p className="text-base md:text-lg mb-8 md:mb-10 max-w-xl md:max-w-2xl mx-auto">
            Answer a few simple questions about your lifestyle and preferences, and our AI will suggest the best car models for you. It's quick, easy, and personalized.
          </p>
          <Link href="/ai-finder" passHref>
            <Button size="lg" variant="secondary" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base md:text-md px-8 py-3 shadow-lg">
              Try AI Car Finder Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
