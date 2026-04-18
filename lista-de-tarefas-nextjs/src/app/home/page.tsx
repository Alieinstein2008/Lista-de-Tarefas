import Canva from "../ui/Canva";
import Topbar from "../ui/Topbar";

export default function Page(){
    return(
        <main className="w-full h-screen overflow-hidden">
            <Topbar></Topbar>
            <Canva></Canva>
        </main>
    );
}