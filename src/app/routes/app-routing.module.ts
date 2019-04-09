import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeModule} from './home/home.module';
import {HomeComponent} from './home/home.component';
import {ProjectsModule} from './projects/projects.module';
import {ProjectsComponent} from './projects/projects.component';
import {ExperienceModule} from './experience/experience.module';
import {ExperienceComponent} from './experience/experience.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HomeModule,
        ProjectsModule,
        ExperienceModule,
    ],
    exports: [
        RouterModule,
        HomeModule,
        ProjectsModule,
        ExperienceModule,
    ]
})
export class AppRoutingModule {
}
