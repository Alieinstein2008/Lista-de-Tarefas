import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function AddTask(){
    return (
        <Button variant={"default"} size={'icon-lg'} className="w-18 h-18 absolute self-baseline-last rounded-full top-10/12 mr-15 ">
            <Plus size={24}></Plus>
        </Button>
    )
}