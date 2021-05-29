import { Component } from '@angular/core';
// import * as pdfMake from "pdfmake/build/pdfmake";
// import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;


import  jsPDF from "jspdf";
import  html2canvas  from "html2canvas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  data = [
    {
      "trip" : {
        "id": 83596,
        "hrs": 0.00,
        "miles": 355.10,
        "rate": 0.58,
        "ems": 0.00,
        "emr": 0.58,
        "per": "0.00 %",
        "freight": 205.96,
        "add": 26.77,
        "ded": 0.00,
        "fedAdd": 0.00,
        "prevDed": 0.00,
        "paidAmount": 232.73
      },

      "stops" : [
        {
          "city": "Caledon ON",
          "date": "03/16/2021",
          "ems": 0.00,
          "emr": 0.00,
          "hst": "HST",
          "add": 26.77,
          "ded": 0.00
        },

        {
          "city": "LAVAL QC",
          "date": "03/16/2021",
          "ems": 355.10,
          "emr": 0.00,
          "hst": "HST",
          "add": 26.77,
          "ded": 0.00
        },
      ],

      "driver": {
        "name": "CHAHAL",
        "truckNo": "2111(PA27343)",
        "orderNo": 54177,
        "trailerNo": "STL5403"
      }
    },
  ];



  generatePDF() {
    const div: any = document.getElementById("container");
    const options = {background: "white", height: div.clientHeight, width: div.clientWidth};

    html2canvas(div, options).then((canvas) => {
        //Initialize JSPDF
        const doc = new jsPDF("p", "mm", "a4");
        //Converting canvas to Image
        const imgData = canvas.toDataURL("image/PNG");
        //Add image Canvas to PDF
        // doc.addImage(imgData, 'PNG', 20, 20);

        const pdfOutput = doc.output();
        // using ArrayBuffer will allow you to put image inside PDF
        const buffer = new ArrayBuffer(pdfOutput.length);
        const array = new Uint8Array(buffer);
        for (let i = 0; i < pdfOutput.length; i++) {
            array[i] = pdfOutput.charCodeAt(i);
        }

        //Name of pdf
        const fileName = "samplee.pdf";

        // Make file
        doc.save(fileName);

    });
  }

  // @ViewChild("container", {static: false}) el!: ElementRef;


    // generatePDF() {
    //   console.log("downloading pdf")
    //   const pdf = new jsPDF("p", "pt", "a4");
    //   pdf.html(this.el.nativeElement, {
    //     callback: (pdf) => {
    //       pdf.save("sameple.pdf")
    //     }
    //   })

// }

}
