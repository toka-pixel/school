import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  title:any;
  description:any;
  mainimage:any;
  multipleimages:File[];
  
  constructor() { }

  ngOnInit(): void {
  }

   profileForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    mainimage: new FormControl('',[Validators.required]),
    multipleimages: new FormControl(''),
  });

  onSubmit() {
    
    console.warn(this.profileForm.value);
    this.title=this.profileForm.controls.title.value;
    this.description=this.profileForm.controls.description.value;
    this.mainimage=this.profileForm.controls.mainimage.value;
    // this.multipleimages=this.profileForm.controls.multipleimages.value;

    const formData = new FormData();
  if (this.multipleimages.length > 0) {
   for (const row of this.multipleimages) {
     formData.append('document_files[]', row);
     console.log(formData );
   }
  }

  // const formData = new FormData();
  // formData.append('file', this.profileForm.get('multipleimages').value);
  
    
  }

  
 


url: any;
onSelectFile(event) { // called each time file input changes
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
}





onFileChanged(event) {
  this.multipleimages = event.target.files;
  for (let i = 0; i < event.target.files; i++) {
    this.multipleimages.push(event.target.files[i]);
  }



  // if (event.target.files.length > 0) {
  //   const file = event.target.files[0];
  //   this.profileForm.get('multipleimages').setValue(file);
  // }
}


}
