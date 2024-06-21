import {Component} from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  footer_location: string = '121 King Melbourne Australia 3000';
  footer_phoneNumber: string = '+612 8376 6284';
  footer_email: string = 'mail@example.com';
  footer_link: string = 'www.youtube.com';

}
