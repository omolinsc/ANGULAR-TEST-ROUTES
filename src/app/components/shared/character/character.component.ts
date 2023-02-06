// import { ApiService } from './../src/app/components/shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit{


  // constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getDigimons().subscribe((data:any) => {
    //   console.log(data)
    // })
  }

}
