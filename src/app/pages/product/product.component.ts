import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IProduct } from '../../models/product.model';
import { ApiProductService } from '../../services/api-product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productList: IProduct[] = [];

  constructor(private productService: ApiProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
        this.productList = data;
        console.log(this.productList);
    });
  }
}
