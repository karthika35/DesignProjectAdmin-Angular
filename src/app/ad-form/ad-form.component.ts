import { Component, OnInit } from '@angular/core';
import {Ads} from '../ads';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {FileUploadService} from '../shared/file-upload.service';
import {AngularFireStorage} from 'angularfire2/storage';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-ad-form',
  templateUrl: './ad-form.component.html',
  styleUrls: ['./ad-form.component.css']
})
export class AdFormComponent implements OnInit {
  selectedFile: FileList;
  url;
  file: File;
  imgsrc;
  submitted: boolean;
  showSuccessMessage: boolean;
  formControls = this.fileUploadService.form.controls;
  addArray = [];
  drry = [];
  showDeletedMessage: boolean;
  model = this.formControls.closingDate;
  color = 'primary';
  mode: 'determinate';
  progressBarValue;



  constructor( private fileUploadService: FileUploadService, private storge: AngularFireStorage) {}
  ngOnInit() {
    this.fileUploadService.getAdd().subscribe(
      list => {
        this.addArray = list.map( item => {
          return {
            $key: item.key,
            ...item.payload.val( )
          };
        });
      }
    );
    console.log(this.addArray);

  }
  onSubmit() {
    this.submitted = true;
    if (this.fileUploadService.form.valid) {
      if (this.fileUploadService.form.get('$key').value == null) {
        this.fileUploadService.insertAdd(this.fileUploadService.form.value);
      } else {
        this.fileUploadService.updateAdd(this.fileUploadService.form.value);
      }
        this.showSuccessMessage = true;
        setTimeout(() => this.showSuccessMessage = false, 3000);
      this.submitted = false;
      this.fileUploadService.form.reset();
      this.fileUploadService.form.setValue({
        $key: null,
        shopName: '',
        address: '',
        closingDate: '',
        image: ''
      });
    }
  }
  onDelete($key) {
    if (confirm('Are you sure want to delete the reord?')) {
        this.fileUploadService.deleteAdd($key);
        this.showDeletedMessage = true;
        setTimeout(() => this.showDeletedMessage = false, 3000);
    }

  }
 chooseFiles(event) {
  this.selectedFile = event.target.files;
  if (this.selectedFile.item(0)) {
    this.uploadpic();
  }
 }
 // there is some problem have to solve (fake path and load br and image)
  uploadpic() {
    const file = this.selectedFile.item(0);
    const unikey = 'pic';
    const task = this.storge.upload(unikey, file).then(() => {
         const ref = this.storge.ref(unikey);
         const downloadURL = ref.getDownloadURL().subscribe(url => {
           const Url = url;
           this.url = url;
         });
    });
  }
  }
