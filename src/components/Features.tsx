import React from "react";
import { featuresData } from "@/data/mockData";

interface FeaturesProps {
  readonly className?: string;
}

export const Features: React.FC<FeaturesProps> = ({ className = "" }) => {
  return (
    <section className={`py-24 bg-slate-50 dark:bg-background-dark/50 ${className}`} id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{featuresData.title}</h2>
          <p className="opacity-70 max-w-2xl mx-auto text-lg">{featuresData.subtitle}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuresData.items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-white dark:bg-card-dark border border-slate-200 dark:border-border-dark hover:border-primary/50 transition-all group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">{item.icon}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="opacity-70 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};