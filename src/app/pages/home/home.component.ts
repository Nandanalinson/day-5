import { Component } from '@angular/core';
import { NavbarComponent } from '../../units/navbar/navbar.component';
import { CauroselComponent } from '../../units/caurosel/caurosel.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
