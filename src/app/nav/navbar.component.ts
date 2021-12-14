import { Component } from "@angular/core";

@Component({
selector:'nav-bar',
templateUrl:'./navbar-component.html',
styles:[`
.nav.navbar-nav {font-size : 15px}
#searchForm { margin-rigth :100px}
@media(max-with :1200px) {#searchForm{display:none}}
`]
})

export class NavbarComponent{

}