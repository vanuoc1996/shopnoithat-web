import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Store, State} from "@ngrx/store";
import * as userLogins from '../../store/_actions/userActions';
import {UserState, getLogin} from '../../store/_reducers'
import {Router, ActivatedRoute} from '@angular/router';
import {UserService} from '../../store/_services/user.services'

@Component({
  selector: 'box-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  title = "Box Login"
  profileForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  // @ts-ignore
  loginForm: FormGroup;
  // @ts-ignore
  isCheckLogin: boolean;
  isSubmit: boolean = false;

  dataLogin = [
    {
      "id": 1,
      "name": "NGUYEN THANH HOA",
      "email": "abc@gmail.com",
      "password": "1234",
      "remember_token": 'TYDAKSDJASLKDJASLKDJASDASD'
    },
    {
      "id": 2,
      "name": "SKIPPERHOA",
      "email": "skipperhoa2013@gmail.com",
      "password": "hoa123",
      "remember_token": 'TYDAKSDJASLKDJASLKDJASDASD'
    }
  ]
  get f() { return this.loginForm.controls; }
  constructor(private _store: Store<UserState>,
              private router: Router,
              private _userService: UserService ) {
  }

  onSubmit() {
    this.isSubmit = true;
    this.dataLogin.filter(item => {
      if (item.email == this.profileForm.value['email'] && item.password == this.profileForm.value['password']) {
        this.isCheckLogin = true;

        this._store.dispatch(new userLogins.CheckLoginAction({
          id: item.id,
          name: item.name,
          email: item.email,
          password: item.password,
          remember_token: item.remember_token
        }));
      }

      //  this._userService.login(this.profileForm.value).subscribe(item=>{
      //      if(item.success>0){
      //           console.log("Success login");
      //           this._store.dispatch(new userLogins.CheckLoginAction({
      //               id:item.data[0].id,
      //               name:item.data[0].name,
      //               email:item.data[0].email,
      //               password:item.data[0].password,
      //               remember_token:item.data[0].remember_token
      //            }));
      //           this.router.navigate(['/detail']);
      //      }
      // })

    });
    if (this.isCheckLogin) {
      console.log("Success login");
      this.router.navigate(['/admin']);
    } else {
      console.log("Fail login");
      this.isCheckLogin = false;
    }
  }
  // login(username: string, password: string) {
  //   return this.dataLogin()
  //     .pipe(map(user => {
  //       // store user details and jwt token in local storage to keep user logged in between page refreshes
  //       localStorage.setItem('currentUser', JSON.stringify(user));
  //       this.currentUserSubject.next(user);
  //       return user;
  //     }));
  // }
}
