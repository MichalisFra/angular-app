import { Component, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
  jokesService = inject(JokesService)
  dadJoke: string = '';
  chuckJoke: string = '';

  ngOnInit(){
    // this.jokesService.getDadJokes()
    //   .subscribe((data) => {
    //     console.log("DAD JOKE: ", data.joke)
    //     this.dadJoke = data.joke;
    //   })

    //   this.jokesService.getChuckNorrisJokes()
    //   .subscribe((data) => {
    //     console.log(data.value)
    //     this.chuckJoke = data.value;
    //   })
    this.refreshDadJoke();
    this.refreshChuckJoke();
  }

  
  refreshDadJoke() {
    this.jokesService.getDadJokes()
    .subscribe((data) => {
      this.dadJoke = data.joke;
    })
  }

  refreshChuckJoke() {
    this.jokesService.getChuckNorrisJokes()
    .subscribe((data) => {
      this.chuckJoke = data.value;
    })
  }
}
