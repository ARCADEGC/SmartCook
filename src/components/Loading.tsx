import { zoomies } from "ldrs";

zoomies.register();

export default function Loader() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-background">
            <l-zoomies size="80" stroke="5" bg-opacity="0.1" speed="1.4" color="black"></l-zoomies>
        </div>
    );
}
