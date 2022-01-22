import { Component, Input, OnInit } from '@angular/core';
import { Navbar } from '../../models/Netflix';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() public navbar!: Navbar
  public btnText: string = "Modo Claro"
  constructor() { }

  ngOnInit(): void {
  }

  public setDarkTheme(): void {
    document.body.classList.toggle('light-theme');
    this.btnText == 'Modo Claro' ? this.btnText = 'Modo Oscuro' : this.btnText = 'Modo Claro'
  }
}
