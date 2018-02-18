import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mobile-auth',
  templateUrl: './mobile-auth.component.html',
  styleUrls: ['./mobile-auth.component.scss']
})
export class MobileAuthComponent implements OnInit {

  hide = true;
  private loading:boolean=true;
  public formData = { mobNumber: '123859843' };
  private formSubmitted:boolean=false;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mobileAuth(form:NgForm,event) {
    event.preventDefault();
    if(form.valid) {
      this.loading = false;
      setTimeout(() =>{this.loading = true;}, 1000);
      this.router.navigate(['/fame/mobile-auth-step-2']);
    }
  }

  resetFrm(form:NgForm) {
    this.formData.mobNumber = '';
  }

}
