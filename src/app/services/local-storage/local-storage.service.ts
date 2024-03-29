import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public store(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public get(key: string): string {
    return localStorage.getItem(key);
  }
}
