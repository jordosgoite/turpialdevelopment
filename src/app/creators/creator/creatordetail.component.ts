import { Component, OnInit, Input } from '@angular/core';
import { CreatorsApiService} from './shared/creators-api.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-creatordetail',
  templateUrl: 'creatordetail.component.html',
  styleUrls: ['creatordetail.component.css']
})

export class CreatorDetailComponent implements OnInit {
    @Input() creator: any;
  constructor(private _route: ActivatedRoute, private creatorsSvc: CreatorsApiService) { }
  creatorId: string;
  creatorDetail: Observable<any>;
  creatorDetailComics: Observable<any>;
  serieDetailComics: Observable<any>;

 
  ngOnInit() {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.getCreators();
    this.getCreatorsComics();
    this.getCreatorsSeries();
  }
  getCreators() {
    this.creatorId = this._route.snapshot.paramMap.get('id');
    this.creatorDetail = this.creatorsSvc.getCreator(this.creatorId);
    console.log(this.creatorDetail);
  }
  getCreatorsComics() {
    this.creatorId = this._route.snapshot.paramMap.get('id');
    this.creatorDetailComics = this.creatorsSvc.getCreatorComics(this.creatorId);
  }
  getCreatorsSeries() {
    this.creatorId = this._route.snapshot.paramMap.get('id');
    this.serieDetailComics = this.creatorsSvc.getCreatorSerie(this.creatorId);
  }
  filterByName(arr, name){
    return arr.filter((item)=>item.name==name);
  }
}