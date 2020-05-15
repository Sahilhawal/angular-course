import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { basicHighlightsDirective } from "./basic-highlight/basic-highlight.directive";
import { BetterDirectiveDirective } from './better-directive.directive';

@NgModule({
  declarations: [AppComponent, basicHighlightsDirective, BetterDirectiveDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
