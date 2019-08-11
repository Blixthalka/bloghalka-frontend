import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.scss']
})
export class BookshelfComponent implements OnInit {

  books: Book[] = [
    {
      title: "Hjärnstark",
      author: "Anders Hansen",
      imagePath: "./assets/img/bok_hjarnstark.jpeg",
      description: "Ett måste för den som vill må bra. I den här boken får man veta hur hjärnan påverkas av fysisk aktivitet. Spoiler alert. Det är inte lite.",
      rating: 5
    },
    {
      title: "Tribe",
      author: "Sebastian Junger",
      imagePath: "./assets/img/bok_tribe.jpeg",
      description: "En bok om tillhörighet och hur det moderna samhället inte kan förse oss med våra mest grundläggande behov. Inte en stor investering. Väcker intressanta frågor.",
      rating: 3
    },
    {
      title: "Thinking Fast and Slow",
      author: "Daniel Kahneman",
      imagePath: "./assets/img/bok_fast_n_slow.jpeg",
      description: "Nästa bok till rakning.",
      rating: 0
    },
    {
      title: "Born to Run",
      author: "Christopher McDougall",
      imagePath: "./assets/img/bok_born_to_run.jpeg",
      description: "Löpning. Löpning. Löpning. Ganska seg bok. Innehåller intressanta argument om barfortalöpning. Läs bara om du älskar löpning. Speciellt riktad till ultralöpare.",
      rating: 2
    },
    {
      title: "The Magic of Thinking Big",
      author: "David J Schwartz",
      imagePath: "./assets/img/bok_thinking_big.jpeg",
      description: "Väldigt amerikansk bok om personlig förbättring. Bra och egentligen självklara tips. Bra att få repetition.",
      rating: 3
    },
    {
      title: "Fooled by Randomness",
      author: "Nassim Nicholas Taleb",
      imagePath: "./assets/img/bok_fooled_by_randomness.jpeg",
      description: "Intressant bok om hur slumpmässighet påverkar våra liv. När man läser denna bok inser man hur dålig människan är på att tänka i sannorlikehter. Väldigt nyttig.",
      rating: 4
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert T Kiyosaki",
      imagePath: "./assets/img/bok_rich_dad.jpeg",
      description: "Ekonomibok som ger ett grundläggande tänk kring privatekonomi. Väldigt för företagande, samt att köpa tillgångar istället för förplikterser.",
      rating: 4
    },
    {
      title: "The Drunkard's Walk",
      author: "Leonard Mlodinow",
      imagePath: "./assets/img/bok_drunkards.jpeg",
      description: "Grundläggande bok om sannorlikhet. Går långt tillbaka i historien. Handlar även om hur dålig människan är på att förstå sannorlikheter.",
      rating: 4
    },
    {
      title: "The Story of the Human Body",
      author: "Daniel Lieberman",
      imagePath: "./assets/img/bok_story_human_body.jpeg",
      description: "Går igenom vad våran kropp är anpassad för, samt hur missanpassad den är för det liv vi lever idag. Intressant.",
      rating: 5
    }
  ]

  constructor() { }

  ngOnInit() {
  /*  for (let i = 0; i < 20; i++) {
      this.books.push(this.books[0]);
    }*/
  }

  maxRating() {
    return new Array(5);
}

}
