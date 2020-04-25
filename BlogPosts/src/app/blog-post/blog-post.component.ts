import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../core/models/BlogPostModel';
import {DomSanitizer} from '@angular/platform-browser';
import * as moment from 'moment';

@Component({
    selector: 'app-blog-post',
    templateUrl: './blog-post.component.html',
    styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {
    blogPosts: BlogPost[];

    constructor(private sanitizer: DomSanitizer) {
    }

    ngOnInit(): void {
        this.blogPosts = JSON.parse(localStorage.getItem('posts'));
        this.filterByOrder(1);
    }

    removePost(blogPost: BlogPost) {
        for (let i = 0; i < this.blogPosts.length; i++) {
            if (this.blogPosts[i].id === blogPost.id) {
                this.blogPosts.splice(i, 1);
            }
        }

        localStorage.setItem('posts', JSON.stringify(this.blogPosts));
    }

    transform(value: any): any {
        return this.sanitizer.bypassSecurityTrustHtml(value);
    }

    filterByStatus(val){
        this.blogPosts = JSON.parse(localStorage.getItem('posts'));
        if(val === "all"){
            return;
        }
        this.blogPosts = this.blogPosts.filter(a => a.status == val);
    }

    filterByOrder(val) {
        if (val === '1') { //Ascending
            this.blogPosts = this.blogPosts.sort((a, b) => {
                if (moment(a.date, "DD/MM/YYYY").isBefore(moment(b.date, "DD/MM/YYYY"))) {
                    return 1;
                }
                else{
                    return -1;
                }
            })
        }
        else{ //Descending
            this.blogPosts = this.blogPosts.sort((a, b) => {
                if (moment(a.date, "DD/MM/YYYY").isAfter(moment(b.date, "DD/MM/YYYY"))) {
                    return 1;
                }
                else{
                    return -1;
                }
            })
        }
    }

}
