import { Component, OnInit } from '@angular/core';
import { Translate } from 'src/app/models/traductor/translate';
import { TraductorService } from 'src/app/services/traductor.service';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.component.html',
  styleUrls: ['./traductor.component.css']
})
export class TraductorComponent implements OnInit {

  translate: Translate;

  constructor(private traductorService : TraductorService) { 
    this.translate = new Translate('es', 'en');
  }

  translateText(): void {
    this.traductorService.translate(this.translate).subscribe(
      (result) => {
        this.translate.result = result.outputs[0].output;
      }
    )
  }

  clean(): void {
    this.translate = new Translate('es', 'en');
  }

  ngOnInit(): void {
  }

}
