import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState: any = null;

  check: boolean ;
  
  constructor(private afu: AngularFireAuth, 
              private router: Router) {
    this.afu.authState.subscribe((auth => {
      this.authState = auth;
      this.check = (this.authState)? true : false;
    }))
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false;
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.id : ''
  }

  get currentUserName(): string {
    return this.authState['email'];
  }

  get currentUser(): any {
    return (this.authState !== null) ? this.authState : null;
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) && (!this.isUserAnonymousLoggedIn)) {
      return true
    } else {
      return false
    }
  }

  registerWithEmail(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afu.createUserWithEmailAndPassword(email, password)
        .then(
          userData => resolve(userData),
          err => reject(err)
        );
    });
  }

  isLoggeIn() {
    return of(this.currentUserName ? true : false)
  }

  loginWithEmail(email: string, password: string) {
    return this.afu.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user

        this.check = true
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signout(): void {
    this.afu.signOut();
    this.check = false
    this.router.navigate(['/login'])
  }

  getAuth(): Observable<any> {
    return this.afu.authState.pipe(
      map(auth => auth)
    );
  }

}