import type { Metadata } from "next";
import GradePage from "@/components/GradePage";

export const metadata: Metadata = {
  title: { absolute: "Hexamethyldisilazane — Functional & High-Performance Materials — Cosmox Chemicals" },
  description: "HMDS: silylating agent and photoresist adhesion promoter for semiconductor processing.",
};

export default function Page() {
  return <GradePage category="functional-high-performance-materials" slug="hexamethyldisilazane" />;
}
