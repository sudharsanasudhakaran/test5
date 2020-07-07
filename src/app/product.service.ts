import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}
  productData
  getService(): Observable<any> {
    return this.http.get(
      "https://5cdd0a92b22718001417c19d.mockapi.io/api/products"
    ).pipe(
      catchError(err => {
        console.log(err)
        return err
      })
    );
  }

  postService(data):Observable<any> {
    return this.http.post("https://5cdd0a92b22718001417c19d.mockapi.io/api/products",data)
  }

  delProduct(id):Observable<any>{
    return this.http.delete(`https://5cdd0a92b22718001417c19d.mockapi.io/api/products/${id}`)
  }
}