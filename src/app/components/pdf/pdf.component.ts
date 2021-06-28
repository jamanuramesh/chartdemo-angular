import { Component, OnInit } from "@angular/core";
import { PdfService } from "../../services/pdf.service";
@Component({
  selector: "app-root",
  template: `
    <div>
      <label>PDF src</label>
      <input (change)="onFileSelected()" id="uploadFile" type="file" />
      <input type="text" id="page" [(ngModel)]="page" />
    </div>

    <pdf-viewer
      [src]="pdfSrc"
      [render-text]="true"
      [page]="page"
      [show-all]="true"
      style="display:block;"
    >
    </pdf-viewer>
  `,
  styles: [],
  providers: [PdfService],
})
export class PdfComponent implements OnInit {
  page: number = 1;
  pdfSrc: string = "";
  constructor(private pdfService: PdfService) {}

  ngOnInit() {
    this.pdfSrc = this.pdfService.getPdf();
  }
  onFileSelected() {
    let img: any = document.getElementById("uploadFile");
    if (typeof FileReader !== "undefined") {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        this.pdfSrc = e.target.result;
      };
      reader.readAsArrayBuffer(img.files[0]);
    }
  }
}
