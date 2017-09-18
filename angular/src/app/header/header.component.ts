import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  onLogOut() {
    this.authService.logout();
    console.log('Logged out');
    this.router.navigate(['/login']);
    return false;
  }

}
