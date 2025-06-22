import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() public Name!: string;
  @Input() public Description!: string;
  @Input() public Image!: string;
  @Input() public Attack!: string;
  @Input() public Defense!: string;
  @Input() public Magic!: string;
  @Input() public MagicResist!: string;
  @Input() public HealthPoint!: string;
  @Input() public Level!: string;
}
