import { inject, Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  UserCredential,
  fetchSignInMethodsForEmail,
  onAuthStateChanged,
  signOut,
  User
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  auth: Auth = inject(Auth);
  private currentUserSubject = new BehaviorSubject<User | null>(null);

  constructor() {
    onAuthStateChanged(this.auth, (user) => {
      this.currentUserSubject.next(user);
    });
  }

  async register(email: string, password: string): Promise<UserCredential> {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }

  async loginWithGoogle(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async loginWithGitHub(): Promise<UserCredential> {
    const provider = new GithubAuthProvider();
    return await signInWithPopup(this.auth, provider);
  }

  async loginWithEmail(email: string, password: string): Promise<UserCredential> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async checkIfEmailExists(email: string): Promise<boolean> {
    const methods = await fetchSignInMethodsForEmail(this.auth, email);
    return methods.length > 0;
  }

  isLoggedIn(): Observable<User | null> {
    return this.currentUserSubject.asObservable();
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
