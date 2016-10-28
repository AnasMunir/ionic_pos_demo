import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { ReportsPage } from '../pages/reports/reports';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { InvoiceDocs } from '../providers/invoice-docs';

@NgModule({
  declarations: [
    MyApp,
    ReportsPage,
    HelloIonicPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReportsPage,
    HelloIonicPage
  ],
  providers: [InvoiceDocs]
})
export class AppModule {}
