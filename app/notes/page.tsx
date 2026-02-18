import { fetchNotes } from "@/lib/api";
import { dehydrate, HydrationBoundary, QueryClient } from "@tanstack/react-query";
import NotesClient from "./Notes.client";
const notesKeys = {
  list: (query: string, page: number) => ['notes', { query, page }] as const,
};
export default async function NotesPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["notes", notesKeys.list('', 1)],
    queryFn: () => fetchNotes("", 1),
  });
    return (
    <HydrationBoundary state={dehydrate(queryClient)}>
        <NotesClient/>
    </HydrationBoundary>
)
}
