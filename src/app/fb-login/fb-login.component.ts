import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.scss']
})
export class FbLoginComponent implements OnInit {

  private loading:boolean=true;
  public formData = {};
  private formSubmitted:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  mobileAuth(form:NgForm,event) {
    event.preventDefault();
    if(form.valid) {
      this.loading = false;
      setTimeout(() =>{this.loading = true;}, 1000);
    }
  }

  goToFB() {
    window.open('https://www.facebook.com/');
  }

}
