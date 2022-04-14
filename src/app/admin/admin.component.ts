
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  active = 'welcome';

  constructor(private actRouter: ActivatedRoute, private _adminService: AdminService, private router: Router) { }
  public isCollapsed = false;
  ngOnInit(): void {
    this._adminService.setAdminId(this.actRouter.snapshot.params['adminId']);

  }

  logOut() {
    this._adminService.adminLogOut()
    this.router.navigate(['home'])
  }

}
