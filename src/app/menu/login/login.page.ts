import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {NavController, ToastController} from '@ionic/angular';
import {UserService} from '../../api/user.service';
import {Storage} from '@ionic/Storage';

import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


    user = new User();
    userLoginForm: FormGroup;
    listeClient: User[];
    isConnected = false;
    profil = new User();
    affiche = false;

  constructor(private navCtrl: NavController, private formBuilder: FormBuilder,
                              private userService: UserService, private storage: Storage, private toast: ToastController) {
                                       this.userLoginForm = this.formBuilder.group({
                                           password: new FormControl('', Validators.required),
                                           phone: new FormControl('', Validators.compose([Validators.required,
                                                           Validators.pattern('^[0-9]+$'), Validators.minLength(8), Validators.maxLength(8)])),
                                       });
                               }

  ngOnInit() {
  }

login(){
 console.log("Faysalll");
}

}
