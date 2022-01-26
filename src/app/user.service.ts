import { Injectable, OnInit } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //This will be the intial values for our user
  //The any datatype allows the variable to be undefined 
  //Otherwise TS will complain and throw an error 
  User: any;
  constructor() {
    console.log(this.User);
    //this.User = { name: "Bobby", contact: "XxXtremePineappleXxX@email.com", bio: "Likes pineapples" };
  }

  getUser(): User {
    return this.User;
  }

  setUser(name: string, contact: string, bio: string): void {
    this.User.name = name;
    this.User.contact = contact;
    this.User.bio = bio;
    console.log(this.User);
  }
}


// import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';
// import { Injectable } from '@angular/core';
// import { User } from './User';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   //This will be the initial values for our user
//   User: User = {
//     "name": "Billy",
//     "contact": "Billythekid@yoyo.com",
//     "bio": "Born in southern Louisiana. Living the dream.",
//     "profilePic": "./assets/andrewRyan.jpeg"
//   }

//   listOfPics: string[] = [
//     "./assets/andrewRyan.jpeg",
//     "./assets/sander-cohen.jpg",
//     "./assets/sofiaLamb.png"
//   ]

//   constructor() {
//     console.log(this.User);
//     //{ name: "Bobby", contact: "XxXtremePineappleXxX@email.com", bio: "Likes pineapples" }
//     //now we need Get User method

//   }
//   //this gets and returns user object
//   getUser(): User {
//     return this.User;
//   }

//   //this takes all properties and puts them in user object
//   setUser(newUser: User): void {
//     this.User.name = newUser.name;
//     this.User.contact = newUser.contact;
//     this.User.bio = newUser.bio;
//     this.User.profilePic = newUser.profilePic;
//   }
// }
