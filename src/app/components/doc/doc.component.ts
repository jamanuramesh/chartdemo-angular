import { Component, OnInit } from "@angular/core";
import { PdfService } from "src/app/services/pdf.service";

@Component({
  selector: "app-doc",
  template: `
    <ngx-doc-viewer
      url="https://file-examples-com.github.io/uploads/2017/02/file-sample_100kB.docx"
      viewer="google"
      style="width:100%;height:93vh;"
    >
    </ngx-doc-viewer>
  `,
  styles: [],
  providers: [PdfService],
})
export class DocComponent implements OnInit {
  DocSrc: string = "";
  constructor(private pdfService: PdfService) {}
  ngOnInit() {
    this.DocSrc = this.pdfService.getDoc();
  }
}
