import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/interface-user-settings';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  originalUserSettings: UserSettings = {
    name: '',
    description: '',
    quantity: 0,
    price: 0.00,
    sku: '',
    image: '',
    available: true,
    token: 'Não implementado ainda!',
    category_id: '',
  };

  userSettings: UserSettings = { ...this.originalUserSettings };
  postError: boolean;
  postErrorMessage: string;
  categorys: Observable<string[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.categorys = this.dataService.getCategories();
  }

  onSubmit(form: NgForm) {
    console.log('onSubmit ', form.valid);

    if (form.valid) {
      this.dataService.postUserSettingsForm(this.userSettings).subscribe(
        (result) => {
          console.log('sucess', result);
        },
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage = 'Por favor, preencha corretamente os campos em vermelho!';
    }
  }

  onBlur(field: NgModel) {
    console.log('onBlur ', field.valid);
  }

  onHttpError(error: any) {
    console.log('Error: ', error);
    (this.postError = true), (this.postErrorMessage = error.error.errorMessage);
  }

}
