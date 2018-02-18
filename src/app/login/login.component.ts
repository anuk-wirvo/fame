import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
    public formData = {
      email: '',
      password: '',
    };
    private formSubmitted:boolean=false;
    private loading:boolean=true;

    constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  login(form:NgForm,event) {
    event.preventDefault();
    if(form.valid){
        this.loading = false;
        setTimeout(() =>{this.loading = true;}, 1000);
        this.router.navigate(['/fame/account-reset']);
      }
  }

  fbLogin() {
    this.router.navigate(['/fame/fb-login']);
  }

  resetFrm(form:NgForm) {
    this.formData.email = '';
    this.formData.password = '';
  }

}
