import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChatService } from './services/chat/chat.service';
import { AppComponent } from './components/app.component';
import { ChatComponent } from './components/chat/chat/chat.component';

@NgModule({
    declarations: [
        AppComponent,
        ChatComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [ChatService],
    bootstrap: [AppComponent]
})
export class AppModule { }
