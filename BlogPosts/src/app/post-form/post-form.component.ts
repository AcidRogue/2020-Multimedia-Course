import {Component, OnInit} from '@angular/core';
import {BlogPost} from '../core/models/BlogPostModel';
import {ActivatedRoute} from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
    styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
    data;
    id;
    blogPosts;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            this.id = params['id'];
        });

        console.log(this.id);

        this.blogPosts = JSON.parse(localStorage.getItem('posts'));

        this.data = {
            title: '',
            author: '',
            tags: '',
            status: 1,
            url: '',
            text: '',
            date: ''
        };

        if (this.id) {
            let blogPost: BlogPost;
            for (let i = 0; i < this.blogPosts.length; i++) {
                if (this.blogPosts[i].id == this.id) {
                    blogPost = this.blogPosts[i];
                    break;
                }
            }

            this.data = {
                title: blogPost.title,
                author: blogPost.author,
                tags: blogPost.tags.join(','),
                status: blogPost.status,
                url: blogPost.url,
                text: blogPost.text,
                data: blogPost.date
            };
        }
    }

    ngOnInit(): void {

    }

    addPost() {
        let tags = this.data.tags.split(/,| /);

        if (this.id) {
            for (let i = 0; i < this.blogPosts.length; i++) {
                if (this.blogPosts[i].id == this.id) {
                    this.blogPosts[i] = new BlogPost(this.id, this.data.title, this.data.author, this.data.text, tags, this.data.url, this.data.status, this.data.date);
                }
            }
        } else {
            let id = this.blogPosts[this.blogPosts.length - 1].id++;

            let bp = new BlogPost(id, this.data.title, this.data.author, this.data.text, tags, this.data.url, this.data.status, this.data.date);

            this.blogPosts.push(bp);
        }

        localStorage.setItem('posts', JSON.stringify(this.blogPosts));

        this.router.navigate(['/']);
    }
}
