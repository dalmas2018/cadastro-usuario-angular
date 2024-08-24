import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistreService } from '../registre.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  message!: string;

  constructor(private fb: FormBuilder, private registreService: RegistreService) {
    this.registerForm = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      c_senha: ['', [Validators.required]],
      telefone: ['', [Validators.required, Validators.pattern(/^\d{10,11}$/)]],
      endereco: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('senha')!.value === form.get('c_senha')!.value ? null : { 'mismatch': true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.registreService.registerUser(this.registerForm.value).subscribe(
        response => {
          this.message = 'Cadastro realizado com sucesso!';
        },
        error => {
          this.message = 'Erro ao realizar cadastro. Tente novamente mais tarde.';
        }
      );
    } else {
      this.message = 'Por favor, preencha o formulário corretamente.';
    }
  }
}

