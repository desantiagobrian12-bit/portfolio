import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — Brian De Santiago",
  description:
    "Product Designer in Guadalajara. My story, why I design, and a few things that keep me going.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
