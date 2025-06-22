import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deck',
  standalone: false,
  templateUrl: './deck.component.html',
  styleUrl: './deck.component.css'
})
export class DeckComponent implements OnInit{

  public dados: any[] = [];
  public cardSelect: any;
  public filtro: string = '';

  public cardSelected(card: any) {
    this.cardSelect = card;
  }

  constructor(private http: HttpClient) { }
  get dadosFiltrados() {
    return this.dados.filter(item =>
      item.Name.toLowerCase().includes(this.filtro.toLowerCase())
    );
  }

  public fecharPainel() {
    this.cardSelect = null;
  }

  ngOnInit() {
    this.http.get<any[]>('data.json').subscribe(data => {
      this.dados = data.sort((a, b) => a.Name.localeCompare(b.Name));
    });
    //this.http.get('https://api.jsonbin.io/v3/b/6854d00a8960c979a5ad38ed', {
    //  headers: {
    //    'X-Master-Key': '$2a$10$jbhawA3lmv/.RhJ1To./9OrLj/Ugg2/SO9MdlY2POuII1vyBlQ6ZG',
    //    'X-Access-Key': '$2a$10$F9obREBDrHAJfOdc4Bh8v.F9IsPoXojdwSN5C.kB3LVKEv78t8ybe'
    //  }
    //}).subscribe(data => {
    //  this.dados = data;
    //});
  }
}
