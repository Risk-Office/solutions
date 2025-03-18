import type { Route } from "./+types/home";
import { HomePage } from "../views/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Risk Office Solutions" },
    { name: "description", content: "Risk Office Solutions!" },
  ];
}

export default function Home() {
  return <HomePage />;
}
