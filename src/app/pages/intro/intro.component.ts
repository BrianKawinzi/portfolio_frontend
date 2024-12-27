import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {
  titles = ['Flutter Developer', 'Angular Enthusiast', 'UI/UX Designer'];
  currentTitle = '';
  charIndex = 0;
  isDeleting = false;
  titleIndex = 0;

  ngOnInit() {
    this.typeEffect();
  }

  typeEffect() {
    const current = this.titles[this.titleIndex];
    if (this.isDeleting) {
      this.charIndex--;
      this.currentTitle = current.substring(0, this.charIndex);
    } else {
      this.charIndex++;
      this.currentTitle = current.substring(0, this.charIndex);
    }

    if (!this.isDeleting && this.charIndex === current.length) {
      this.isDeleting = true;
      setTimeout(() => this.typeEffect(), 1000); // Pause before deleting
    } else if (this.isDeleting && this.charIndex === 0) {
      this.isDeleting = false;
      this.titleIndex = (this.titleIndex + 1) % this.titles.length;
      this.typeEffect();
    } else {
      setTimeout(() => this.typeEffect(), this.isDeleting ? 50 : 150); // Typing speed
    }
  }

  viewWork() {
    console.log('View my work clicked!');
  }

  downloadResume() {
    console.log('Download resume clicked!');
  }

}
