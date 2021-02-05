/**
 * L'interfaccia Post contiene le caratteristiche che strutturano il Post.
 */
export interface Post {
    readonly id: number;
    readonly author: string;
    readonly title: string;
    readonly content: string;
    readonly date: string;
    readonly isEdited: boolean;
}