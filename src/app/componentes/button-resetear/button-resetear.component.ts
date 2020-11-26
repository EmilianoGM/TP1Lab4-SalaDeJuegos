import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-resetear',
  templateUrl: './button-resetear.component.html',
  styleUrls: ['./button-resetear.component.scss']
})
export class ButtonResetearComponent implements OnInit {
  @Output() emitData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  public resetear(){
    this.emitData.emit();
  }
}
