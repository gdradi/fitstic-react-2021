/**
 * L'interfaccia Post contiene le caratteristiche che strutturano il Post.
 */
export interface Post {
    id: number;
    author: string;
    title: string;
    content: string;
    date: string;
    isEdited: boolean;
}