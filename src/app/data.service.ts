import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  //free public api for testing 
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  //observable will hold the data from api

  getUser(userId){
    return this.http.get('https://jsonplaceholder.typicode.com/users/' + userId);
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
}
