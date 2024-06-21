import { Component, OnInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])

  onWindowScroll(e: Event): void {
    const nav = this.renderer.selectRootElement('.navbar', true);
    if (window.pageYOffset > 0) {
      this.renderer.addClass(nav, 'scroll-background');
    } else {
      this.renderer.removeClass(nav, 'scroll-background');
    }
  }

}
