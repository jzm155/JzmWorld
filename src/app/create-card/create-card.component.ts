import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-card',
  standalone: false,
  templateUrl: './create-card.component.html',
  styleUrl: './create-card.component.css'
})
export class CreateCardComponent {
  constructor(private http: HttpClient) { }
  card = {
    Name: '',
    Description: '',
    Image: '',
    Attack: '',
    Defense: '',
    Magic: '',
    MagicResist: '',
    HealthPoint: '',
    Level: ''
  };
  enviar() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Master-Key': '$2a$10$jbhawA3lmv/.RhJ1To./9OrLj/Ugg2/SO9MdlY2POuII1vyBlQ6ZG',
      'X-Access-Key': '$2a$10$F9obREBDrHAJfOdc4Bh8v.F9IsPoXojdwSN5C.kB3LVKEv78t8ybe'
    });

    this.http.post('https://api.jsonbin.io/v3/b', this.card, { headers })
      .subscribe(res => {
        console.log('Carta enviada:', res);
      }, err => {
        console.error('Erro ao enviar:', err);
      });
  }
}
