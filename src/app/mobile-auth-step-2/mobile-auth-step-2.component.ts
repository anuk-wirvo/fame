import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-mobile-auth-step-2',
  templateUrl: './mobile-auth-step-2.component.html',
  styleUrls: ['./mobile-auth-step-2.component.scss']
})
export class MobileAuthStep2Component implements OnInit {

  private loading:boolean=true;
  public formData = { mobNumber: '9084756328' };
  private formSubmitted:boolean=false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  mobileAuth(form:NgForm,event) {
    event.preventDefault();
    if(form.valid) {
      this.loading = false;
      setTimeout(() =>{this.loading = true;}, 1000);
      this.router.navigate(['/fame/fb-login']);
    }
  }

  resetFrm(form:NgForm) {
    this.formData.mobNumber = '';
  }

}
