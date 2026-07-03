import React from "react";
import About from "../components/About";

interface AboutPageProps {
  translations: Record<string, string>;
}

export default function AboutPage({ translations }: AboutPageProps) {
  return (
    <div className="pt-20">
      <About translations={translations} />
    </div>
  );
}
