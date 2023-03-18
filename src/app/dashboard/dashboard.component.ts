import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  
  visatitle:string = "VISA Credito";
  americantitle:string = "American Express Credito";
  cuentatitle:string = "Cuenta unica";
  name = "Francisco";
}