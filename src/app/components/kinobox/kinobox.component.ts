import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-kinobox',
  templateUrl: './kinobox.component.html',
  styleUrls: ['./kinobox.component.scss']
})
export class KinoboxComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const srcScript = this.renderer2.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.text = `kbox('.kinobox_player', {search: {kinopoisk: '404900'}})`;
    this.renderer2.appendChild(this.document.body, srcScript);

    console.log('activateRoute', this.activateRoute)
  }

}