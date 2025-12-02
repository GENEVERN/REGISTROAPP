import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone:false
})
export class RegistroPage implements OnInit {
  formulario!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', [Validators.required, Validators.min(19)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  registrar() {
    console.log('✅ Datos registrados:', this.formulario.value);
  }
}
