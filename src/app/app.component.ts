import { Component, HostBinding, OnInit } from '@angular/core';
import { Tenant, TenantService } from './tenant/tenant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AngularMultiTenant';

  constructor(private tenantService: TenantService) {
  }

  @HostBinding('class.theme-client1') public client1Theme: boolean;
  @HostBinding('class.theme-client2') public client2Theme: boolean;

  ngOnInit() {
    this.enableThemes();
  }

  enableThemes() {
    this.client1Theme = this.tenantService.getTenant() === Tenant.CLIENT1;
    this.client2Theme = this.tenantService.getTenant() === Tenant.CLIENT2;
  }

  get tenant() : string {
    return this.tenantService.getTenant();
  }
}
