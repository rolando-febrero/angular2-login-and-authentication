/**
 * Created by cfebrero on 11/4/2016.
 */

import {Component} from 'angular2/core';
import {AuthenticationService} from './authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
            <div class="container" style="background-color: white">
                <div class="content">
                    <span>Welcome to ABOUT area !</span>
                    <br />
                    <br />
                    <p>This system was created by: <br /><br />
                    Rolando Febrero<br />
                    Software Developer<br />
                    <br /><br />                    
                    <!-- we shouldn't create the link  this way, we should create a router 
                    component instead, this is only for demo purposes --> 
                    <a href="/home">Home Page</a><br />
                    <a (click)="logout()" href="#">Logout ?</a><br />  
                </div>
            </div>
    	`
})

export class AboutComponent {

    constructor(
        private _service:AuthenticationService){}

    /*
     * using the lifecycle hook ngOnInit to call the function _service.checkCredentials(),
     * if the user is not logged in he will be redirected to the login screen,
     * otherwise he will be able to see the component,
     * */
    ngOnInit(){
        this._service.checkCredentials();
    }

    logout() {
        this._service.logout();
    }
}
