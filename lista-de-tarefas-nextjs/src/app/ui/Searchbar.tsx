import { Search } from "lucide-react";
import { poppins } from "./fonts";
import { Field, FieldLabel } from "@/components/ui/field";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
export default function Searchbar() {
    return (
       <Field className={`${poppins.className} w-1/5 justify-self-end`}>
            <ButtonGroup>
                <Input id="search-group" placeholder="Pesquisar Tarefas"></Input>
                <Button variant={'outline'}>
                    <Search></Search>
                </Button>
            </ButtonGroup>
       </Field>

    )
}