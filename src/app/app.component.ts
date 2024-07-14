import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'filmfndr';

  public ngOnInit() {
    // this.loadScript('https://kinobox.tv/kinobox.min.js').then(() => {
    //   // Вызов функции kbox после загрузки скрипта
    //   kbox('.kinobox_player', {search: {kinopoisk: 'ID_ФИЛЬМА'}});
    // });
  }

  public loadScript(src: string): Promise<any> {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      document.body.appendChild(script);
    });
  }

}

