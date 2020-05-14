import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenerateIdService {
  generateId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
   }

  generatePageId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
 
  constructor() { }
}
