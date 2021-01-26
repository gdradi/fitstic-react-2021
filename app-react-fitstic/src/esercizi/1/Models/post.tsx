// export class Post {
//     constructor(title:string,author:string,content:string,creationDate:Date){ 
//         this.title = title;
//         this.author = author;
//         this.content = content;
//         this.creationDate = creationDate.getDate() +'/'
//                             +(creationDate.getMonth()+1) +'/'
//                             +creationDate.getFullYear() +' - '
//                             +creationDate.getHours() +':'
//                             +creationDate.getMinutes() +':'
//                             +creationDate.getSeconds().toString();
//     }
//     title:string;
//     author: string;
//     content: string;
//     creationDate: string;

// }

export interface Post {
    title:string;
    author: string;
    content: string;
    creationDate: string;
}



