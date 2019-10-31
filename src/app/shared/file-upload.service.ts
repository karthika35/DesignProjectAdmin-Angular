import { Injectable } from '@angular/core';
import {FormGroup, FormControl } from '@angular/forms';
import {Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor( private firedb: AngularFireDatabase) { }
  addList: AngularFireList<any>;
  form = new FormGroup({
    $key: new FormControl(null),
    shopName: new FormControl('', Validators.required ),
    address: new FormControl('', Validators.required),
    image: new FormControl( '', Validators.required),
    closingDate: new FormControl('', Validators.required),
  });
  getAdd() {
    this.addList = this.firedb.list('adds');
    return this.addList.snapshotChanges();
  }
  insertAdd(add) {
    this.addList.push({
      shopName: add.shopName,
      address: add.address,
      closingDate: add.closingDate,
      image: add.image
    });
  }

  populateForm(add) {
  this.form.setValue(add);
  }
  updateAdd(add) {
    this.addList.update(add.$key,
      {
        shopName: add.shopName,
        address: add.address,
        closingDate: add.closingDate,
        image: add.image
      });
  }
  deleteAdd($key: string) {
    this.addList.remove($key);
  }
}
