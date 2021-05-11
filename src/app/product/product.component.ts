import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, public router: Router) {
    this.form = fb.group({
      'productID': [null, Validators.required],
      'productName': [null, Validators.required],
      'productManager': [null, null],
      'salesStartDate': [null, Validators.required],
      'salesQ1': [null, Validators.required],
      'salesQ2': [null, Validators.required],
      'salesQ3': [null, Validators.required],
      'salesQ4': [null, Validators.required]
    });
  }

  save(formFields: any) {

    const sale = {
      "productID": formFields.productID,
      "productName": formFields.productName,
      "productManager": formFields.productManager,
      "salesStartDate": formFields.salesStartDate,
      "salesQ1": formFields.salesQ1,
      "salesQ2": formFields.salesQ2,
      "salesQ3": formFields.salesQ3,
      "salesQ4": formFields.salesQ4,
    }

    sessionStorage.setItem('newSale', JSON.stringify(sale));
    this.router.navigate(['/sales']);
  }
}