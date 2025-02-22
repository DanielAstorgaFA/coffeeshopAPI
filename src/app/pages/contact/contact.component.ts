import { Component, OnInit } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'app-contact',
    imports: [CommonModule, ReactiveFormsModule, NgClass],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    animations: [
      trigger('fadeIn', [
        transition(':enter', [
          style({ opacity: 0 }),
          animate('1.5s ease-out', style({ opacity: 1 }))
        ])
      ])
    ]
})

export class ContactComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    })
  }

  enviar(event: Event) {
    event.preventDefault();
    console.log(this.contactForm.value);
  }

  ngOnInit(): void {

  }

  hasErrors(field: string, typeError: string) {
    return this.contactForm.get(field)?.hasError(typeError) && this.contactForm.get(field)?.touched;
  }

}
