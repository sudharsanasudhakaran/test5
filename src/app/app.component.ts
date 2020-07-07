import { Component } from "@angular/core";
import { ProductService } from "./product.service";
import { Observable } from "rxjs";
import { FormGroup, FormBuilder } from "@angular/forms";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "httpModuleDemo";
  productResult: Observable<any>;
  productForm: FormGroup;

  constructor(private productService: ProductService, private fb: FormBuilder) {
    this.productResult = this.productService.getService();
    this.productForm = this.fb.group({
      productName: this.fb.control(""),
      price: this.fb.control(""),
    });
  }

  postData() {
    this.productService.postService(this.productForm.value).subscribe(
      (data) => {
        alert("Data Stored Success");
      },
      (err) => {
        alert("Data Error");
      },
      () => {
        alert("Complete");
      }
    );
  }

  deleteProduct(id) {
    this.productService.delProduct(id).subscribe(
      () => {
        alert("Product Deleted");
      },
      (err) => {},
      () => {}
    );
  }
}