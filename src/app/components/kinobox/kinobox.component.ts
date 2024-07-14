import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: 'app-kinobox',
  templateUrl: './kinobox.component.html',
  styleUrls: ['./kinobox.component.scss']
})
export class KinoboxComponent implements OnInit {
  public movieId: string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
  ) { }

  ngOnInit(): void {
    const hostName = this.document.location.hostname;
    const subdomain = hostName.split('.')[0];
    this.movieId = subdomain;

    const srcScript = this.renderer2.createElement('script');
    srcScript.type = 'text/javascript';
    srcScript.text = `kbox('.kinobox_player', {search: {kinopoisk: ${subdomain}}})`;
    this.renderer2.appendChild(this.document.body, srcScript);
  }
}
