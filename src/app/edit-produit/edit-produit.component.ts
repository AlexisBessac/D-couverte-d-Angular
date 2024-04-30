import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-edit-produit',
  standalone: true,
  imports: [MatInputModule, MatButtonModule, FormsModule, ReactiveFormsModule, HttpClient, HttpClientModule],
  templateUrl: './edit-produit.component.html',
  styleUrl: './edit-produit.component.scss'
})
export class EditProduitComponent {

  formbuilder: FormBuilder = inject(FormBuilder);

  http:HttpClient =inject(HttpClient)
  
  formulaire: FormGroup = this.formbuilder.group({
    nom: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
    description: ['',[]],
    prix:[1,[Validators.required, Validators.min(0.01)]]
  })

  onAjoutProduit(){
    if(this.formulaire.valid){
        this.http.post("http://backendangular/ajout-produit.php" . this.formulaire.value).subscribe((resultat))
      }
  }
}
