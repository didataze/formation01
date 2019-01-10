import {Component, OnInit} from '@angular/core';
import {MessageService} from 'primeng/api';
import {FileUpload} from 'primeng/primeng';

@Component({
  selector: 'app-import-data',
  templateUrl: './import-data.component.html',
  styleUrls: ['./import-data.component.css']
})
export class ImportDataComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit() {
  }

  onUpload(event) {
    for (const file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

  removeFile(file: File, uploader: FileUpload) {
    const index = uploader.files.indexOf(file);
    uploader.remove(null, index);
  }
}
