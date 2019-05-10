import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentComponent } from './payment.component';


@NgModule({
    declarations:[
        PaymentComponent
    ],
    imports:[
        BrowserModule
    ],
    exports:[
        PaymentComponent
    ]
})
export class PaymentModule{

}