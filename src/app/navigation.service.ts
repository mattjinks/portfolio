import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private home = new BehaviorSubject<boolean>(false);
  private experience = new BehaviorSubject<boolean>(false);
  private resume = new BehaviorSubject<boolean>(false);
  private contact = new BehaviorSubject<boolean>(false);

  constructor() {
    // this.home = new BehaviorSubject<boolean>(false);;
    // this.experience = false;
    // this.resume = false;
    // this.contact = false;
  }

  setHomeState(state: boolean) {
    this.home.next(state);
  }

  getHomeState(): Observable<boolean> {
    return this.home.asObservable();
  }

  setExperienceState(state: boolean) {
    this.experience.next(state);
  }

  getExperienceState(): Observable<boolean> {
    return this.experience.asObservable();
  }

  setResumeState(state: boolean) {
    this.resume.next(state);
  }

  getResumeState(): Observable<boolean> {
    return this.resume.asObservable();
  }

  setContactState(state: boolean) {
    this.contact.next(state);
  }

  getContactState(): Observable<boolean> {
    return this.contact.asObservable();
  }

  resetStates() {
    this.home.next(false);
    this.experience.next(false);
    this.contact.next(false);
    this.resume.next(false);
  }
}
