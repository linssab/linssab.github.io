import { Component, OnInit } from '@angular/core';
import { Dummy, VersionRecord } from '../history/models/versionRecord';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm } from '@angular/forms'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  public minLenName: number = 2;
  public minLenSurname: number = 2;
  public minLenEmail: number = 6;
  public minLenInstitution: number = 2;
  public minLenText: number = 10;

  private myAPI = "https://script.google.com/macros/s/AKfycbxas-mOo2fUjxpiIJZZUzH1Zh3qpNxECQmIB8Y27BsN51SioAv5qi-HUSckfq2XwUQO/exec";

  FormData: FormGroup | any;
  name: FormControl = new FormControl('',
    [Validators.required, Validators.minLength(this.minLenName) ] );

  surname: FormControl = new FormControl('',
    [Validators.required, Validators.minLength(this.minLenSurname) ]);

  email: FormControl = new FormControl('',
    [ Validators.required, Validators.email ] );

  institution: FormControl = new FormControl('',
    [Validators.required, Validators.minLength(this.minLenInstitution) ]);

  text: FormControl = new FormControl('',
    [ Validators.required, Validators.maxLength( 256 ) ] );

  honeypot: FormControl = new FormControl('');

  submitted: boolean = false; // show and hide the success message
  isLoading: boolean = false; // disable the submit button if we're loading
  responseMessage: string = ""; // the response message to show to the user

  constructor(private builder: FormBuilder, private http: HttpClient) {
      
    this.FormData = this.builder.group({
      name: this.name,
      surname: this.surname,
      email: this.email,
      institution: this.institution,
      text: this.text,
      honeypot: this.honeypot
    });
  }
  
  ngOnInit(): void {
  }

  onSubmit() {
    if (this.FormData.status == "VALID" && this.honeypot.value == "") {

      this.FormData.disable(); // disable the form if it's valid to disable multiple submissions

      var formData: any = new FormData();
      formData.append("name", this.FormData.get("name").value);
      formData.append("surname", this.FormData.get("surname").value);
      formData.append("email", this.FormData.get("email").value);
      formData.append("institution", this.FormData.get("institution").value);
      formData.append("text", this.FormData.get("text").value);

      this.isLoading = true; // sending the post request async so it's in progress
      this.submitted = false; // hide the response message on multiple submits

      this.http.post(this.myAPI, formData).subscribe(
        (response) => {
          // choose the response message
          if (response) {
            this.responseMessage = "Thanks for the message!";
            this.FormData.reset();
          } else {
            this.responseMessage = "Oops! Something went wrong...";
          }
          this.FormData.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(response);
        },
        (error) => {
          this.responseMessage = "Oops! An error occurred...";
          this.FormData.enable(); // re enable the form after a success
          this.submitted = true; // show the response message
          this.isLoading = false; // re enable the submit button
          console.log(error);
        }
      );
    }
  }

  /*
  onSubmit( any: FormData ): void {
    console.log(FormData)

    if (this.FormData.status == "VALID" && this.honeypot.value == '')

    this.contact.PostMessage( FormData )
      .subscribe( response => {
        location.href = 'https://mailthis.to/confirm'
        console.log( response )
      }, error => {
        console.warn( error.responseText )
        console.log({ error })
      })
  }*/

}
