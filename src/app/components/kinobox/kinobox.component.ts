import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from "@angular/common";
import { Subject } from "rxjs";
import { GetMovieService } from "../../services/get-movie.service";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-kinobox',
  templateUrl: './kinobox.component.html',
  styleUrls: ['./kinobox.component.scss']
})
export class KinoboxComponent implements OnInit, OnDestroy {
  public movieId: string = '';
  public movieName: string = '';

  private destroy$: Subject<void> = new Subject<void>();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private renderer2: Renderer2,
    private getMovieService: GetMovieService,
  ) { }

  ngOnInit(): void {

    this.getMovie();
  }

  private getMovie(): void {
    const hostName = this.document.location.hostname;
    const subdomain = hostName.split('.')[0];
    this.movieId = subdomain;

    this.getMovieService.getMovie(this.movieId).pipe(
      takeUntil(this.destroy$),
    ).subscribe((res) => {
      this.movieName = res.name;
      const srcScript = this.renderer2.createElement('script');
      srcScript.type = 'text/javascript';
      srcScript.text = `kbox('.kinobox_player', {search: {kinopoisk: ${subdomain}}})`;
      this.renderer2.appendChild(this.document.body, srcScript);
    })
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
