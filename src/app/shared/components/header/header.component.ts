import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeaderService } from '../../core/services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.searchControl.valueChanges.subscribe((val) => {
      this.headerService.updateSearchSubject(val || '');
    })
  }

}
