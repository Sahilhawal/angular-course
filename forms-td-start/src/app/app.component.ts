import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") form: NgForm;
  defaultQuestion = "teacher";
  genders = ["male", "female"];
  isIt = "male";
  suggestUserName() {
    const suggestedName = "Superuser";
    this.form.form.patchValue({
      userData: {
        username: "Sahil",
      },
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
