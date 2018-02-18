import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  private loading:boolean=true;
  public formData = {
    username: 'Test',
    nicNumber: '8821459403V',
    mobNumber: '0772349839',
    email: 'namalb@ualink.lk'
  };
  private formSubmitted:boolean=false;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  resetAccount(form:NgForm,event) {
    event.preventDefault();
    if(form.valid){
      this.loading = false;
      setTimeout(() =>{this.loading = true;}, 1000);
      this.router.navigate(['/fame/mobile-auth']);
    }
  }

  resetFrm(form:NgForm) {
    this.formData.username = '';
    this.formData.nicNumber = '';
    this.formData.mobNumber = '';
    this.formData.email = '';
  }

}
