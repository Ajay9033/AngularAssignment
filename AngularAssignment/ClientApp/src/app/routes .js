"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_component_1 = require("./user/user.component");
var sign_up_component_1 = require("./user/sign-up/sign-up.component");
var sign_in_component_1 = require("./user/sign-in/sign-in.component");
var HomeComponent_1 = require("./home/HomeComponent");
var auth_guard_1 = require("./auth/auth.guard");
var nav_bar_component_1 = require("./nav-bar/nav-bar.component");
var welcome_page_component_1 = require("./welcome-page/welcome-page.component");
var contact_us_component_1 = require("./contact-us/contact-us.component");
var about_us_component_1 = require("./about-us/about-us.component");
var userprofile_component_1 = require("./userprofile/userprofile.component");
var technology_component_1 = require("./technology/technology.component");
exports.appRoutes = [
    { path: '', redirectTo: '/login', pathMatch: "full" },
    {
        path: 'menu',
        canActivate: [auth_guard_1.AuthGuard],
        component: nav_bar_component_1.NavBarComponent,
        children: [{ path: 'welcome', component: welcome_page_component_1.WelcomePageComponent }]
    },
    {
        path: 'contact', component: nav_bar_component_1.NavBarComponent,
        children: [{ path: '', component: contact_us_component_1.ContactUsComponent, canActivate: [auth_guard_1.AuthGuard] }]
    },
    {
        path: 'aboutus', component: nav_bar_component_1.NavBarComponent,
        children: [{ path: '', component: about_us_component_1.AboutUsComponent, canActivate: [auth_guard_1.AuthGuard] }]
    },
    {
        path: 'home', component: nav_bar_component_1.NavBarComponent,
        children: [{ path: '', component: HomeComponent_1.HomeComponent, canActivate: [auth_guard_1.AuthGuard] }]
    },
    {
        path: 'userprofile', component: nav_bar_component_1.NavBarComponent,
        children: [{ path: '', component: userprofile_component_1.UserprofileComponent, canActivate: [auth_guard_1.AuthGuard] }]
    },
    {
        path: 'technology', component: nav_bar_component_1.NavBarComponent,
        children: [{ path: '', component: technology_component_1.TechnologyComponent, canActivate: [auth_guard_1.AuthGuard] }]
    },
    {
        path: 'signup', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_up_component_1.SignUpComponent }]
    },
    {
        path: 'login', component: user_component_1.UserComponent,
        children: [{ path: '', component: sign_in_component_1.SignInComponent }]
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
//# sourceMappingURL=routes .js.map