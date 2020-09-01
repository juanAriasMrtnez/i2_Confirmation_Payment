import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayConMainComponent } from './pay-con-main/pay-con-main.component';
import { FlightTitleComponent } from './pay-con-main/flight-title/flight-title.component';
import { BeeperComponent } from './pay-con-main/flight-title/beeper/beeper.component';
import { MyFlightComponent } from './pay-con-main/flight-title/my-flight/my-flight.component';
import { SvgComponent } from './pay-con-main/svg/svg.component';
import { SvgDefinitionComponent } from './pay-con-main/svg/svg-definition/svg-definition.component';
import { SvgShareComponent } from './pay-con-main/svg/svg-definition/svg-share.component';
import { FlightComponent } from './pay-con-main/flight/flight.component';
import { ConexInfoComponent } from './pay-con-main/flight/conex-info/conex-info.component';
import { ConexDetailComponent } from './pay-con-main/flight/conex-info/conex-detail/conex-detail.component';
import { ConfirmationComponent } from './pay-con-main/confirmation/confirmation.component';
import { AncillariesComponent } from './pay-con-main/ancillaries/ancillaries.component';
import { ModuloComponent } from './pay-con-main/ancillaries/modulo/modulo.component';
import { PurchaseComponent } from './pay-con-main/purchase/purchase.component';
import { SectionTitleComponent } from './pay-con-main/section-title/section-title.component';
import { CkiOnlineComponent } from './pay-con-main/cki-online/cki-online.component';
import { SuitcaseInfoComponent } from './pay-con-main/suitcase-info/suitcase-info.component';
import { DoubtsComponent } from './pay-con-main/doubts/doubts.component';
import { AncillariesRecomendationComponent } from './pay-con-main/ancillaries-recomendation/ancillaries-recomendation.component';
import { ContactDataComponent } from './pay-con-main/contact-data/contact-data.component';
import { InfoPayComponent } from './pay-con-main/info-pay/info-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    PayConMainComponent,
    FlightTitleComponent,
    BeeperComponent,
    MyFlightComponent,
    SvgComponent,
    SvgDefinitionComponent,
    SvgShareComponent,
    FlightComponent,
    ConexInfoComponent,
    ConexDetailComponent,
    ConfirmationComponent,
    AncillariesComponent,
    ModuloComponent,
    PurchaseComponent,
    SectionTitleComponent,
    CkiOnlineComponent,
    SuitcaseInfoComponent,
    DoubtsComponent,
    AncillariesRecomendationComponent,
    ContactDataComponent,
    InfoPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
