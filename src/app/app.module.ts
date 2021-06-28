import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PdfViewerModule } from "ng2-pdf-viewer";
import { NgxDocViewerModule } from "ngx-doc-viewer";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PdfComponent } from "./components/pdf/pdf.component";
import { DocComponent } from "./components/doc/doc.component";
import { LinechartComponent } from "./charts/linechart/linechart.component";
import { BarchartComponent } from "./charts/barchart/barchart.component";
import { DoughnutComponent } from "./charts/doughnut/doughnut.component";
import { PiechartComponent } from "./charts/piechart/piechart.component";
import { PolarareaComponent } from "./charts/polararea/polararea.component";

@NgModule({
  declarations: [
    AppComponent,
    PdfComponent,
    DocComponent,
    LinechartComponent,
    BarchartComponent,
    DoughnutComponent,
    PiechartComponent,
    PolarareaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PdfViewerModule,
    NgxDocViewerModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
