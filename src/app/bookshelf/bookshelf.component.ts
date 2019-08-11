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
      description: "Ett måste för den som vill må bra. I den här boken får man veta hur hjärnan påverkas av fysisk aktivitet. Spoiler alert. Det är inte lite."
    },
    {
      title: "Tribe",
      author: "Sebastian Junger",
      imagePath: "./assets/img/bok_tribe.jpeg",
      description: "En bok om tillhörighet och hur det moderna samhället inte kan förse oss med våra mest grundläggande behov. "
    },
    {
      title: "Thinking Fast and Slow",
      author: "Daniel Kahneman",
      imagePath: "./assets/img/bok_fast_n_slow.jpeg",
      description: "In progress"
    },
    {
      title: "Born to Run",
      author: "Christopher McDougall",
      imagePath: "./assets/img/bok_born_to_run.jpeg",
      description: "Löpning"
    },
    {
      title: "The Magic of Thinking Big",
      author: "David J Schwartz",
      imagePath: "./assets/img/bok_thinking_big.jpeg",
      description: "self improvement"
    },
    {
      title: "Fooled by Randomness",
      author: "Nassim Nicholas Taleb",
      imagePath: "./assets/img/bok_fooled_by_randomness.jpeg",
      description: "Randomness"
    }
  ]

  constructor() { }

  ngOnInit() {
  /*  for (let i = 0; i < 20; i++) {
      this.books.push(this.books[0]);
    }*/
  }

}
