import {Component, OnInit} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {ComponentNamesService} from "../../../componentNames.service";
import {SeoService} from "../../../../services/seo/seo.service";

@Component({
  selector: 'zawieszki_na_kolacz',
  templateUrl: './cakeTickets.component.html',
  styleUrls: ['../../../../app.component.css', 'cakeTickets.component.css']
})
export class CakeTicketsComponent implements OnInit {

  constructor(private titleService: Title, private names: ComponentNamesService, seoService: SeoService) {
    seoService.createLinkForCanonicalURL();
    document.body.style.background = "url('../../../assets/img/GRAFIKA.png') no-repeat center center fixed";
    document.body.style.backgroundSize = "cover";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.names.cakeTickets);
  }

}