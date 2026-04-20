import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function BoardSkeleton() {
    return (
            <Card className="w-full max-w-2xl" size="sm">
                <CardHeader>
                    <Skeleton className="h-20 w-full" />
                </CardHeader>
                <CardContent className="flex flex-col gap-y-2">
                    <Skeleton className="aspect-video w-full h-35" />
                    <Skeleton className="aspect-video w-full h-35" />
                    <Skeleton className="aspect-video w-full h-35" />
                </CardContent>
            </Card>
    )
}