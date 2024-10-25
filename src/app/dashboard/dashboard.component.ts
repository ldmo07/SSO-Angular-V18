import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { time } from 'console';
import { environment } from '../../environments/environment';
import { MsalService } from '@azure/msal-angular';

type ProfileType = {
  givenName?: string;
  surname?: string;
  userPrincipalName?: string;
  id?: string;
};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

    profile: ProfileType | undefined;
    private authService = inject(MsalService);

    constructor(private http: HttpClient) {
      //alert("Hola Mundo")
    }

    ngOnInit() {
      this.getProfile(environment.apiConfig.uri);
    }

    getProfile(url: string) {
      this.http.get(url).subscribe((profile) => {
        this.profile = profile;
      });
    }

    logout(popup?: boolean) {
      if (popup) {
        this.authService.logoutPopup({
          mainWindowRedirectUri: '/',
        });
      } else {
        this.authService.logoutRedirect();
      }
    }
}
