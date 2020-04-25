import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BlogPostComponent} from './blog-post/blog-post.component';
import {PostFormComponent} from './post-form/post-form.component';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {
        path: 'post', component: PostFormComponent
    },
    {
        path: '', component: BlogPostComponent
    }
];

@NgModule({

    declarations: [
        AppComponent,
        BlogPostComponent,
        PostFormComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes
        ),
        BrowserModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
