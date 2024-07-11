import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor() {}
  itemNames = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];
  checkItems: any[] = [];
  allChecked = false;

  toggleAll(event: any) {
    const isChecked = event.target.checked;
    this.allChecked = isChecked;
    this.checkItems = isChecked ? [...this.itemNames] : [];
  }

  itemClicked(item: any, event: any) {
    const isChecked = event.target.checked;
    if (isChecked) {
      this.checkItems.push(item);
      console.log(`${item} clicked!, ${event.target.checked}`);
    } else {
      this.checkItems = this.checkItems.filter((i) => i !== item);
      console.log(`${item} clicked!, ${event.target.checked}`);
    }
    this.updateAllChecked();
  }

  isChecked(item: any) {
    return this.checkItems.includes(item);
  }
  
  updateAllChecked() {
    this.allChecked = this.checkItems.length === this.itemNames.length;
  }

  done(e: any) {
    console.log(this.checkItems, 'done clicked');
  }
}
