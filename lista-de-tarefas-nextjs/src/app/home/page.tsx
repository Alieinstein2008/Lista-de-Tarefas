import Board from "../ui/board";
import Topbar from "../ui/topbar";
export default function Page(){
    return(
        <main className="w-full h-dvh overflow-hidden">
            <Topbar></Topbar>
            <Board taskQuantity={0}></Board>
        </main>
    );
}