import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { ColorProviderService } from './color-provider.service';

enum TableThemes {
  Plain = 'plain',
  Grid = 'grid',
  Striped = 'striped',
  Css = 'css'
}

@Injectable({
  providedIn: 'root'
})
export class ExportBoardService {
  constructor(private colorProviderSvc: ColorProviderService) {}

  private addColumn(columnHeading: string, cellWidth?: number) {
    const column = { content: columnHeading }
    return cellWidth ? { ...column, styles: { cellWidth }} : column;
  }

  private addCardToRow(card: any) {
    return [card.text, card.votes || 3, card.author]
  }

  private createDocumentHeading (pageTitle: string) {
    return {
      theme: TableThemes.Plain,
      headStyles:{
        halign: 'center',
        fontSize: 20,
        fontStyle: 'bold',
        textColor: 'black'
      },
      head: [[pageTitle]]
    }
  }

  private createTable (section: any, headerColor: string, pdfDocument: any) {
    return {
      theme: TableThemes.Grid,
      headStyles:{ fillColor: headerColor, textColor: 'black' },
      head: [[
        this.addColumn(section.title),
        this.addColumn('Votes', 15),
        this.addColumn('Author', 30)
      ]],
      body: section.cards.map(this.addCardToRow),
      startY: pdfDocument.lastAutoTable.finalY + 5
    }
  }

  exportAsPdf (pageTitle: string, sections: any) {
    const pdfDocument = new jsPDF();

    // Create a single row table to act as page heading
    pdfDocument.autoTable(this.createDocumentHeading(pageTitle));

    // Create a table for each of the sections of the board
    sections.forEach((section, index) =>
      pdfDocument.autoTable(this.createTable(section, this.colorProviderSvc.colorAtIndex(index), pdfDocument))
    )

    // Save the pdf to the users computer
    pdfDocument.save('table.pdf')

  }
}