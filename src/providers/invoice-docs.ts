import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Invoice } from '../models/invoice';
import PouchDB from 'pouchdb';

/*
  Generated class for the InvoiceDocs provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InvoiceDocs {
  db: any;
  remote: any;

  constructor(public platform: Platform) {
    // this.db = new PouchDB('pos-demo-1', {adapter: 'websql'});
    // this.remote = 'http://104.236.211.209:5984/pos-demo-1';
    // let options = {
    //   live: true,
    //   retry: true,
    //   continuous: true
    // };
    //
    // this.db.sync(this.remote, options);
  }
  syncDB(): Promise<any> {
    let options = {
      live: true,
      retry: true,
      continuous: true
    };
    return this.db.sync('http://104.236.211.209:5984/pos-demo-1', options);
  }
  initDB() : Promise<any> {
    return this.platform.ready()
    .then(() => {
      this.db = new PouchDB('pos-demo-1', { adapter: 'websql' });
    }).then(() => {
      this.syncDB();
    });
  }

  load(): Promise<any> {
    return this.db.allDocs({startkey: 'invoice_', endkey: 'invoice_\uffff', include_docs: true})
  }

  getAll() : Observable<any> {
    return Observable.fromPromise(
      this.initDB()
      .then(() => {
        return this.db.allDocs({startkey: 'invoice_', endkey: 'invoice_\uffff', include_docs: true});
      })
      .then(docs => {

        // Each row has a .doc object and we just want to send an
        // array of birthday objects back to the calling code,
        // so let's map the array to contain just the .doc objects.

        return docs.rows.map(row => {
          // Convert string to date, doesn't happen automatically.
          row.doc.date = new Date(row.doc.date);
          return row.doc;
        });
      }));
    }

  // getAll() : Observable<any> {
  //   return Observable.fromPromise(
  //     this.load()
  //     .then(docs => {
  //
  //       return docs.rows.map(row => {
  //         // Convert string to date, doesn't happen automatically.
  //         row.doc.date = new Date(row.doc.date);
  //         return row.doc;
  //       });
  //     })
  //   )
  // }

}
