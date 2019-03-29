import { Component, OnInit } from '@angular/core';
import{ FormControl, FormGroup} from '@angular/forms';
import { NovasonLifeService } from '../novason-life.service';
import { BuymoduleModule } from '../buymodule/buymodule.module';


@Component({
  selector: 'app-buynow2',
  templateUrl: './buynow2.page.html',
  styleUrls: ['./buynow2.page.scss'],
})
export class Buynow2Page implements OnInit {
  public user: BuymoduleModule;
  constructor(private _service: NovasonLifeService) { }
  ngOnInit() {
    
  }
  buynow = new FormGroup({
    email: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    title: new FormControl(''),
    idNum: new FormControl(''),
    phone:new FormControl(''),
    
  });

  buyNow() {
    this.user = { name: this.buynow.controls['name'].value,
                  surname: this.buynow.controls['surname'].value,
                  title: this.buynow.controls['title'].value,
                  idNum: this.buynow.controls['idNum'].value,
                  email:this.buynow.controls['email'].value,
                  phone: this.buynow.controls['phone'].value};
    
 
  }
}
