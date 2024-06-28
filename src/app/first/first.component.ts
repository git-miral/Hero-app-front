import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {




  


 

  ngOnInit(): void {

  };
  constructor(public _shared :SharedService) {};

}
