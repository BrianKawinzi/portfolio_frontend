import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    //hamburger Toogle
    const hamburger = document.querySelector('.hamburger');
    const menuList = document.querySelector('.menu-list');
    const windowWidth = window.innerWidth;

    if (hamburger && menuList) {
      hamburger.addEventListener('click', (event) => {
        menuList.classList.toggle('active');
        event.preventDefault();
      });

      const menuLinks = document.querySelectorAll('.menu-list li a');
      menuLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
          if (windowWidth < 768) {
            menuList.classList.remove('active');
            event.preventDefault();
          }
        });
      });
    }
  }

}
