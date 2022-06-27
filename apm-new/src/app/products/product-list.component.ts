import { Component, OnInit } from "@angular/core";
import { Product } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  constructor (public _ProductService: ProductService) {}
  currentItem = 'Rating';
  currentName = 'Name';
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  filteredProducts: Product[] = [];
  
  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.applyFilter(this._listFilter) : this._ProductService.getProducts();
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.listFilter = ''
  }

  applyFilter(filterBy: string): Product[] {
    filterBy = filterBy.trim().toLocaleLowerCase();
    return this._ProductService.getProducts().filter((product: Product) =>
      product.productName.toLocaleLowerCase().includes(filterBy));
  }

  onRatingClicked(message: string): void {
    this.pageTitle = "Product List: " + message;
  }
}