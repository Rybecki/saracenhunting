import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "h-10",
  md: "h-14",
  lg: "h-20",
  xl: "h-28",
};

export default function Logo({ className = "", size = "sm" }: LogoProps) {
  return (
    <img
      src="/logo.png?v=3"
      alt="Saracen Hunting"
      className={`${sizeClasses[size]} w-auto object-contain ${className}`}
    />
  );
}
