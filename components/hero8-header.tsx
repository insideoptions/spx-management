"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const menuItems = [
  { name: "Founder", href: "#founder" },
  { name: "Solution", href: "#solutions" },
  { name: "Features", href: "#wsj" },
  { name: "Contact Us", href: "#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full border-b backdrop-blur-3xl"
      >
        <div className="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <Logo />
              </Link>
              

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>

              <div className="hidden lg:flex lg:items-center lg:gap-8">
                <ul className="flex gap-8 text-sm">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(`=== ${item.name} Button Clicked ===`);
                          if (item.href === "#founder") {
                            const founderSection = document.querySelector('[data-section="founder"]') as HTMLElement;
                            if (founderSection) {
                              const targetY = founderSection.offsetTop - 120;
                              console.log(`${item.name} - Element found at offsetTop: ${founderSection.offsetTop}px`);
                              console.log(`${item.name} - Target scroll position: ${targetY}px (offsetTop - 120)`);
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            } else {
                              console.log(`${item.name} - Element not found!`);
                            }
                          } else if (item.href === "#wsj") {
                            const wsjSection = document.querySelector('[data-section="wsj"]') as HTMLElement;
                            if (wsjSection) {
                              const targetY = wsjSection.offsetTop - 120;
                              console.log(`${item.name} - Element found at offsetTop: ${wsjSection.offsetTop}px`);
                              console.log(`${item.name} - Target scroll position: ${targetY}px (offsetTop - 120)`);
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            } else {
                              console.log(`${item.name} - Element not found!`);
                            }
                          } else if (item.href === "#solutions") {
                            const solutionsSection = document.querySelector('#solutions') as HTMLElement;
                            if (solutionsSection) {
                              const targetY = solutionsSection.offsetTop - 120;
                              console.log(`${item.name} - Element found at offsetTop: ${solutionsSection.offsetTop}px`);
                              console.log(`${item.name} - Target scroll position: ${targetY}px (offsetTop - 120)`);
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            } else {
                              console.log(`${item.name} - Element not found!`);
                            }
                          } else if (item.href === "#contact") {
                            const contactSection = document.querySelector('#contact') as HTMLElement;
                            if (contactSection) {
                              const targetY = contactSection.offsetTop - 120;
                              console.log(`${item.name} - Element found at offsetTop: ${contactSection.offsetTop}px`);
                              console.log(`${item.name} - Target scroll position: ${targetY}px (offsetTop - 120)`);
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            } else {
                              console.log(`${item.name} - Element not found!`);
                            }
                          }
                        }}
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent backdrop-blur-md">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <button
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={(e) => {
                          e.preventDefault();
                          setMenuState(false); // Close mobile menu first
                          if (item.href === "#founder") {
                            const founderSection = document.querySelector('[data-section="founder"]') as HTMLElement;
                            if (founderSection) {
                              const targetY = founderSection.offsetTop - 120;
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            }
                          } else if (item.href === "#wsj") {
                            const wsjSection = document.querySelector('[data-section="wsj"]') as HTMLElement;
                            if (wsjSection) {
                              const targetY = wsjSection.offsetTop - 120;
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            }
                          } else if (item.href === "#solutions") {
                            const solutionsSection = document.querySelector('#solutions') as HTMLElement;
                            if (solutionsSection) {
                              const targetY = solutionsSection.offsetTop - 120;
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            }
                          } else if (item.href === "#contact") {
                            const contactSection = document.querySelector('#contact') as HTMLElement;
                            if (contactSection) {
                              const targetY = contactSection.offsetTop - 120;
                              window.scrollTo({ top: targetY, behavior: 'smooth' });
                            }
                          }
                        }}
                      >
                        <span>{item.name}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                <Button asChild variant="outline" size="sm">
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href="#">
                    <span>Sign Up</span>
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
