import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardTitle, CardDescription, CardFooter, CardAction, CardHeader } from "@/components/ui/card";
import { BoardData } from "@/types/boardData.types";
import { ClockFading } from "lucide-react";

export default async function TaskCard({ cardData }: { cardData: BoardData }) {

  return (

    <Card size="sm" className="w-full border border-gray-300 hover:cursor-pointer hover:-translate-y-0.5">
      <CardHeader>
        <CardTitle>{cardData.taskDescription}</CardTitle>
        <CardDescription>
          {new Date(cardData.taskExpiresIn).toDateString()}
          <ClockFading size={14}></ClockFading>
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex">
        <Badge className="" style={{ backgroundColor: cardData.priorityColor }}>{cardData.priorityTag}</Badge>
      </CardFooter>
    </Card>

  );
}
