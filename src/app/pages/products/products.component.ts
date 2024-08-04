import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { CardComponent } from '../../units/card/card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent{}
