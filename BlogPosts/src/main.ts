import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import {BlogPost} from './app/core/models/BlogPostModel';
import * as moment from 'moment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

let blogPosts = [];

for (let i = 1; i < 15; i++){
  let title = "Title " + i;
  let author = "Author " + i;
  let text = "<h2 style='text-align: center;'>HELLO</h2>Some really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really really long text";
  let tags = ["tag1", "tag2"];
  let status = Math.round(Math.random());
  let url = "https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png";
  let date = randomDate(new Date(2020, 1, 1), new Date());

  let bp:BlogPost = new BlogPost(i, title, author, text, tags, url, status, moment(date).format("DD/MM/YYYY"));

  blogPosts.push(bp);
}

localStorage.setItem("posts", JSON.stringify(blogPosts));

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
