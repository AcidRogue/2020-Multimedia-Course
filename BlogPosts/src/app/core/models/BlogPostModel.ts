export class BlogPost {
    id: number;
    title: string;
    author: string;
    text: string;
    tags: string[];
    status: number;
    url?: string;
    date: string;

    constructor(id: number, title: string, author: string, text: string, tags: string[], url: string, status: number, date: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.text = text;
        this.tags = tags;
        this.url = url;
        this.status = status;
        this.date = date;
    }
}
