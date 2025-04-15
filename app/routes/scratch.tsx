import Scratch from "../views/insight/scratch";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Insights | Risk Office Solutions" },
        { name: "description", content: "Risk Office Solutions" },
    ];
}

const ScratchPage = () => {
    return <Scratch />;
}

export default ScratchPage;