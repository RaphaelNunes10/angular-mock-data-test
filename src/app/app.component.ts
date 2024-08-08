import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MockService } from './mock.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mock-data-test';

  dataList: string = "";
  mockService: MockService = inject(MockService);

  constructor() {
    this.mockService.getAllData().then((data: any[]) => {
      this.dataList = JSON.stringify(data);
    });
  }
}
