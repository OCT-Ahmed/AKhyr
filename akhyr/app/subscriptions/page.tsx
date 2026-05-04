'use client'
import { useState } from 'react';
import PaymentButton from '@/features/payment/components/PaymentButton';
import { ArrowUpRightIcon, Coffee, Rocket, Star } from "lucide-react"
import Link from "next/link"
import { Check, Zap, Heart } from 'lucide-react';

interface PricingTier {
  monthly: [{
    title: string;
    displayPrice: string;
    numericPrice: string;
    tagline: string;
    features: string[];
    buttonText: string;
    isPopular: boolean;
    planId?: string;
  }],

  once:  {
    title: string;
    displayPrice: string;
    numericPrice: string;
    tagline: string;
    features: string[];
    buttonText: string;
    isPopular: boolean;
    planId?: string;
  }[],
}
const pricingData: PricingTier = {
  monthly: [
    {
      title: "The Spark",
      displayPrice: "$3",
      numericPrice: "3.00",
      planId: "",
      tagline: "Fuel the daily grind.",
      features: ["Hand-written digital thank you", "Exclusive minimalist wallpapers", "Your name on the Wall of Fame"],
      buttonText: "Support Monthly",
      isPopular: false
    },
    // {
    //   title: "The Architect",
    //   price: "$10",
    //   tagline: "Build the future with me.",
    //   features: ["Everything in Spark", "Behind-the-scenes Dev logs", "Vote on upcoming features"],
    //   buttonText: "Become a Partner",
    //   isPopular: true
    // },
    // {
    //   title: "The Visionary",
    //   price: "$25",
    //   tagline: "Invest in a dream.",
    //   features: ["Everything in Architect", "Special credit in Source Code", "Monthly 1-on-1 progress sync"],
    //   buttonText: "Make an Impact",
    //   isPopular: false
    // }
  ],
  once: [
    {
      title: "Quick Coffee",
      displayPrice: "$5",
      numericPrice: "5.00",
      tagline: "A small boost for a big day.",
      features: ["Instant gratitude", "Name on the Wall of Fame", "Supporter recognition"],
      buttonText: "Buy a Coffee",
      isPopular: false
    },
    {
      title: "Hardware Fund",
      displayPrice: "$50",
      numericPrice: "50.00",
      tagline: "Help me upgrade my gear.",
      features: ["Everything in Quick Coffee", "Personalized video shout-out", "Early access to new apps"],
      buttonText: "Support the Tech",
      isPopular: true
    },
    // {
    //   title: "The Leap",
    //   price: "$100",
    //   tagline: "Creating a massive shift.",
    //   features: ["Lifetime credit on my site", "Exclusive 'Founding Member' role", "Influence on project roadmaps"],
    //   buttonText: "Back the Vision",
    //   isPopular: false
    // }
  ]
};

const SubscriptionsPage = () => {
  // monthly & annualy trigger logic
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="w-full py-16 px-4 bg-[#0a0a0a] text-white font-sans">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-semibold h-fit mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-blue">
          Support the Journey
        </h2>
        <p className="text-gray-400 text-base md:text-lg mb-10">
          Your support isn't just a donation; it's the fuel that keeps this story moving forward.
        </p>

        {/* Custom Toggle Switch */}
        <div className="inline-flex p-1 bg-white/5 rounded-full border border-white/10 mb-8 transition-all">
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${isMonthly ? "bg-primary text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-8 py-2 rounded-full text-sm font-bold transition-all duration-300 ${!isMonthly ? "bg-primary text-white shadow-lg" : "text-gray-500 hover:text-white"}`}
          >
            One-time
          </button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {(isMonthly ? pricingData.monthly : pricingData.once).map((tier, idx) => (
          <div
            key={idx}
            className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-500 hover:translate-y-[-5px] ${tier.isPopular ? "border-primary bg-primary/5" : "border-white/10 bg-white/5"}`}
          >
            {tier.isPopular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-[2px] py-1 px-4 rounded-full">
                Most Impact
              </div>
            )}
            <div className="mb-6 text-primary">
              {idx === 0 && <Coffee className="w-8 h-8" />}
              {idx === 1 && <Rocket className="w-8 h-8" />}
              {idx === 2 && <Star className="w-8 h-8" />}
            </div>

            <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
            <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{tier.tagline}</p>

            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-4xl font-black text-white">{tier.displayPrice}</span>
              {isMonthly && <span className="text-gray-500 text-sm font-medium">/mo</span>}
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {tier.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-[-2px]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 w-full relative ">
              <PaymentButton type={isMonthly ? "monthly" : "once"} price={tier.numericPrice} planId={tier.planId || ""} />
            </div>
          </div>
        ))}
      </div>

      {/* Goal Tracker */}
      <div className="max-w-xl mx-auto mt-20 p-8 rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
        <div className="flex justify-between items-end mb-4">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Current Goal</h4>
            <p className="text-white text-lg font-bold">Pro Workstation Upgrade</p>
          </div>
          <span className="text-2xl font-black text-primary">15%</span>
        </div>
        <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full shadow-[0_0_20px_rgba(var(--color-primary),0.6)] w-[15%]" />
        </div>
        <p className="text-center text-gray-500 text-sm mt-6 leading-relaxed">
          Helping Ahmed transition from a 4GB RAM setup to a professional engine for Motion Design & Software Architecture.
        </p>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 text-sm flex items-center justify-center gap-2">
          Made with <Heart className="w-4 h-4 text-primary fill-primary" /> by Akhyr
        </p>
      </div>
    </div>
  );
};

export default SubscriptionsPage;