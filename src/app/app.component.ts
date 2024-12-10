import { Component, Inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
 
})

export class AppComponent {
  textInput:any;
  findText:any;
  replaceText:any;
  replaceButton:any;
  clearButton:any;
  message:any;


// Function to replace text
replaceContent() {
    debugger
    this.textInput = document.getElementById('textInput');
    this.findText= document.getElementById('findText');
    this.replaceText = document.getElementById('replaceText');
    this.replaceButton = document.getElementById('replaceButton');
    this.clearButton = document.getElementById('clearButton');
    this.message = document.getElementById('message');
 
    let inputText = this.textInput.value;
    const searchTerm = this.findText.value;
    const replaceTerm = this.replaceText.value;

    // Check if the find term and replace term are provided
    if (searchTerm && replaceTerm) {
        const updatedText = inputText.split(searchTerm).join(replaceTerm);
        this.textInput.value = updatedText;
        this.message.textContent = `Replaced "${searchTerm}" with "${replaceTerm}".`;
    } else {
        this.message.textContent = "Please provide both find and replace terms.";
        this.message.style.color = "red";
    }
}

// Function to clear the input text
clearText() {
  debugger
  (document.getElementById('textInput')as any).value='';
  (document.getElementById('findText')as any).value='';
  (document.getElementById('replaceText')as any).value='';
}
}
