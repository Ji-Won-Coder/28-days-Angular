import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
  cities =['Roma','Israel','Jerusalen'];
  title = 'La Biblia te dice hoy-';
  aqui!:string
  url='https://3.bp.blogspot.com/-ogyZACtxWCw/T5K9Wbz9YBI/AAAAAAAACxI/0PAHrvZ6eiI/s1600/biblia.jpg';
  name!:string;
   

  ngOnchanges(changes:SimpleChanges): void{
    console.log('Change ->', changes);
  }

  ngOnDestroy(): void {
      console.log('Onint ->');
  }

  ngOnInit(): void {
      console.log('Destroy');
  }
  onCityClicked(city:String): void{
  console.log('City ->', city);
  this.aqui=city;
  }
}
