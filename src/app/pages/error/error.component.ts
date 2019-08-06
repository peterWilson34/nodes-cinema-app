import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }
  errorCode;
  errorText;
  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=>{
      this.errorCode = params.error_num;
      this.errorText = params.error_msg;

    })
  }

}
