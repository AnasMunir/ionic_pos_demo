import { Component } from '@angular/core';
import { NavController, Platform, MenuController, ModalController } from 'ionic-angular';

import { Invoice } from '../../models/invoice';
import { InvoiceDocs } from '../../providers/invoice-docs';

/*
  Generated class for the Reports page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reports',
  templateUrl: 'reports.html'
})
export class ReportsPage {
  invoices: Invoice[];
  // public invoices = [];

  constructor(public navCtrl: NavController, private invoiceDocs: InvoiceDocs, private platform: Platform, private modal: ModalController) {
    platform.ready().then(() => {

      invoiceDocs.getAll().subscribe(invoices => {
        this.invoices = invoices;
        console.log('invoice ', this.invoices);
      })
    });
  }

  ionViewDidLoad() {
    this.invoiceDocs.initDB();
    console.log('Hello Reports Page');
    // console.log(this.invoiceDocs.load());
  }

}
