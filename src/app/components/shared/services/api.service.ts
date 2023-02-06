import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{

  constructor(private http: HttpClient) { }

  getDigimons() {
    return this.http.get('https://www.digi-api.com/api/v1/digimon')
  }

  ngOnInit(): void {
    
  }
}
