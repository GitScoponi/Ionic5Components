import { OrderPipe } from './../../pipes/order.pipe';
import { Component, OnInit, Pipe } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-comp-visuais',
  templateUrl: './comp-visuais.page.html',
  styleUrls: ['./comp-visuais.page.scss'],
})
export class CompVisuaisPage implements OnInit {
  menuCollection:any[];
  constructor(private navCtr:NavController) {
    this.menuCollection = [  
      {
        title: 'navegacao', url: 'navegacao', icon: 'navigate'
      },
      {
        title: 'botoes',url: 'botoes',icon: 'radio-button-on'
      },
      {
        title: 'alert',url: 'alert',icon: 'alert-circle'
      },
      {
        title: 'actionsheet',url: 'actionsheet',icon: 'bookmarks'
      },
      {
        title: 'badge',url: 'badge',icon: 'stats-chart'
      },
      {
        title: 'card',url: 'card',icon: 'card'
      },
      {
        title: 'checkbox',url: 'checkbox',icon: 'checkbox'
      },
      {
        title: 'chip',url: 'chip',icon: 'help-circle'
      },
      {
        title: 'content',url: 'content',icon: 'clipboard'
      },
      {
        title: 'datetime', url: 'datetime', icon: 'calendar'
      }
      ,
      {
        title: 'fab', url: 'fab', icon: 'radio-button-off'
      },
      {
        title: 'grid', url: 'grid',icon: 'grid'
      },
      {
        title: 'infinitescroll', url: 'infinitescroll', icon: 'clipboard'
      },
      {
        title: 'input', url: 'input', icon: 'create'
      },
      {
        title: 'list',url: 'list', icon: 'list'
      },
      {
        title: 'progresbar', url: 'progresbar',  icon: 'code-working'
      },
      {
        title: 'refresher',url: 'refresher', icon: 'refresh'
      },
      {
        title: 'reorder',url: 'reorder', icon: 'reorder-two'
      },
      {
        title: 'select', url: 'select', icon: 'duplicate'
      },
      {
        title: 'tougle', url: 'tougle',icon: 'link'
      },
      {
        title: 'searchbar', url: 'searchbar', icon: 'search'
      },
      {
        title: 'segment',url: 'segment', icon: 'shapes'
      },
      {
        title: 'slide',url: 'slide',icon: 'albums'
      },
      {
        title: 'toast',url: 'toast', icon: 'pricetags'
      }
      ,
      {
        title: 'modal',url: 'modal',icon: 'browsers'
      } ,
      {
        title: 'popover',url: 'popouver', icon: 'archive'
      } ,
      {
        title: 'radio', url: 'radio', icon: 'radio'
      },
      {
        title: 'animacao', url: 'animacao',icon: 'american-football'
      }
    ]
  }
  
  ngOnInit() {
  }
  irPara(url:string){
    this.navCtr.navigateForward(url);
  }
}
