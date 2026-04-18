import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardAction, CardHeader } from "@/components/ui/card";
import { BoardData } from "@/types/boardData.types";
import { ClockFading } from "lucide-react";

export default async function TaskCard({ boardData }: { boardData: BoardData }) {

  return (

    <Card key={boardData.taskPublicId} size="sm" className="w-full border border-gray-300 hover:cursor-pointer hover:-translate-y-0.5">
      <CardHeader>
        <CardTitle>{boardData.taskDescription}</CardTitle>
        <CardDescription>
          {new Date(boardData.taskExpiresIn).toDateString()}
          <ClockFading size={14}></ClockFading>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex">
        <Badge className="" style={{ backgroundColor: boardData.priorityColor }}>{boardData.priorityTag}</Badge>
      </CardFooter>
    </Card>

  );
}
