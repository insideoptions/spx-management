"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

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
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-8 md:p-12 bg-black/5 dark:bg-white/5">
            <div className="space-y-6">
              {/* Logo */}
              <div className="flex justify-center mb-6">
                <Image
                  src="/blacklog.png"
                  alt="SPX MGMT LLC Logo"
                  width={200}
                  height={80}
                  className="block dark:hidden"
                />
                <Image
                  src="/whitelog.png"
                  alt="SPX MGMT LLC Logo"
                  width={200}
                  height={80}
                  className="hidden dark:block"
                />
              </div>
              
              <p className="text-lg leading-relaxed text-black dark:text-white">
                To learn more about our strategy, please contact us.
              </p>
              
              <div className="space-y-4 text-black dark:text-white">
                <div>
                  <h3 className="font-semibold text-xl mb-2">SPX MGMT LLC</h3>
                </div>
                
                <div className="space-y-2">
                  <p>7880 Hoback Drive</p>
                  <p>Sparks, NV 89436</p>
                </div>
                
                <div>
                  <a 
                    href="mailto:David@spxmgmt.com" 
                    className="text-primary hover:text-primary/80 transition-colors font-medium"
                  >
                    David@spxmgmt.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="backdrop-blur-sm border border-white/10 dark:border-white/5 rounded-2xl p-8 md:p-12 bg-black/5 dark:bg-white/5">

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-black/90 dark:text-white/90 mb-2">
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-black/90 dark:text-white/90 mb-2">
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-black/90 dark:text-white/90 mb-2">
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
              <label htmlFor="phone" className="block text-sm font-medium text-black/90 dark:text-white/90 mb-2">
                PHONE NUMBER
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 border-r-0 rounded-l-lg">
                  <span className="text-black/80 dark:text-white/80 text-sm">🇺🇸 +1</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(000) 000 0000"
                  className="flex-1 px-4 py-3 rounded-r-lg bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
      </div>
    </section>
  );
}
