
import { Routes } from '@angular/router'
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from "./home/HomeComponent";
import { AuthGuard } from './auth/auth.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TechnologyComponent } from './technology/technology.component';


export const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: "full" },
  {
    path: 'menu',
    canActivate: [AuthGuard],
    component: NavBarComponent,
    children: [{ path: 'welcome', component: WelcomePageComponent }]
  },
  {
    path: 'contact', component: NavBarComponent,
    children: [{ path: '', component: ContactUsComponent, canActivate: [AuthGuard] }]
  },
  {
    path: 'aboutus', component: NavBarComponent,
    children: [{ path: '', component: AboutUsComponent, canActivate: [AuthGuard] }]
  },
  {
    path: 'home', component: NavBarComponent,
    children: [{ path: '', component: HomeComponent, canActivate: [AuthGuard]}]
  },
  {
    path: 'userprofile', component: NavBarComponent,
    children: [{ path: '', component: UserprofileComponent, canActivate: [AuthGuard] }]
  },
  {
    path: 'technology', component: NavBarComponent,
    children: [{ path: '', component: TechnologyComponent, canActivate: [AuthGuard] }]
  },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
   //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  //  {
  //  path: 'menu',
  //  canActivate: [AuthGuard],
  //  component: NavBarComponent,
  //  children: [
  //    { path: 'home', component: HomeComponent }
  //  ]
  //},
];
