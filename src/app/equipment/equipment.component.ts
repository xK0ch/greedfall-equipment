import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html'
})
export class EquipmentComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  selectedRoute: string;

  constructor(
    private readonly activeRoute: ActivatedRoute,
  ) {
    this.selectedRoute = '';
  }

  ngOnInit() {
    this.subscription.add(
      this.activeRoute.params.subscribe(params => {
        this.selectedRoute = params.equipmentType
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
