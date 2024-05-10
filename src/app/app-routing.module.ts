import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent,
  // },
  {
    path: 'about',
    component: AboutPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then(m => m.CountriesModule) ,
  },
  {
    //*cuando van a cualquier otra ruta , se les redirige  a home
    //? Se pone el comodin al final ya que comprueva las rutas en orden
    path: '**',
    redirectTo: 'countries',
  },
];

@NgModule({
  imports: [
    //* cuando es el router principal se pone un .forRoot(modelo de rutas)
    //?.forChild() se usa para submodulos
    RouterModule.forRoot(routes),
  ],
  exports: [
    //* se exporta el rputer confirado arriba
    RouterModule,
  ],
})
export class AppRoutingModule {}

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
