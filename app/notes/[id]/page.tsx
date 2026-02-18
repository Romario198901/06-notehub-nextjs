import { fetchNoteById } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NoteDetailsClient from "./NoteDetails.client";

interface SingleNoteProps {
  params: Promise<{ NoteId: string }>;
}


export default async function NoteDetails({params}: SingleNoteProps) {
    const queryClient = new QueryClient();
    const { NoteId } = await params;
    await queryClient.prefetchQuery({
    queryKey: ["note", NoteId],
    queryFn: () => fetchNoteById(NoteId),
  });
    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <NoteDetailsClient/>
    </HydrationBoundary>
)
}