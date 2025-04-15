import InsightPage from "../views/insight"
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Insights | Risk Office Solutions" },
        { name: "description", content: "Risk Office Solutions" },
    ];
}

const Insight = () => {
    return <InsightPage />;
}

export default Insight;