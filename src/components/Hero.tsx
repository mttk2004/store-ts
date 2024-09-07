/**
 *  Project: store-ts
 *  File: Hero.tsx
 *  Created: 8:56 SA, 07/09/2024
 *  Author: Mai Tran Tuan Kiet
 *  "Family is where life begins and love never ends."
 */

import { HeroCarousel } from "@/components/index.ts";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="mb-16 grid grid-cols-1 gap-20 text-center md:grid-cols-2 md:text-left">
      <div className="space-y-8 md:space-y-10">
        <h1 className="max-w-xl text-pretty text-3xl font-bold uppercase tracking-tight md:text-4xl lg:text-5xl">
          We are changing the way people shop
        </h1>
        <p className="max-w-xl text-left leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          aliquam dicta distinctio exercitationem id iure laudantium obcaecati
          odio quae quaerat quos repudiandae soluta, voluptatem! Beatae deserunt
          officia repellat veniam voluptas?
        </p>
        <Button asChild size="lg">
          <Link to="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}

export default Hero;
