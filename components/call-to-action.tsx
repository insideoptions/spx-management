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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Zapier webhook URL - using environment variable with fallback
      const zapierWebhookUrl = process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL || 'https://hooks.zapier.com/hooks/catch/13379760/u1w3v6x/';
      
      const response = await fetch(zapierWebhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          timestamp: new Date().toISOString(),
          source: 'SPX Management Website'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form data
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: ""
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('There was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-12">
          {/* Contact Information */}
          <div className="backdrop-blur-sm border border-black/10 dark:border-white/5 rounded-2xl p-8 md:p-12 bg-white/95 dark:bg-white/5">
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
          <div className="backdrop-blur-sm border border-black/10 dark:border-white/5 rounded-2xl p-8 md:p-12 bg-white/95 dark:bg-white/5">
            {isSubmitted ? (
              // Thank You Message
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">Thank You!</h3>
                  <p className="text-lg text-black/80 dark:text-white/80 mb-4">
                    We&apos;ve received your message and will get back to you shortly.
                  </p>
                  <p className="text-sm text-black/60 dark:text-white/60">
                    We typically respond within 24 hours during business days.
                  </p>
                </div>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-6"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              // Contact Form
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
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                  className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
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
                className="w-full px-4 py-3 rounded-lg bg-black/10 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-black/90 dark:text-white/90 mb-2">
                PHONE NUMBER
              </label>
              <div className="flex">
                <div className="flex items-center px-3 py-3 bg-white/80 dark:bg-white/10 border border-black/20 dark:border-white/20 border-r-0 rounded-l-lg">
                  <span className="text-black/80 dark:text-white/80 text-sm">🇺🇸 +1</span>
                </div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(000) 000 0000"
                  className="flex-1 px-4 py-3 rounded-r-lg bg-white/80 dark:bg-white/10 border border-black/20 dark:border-white/20 text-black dark:text-white placeholder-black/60 dark:placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            {submitError && (
              <div className="p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                <p className="text-red-600 dark:text-red-400 text-sm">{submitError}</p>
              </div>
            )}

            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-primary-foreground font-semibold py-4 text-lg"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
