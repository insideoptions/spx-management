"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-2xl px-6">
        <div className="backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-8 md:p-12 bg-black/5 dark:bg-white/5">
          <div className="text-center mb-8">
            <h2 className="text-balance text-3xl font-semibold lg:text-4xl text-white dark:text-white mb-6">
              Learn more about SPX MGMT LLC
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white/90 dark:text-white/90 mb-2">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white dark:text-white placeholder-white/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white/90 dark:text-white/90 mb-2">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white dark:text-white placeholder-white/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white/90 dark:text-white/90 mb-2">
                EMAIL
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="email@example.com"
                className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white dark:text-white placeholder-white/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-white/90 dark:text-white/90 mb-2">
                PHONE NUMBER
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 border-r-0 rounded-l-lg">
                  <span className="text-white/80 dark:text-white/80 text-sm">🇺🇸 +1</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(000) 000 0000"
                  className="flex-1 px-4 py-3 rounded-r-lg bg-white/10 dark:bg-white/10 border border-white/20 dark:border-white/20 text-white dark:text-white placeholder-white/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 text-lg"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
