"use client";

import { useEffect, useState } from "react";

type Props = {};

const slides = [CardPlaceholder, TablePlaceholder, DashboardPlaceholder];

function UiComponentVariations({}: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-[250px] overflow-hidden rounded-xl bg-white shadow-lg">
      <Navbar />

      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((Slide, index) => (
          <div key={index} className="w-full shrink-0 p-4">
            <Slide />
          </div>
        ))}
      </div>
    </div>
  );
}

export default UiComponentVariations;

function Navbar() {
  return (
    <div className="sticky top-0 z-10 flex h-11 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-md bg-indigo-50" />
        <div className="h-3 w-16 rounded bg-gray-300" />
      </div>

      <div className="flex gap-2">
        <div className="h-3 w-8 rounded bg-gray-200" />
        <div className="h-3 w-8 rounded bg-gray-200" />
        <div className="h-3 w-8 rounded bg-gray-200" />
      </div>
    </div>
  );
}

function CardPlaceholder() {
  return (
    <div className="space-y-3">
      <div className="h-10 w-10 rounded-full bg-gray-200 animate-pulse" />

      <div className="h-4 w-28 rounded bg-gray-300 animate-pulse" />

      <div className="h-3 w-full rounded bg-gray-100 animate-pulse" />
      <div className="h-3 w-5/6 rounded bg-gray-100 animate-pulse" />
      <div className="h-3 w-2/3 rounded bg-gray-100 animate-pulse" />

      <div className="mt-5 flex gap-2">
        <div className="h-8 w-16 rounded bg-indigo-200 animate-pulse" />
        <div className="h-8 w-16 rounded bg-gray-200 animate-pulse" />
      </div>
    </div>
  );
}

function TablePlaceholder() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-3 gap-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 rounded bg-gray-300 animate-pulse" />
        ))}
      </div>

      {[...Array(5)].map((_, i) => (
        <div key={i} className="grid grid-cols-3 gap-2">
          {[...Array(3)].map((_, j) => (
            <div key={j} className="h-3 rounded bg-gray-100 animate-pulse" />
          ))}
        </div>
      ))}
    </div>
  );
}

function DashboardPlaceholder() {
  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2">
        <div className="h-14 rounded bg-blue-50 animate-pulse" />
        <div className="h-14 rounded bg-rose-50 animate-pulse" />
      </div>

      <div className="h-24 rounded bg-gray-200 animate-pulse" />

      <div className="grid grid-cols-3 gap-2">
        <div className="h-5 rounded bg-gray-100 animate-pulse" />
        <div className="h-5 rounded bg-gray-100 animate-pulse" />
        <div className="h-5 rounded bg-gray-100 animate-pulse" />
      </div>
    </div>
  );
}
