import * as React from "react";

interface CardProps {
  children: React.ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <div className="flex items-center justify-center h-44 w-56 text-primary-50 bg-primary-900 rounded-xl text-lg my-3">{children}</div>
  );
}
