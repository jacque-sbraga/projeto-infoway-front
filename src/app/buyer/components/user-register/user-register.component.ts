import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Address } from 'src/app/models/address.model';
import { Users } from 'src/app/models/user.model';
import { AddressService } from 'src/app/services/address.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  originalUser: Users = {
    name: null,
    surname: null,
    cpf: null,
    ddd: null,
    phone: null,
    login: null,
    password: null,
    password_hash: null,
    active: true,
    provider: false,
  };

  postError: boolean;
  postErrorMessage: string;

  originalAdress: Address = {
    logradouro: null,
    numero: null,
    complemento: null,
    bairro: null,
    cidade: null,
    estado: null,
    cep: null,
    user_id: null,
  };

  address: Address = {
    ...this.originalAdress,
  };

  user: Users = {
    ...this.originalUser,
  };

  constructor(
    private userService: UserService,
    private addressService: AddressService
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.userService.create(this.user).subscribe(
        (result) => {
          this.createAddress(result.id);
        },
        (error) => this.onHttpError(error)
      );
    } else {
      this.postError = true;
      this.postErrorMessage =
        'Por favor, preencha corretamente os campos em vermelho!';
    }
  }

  onHttpError(error: any) {
    console.log('Error: ', error);
    (this.postError = true), (this.postErrorMessage = error.error.errorMessage);
  }

  createAddress(userId: number) {
    this.address.user_id = userId;
    this.addressService.create(this.address).subscribe(
      (result) => {
        console.log('Success!', result);
      },
      (error) => {
        this.onHttpError(error);
      }
    );
  }
}
