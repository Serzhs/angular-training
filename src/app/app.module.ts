import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { booksReducer } from './state/books.reducer';
import { animalsReducer } from './state/animals.reducer';
import { collectionReducer } from './state/collection.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { TaskComponent } from './components/task/task.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { ButtonComponent } from './shared/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { BooksComponent } from './pages/books/books.component';
import { StoreModule } from '@ngrx/store';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { AnimalsComponent } from './pages/animals/animals.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    TaskComponent,
    AddTaskComponent,
    ButtonComponent,
    HeaderComponent,
    BooksComponent,
    BookListComponent,
    BookCollectionComponent,
    AnimalsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      books: booksReducer,
      collection: collectionReducer,
      animals: animalsReducer
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
