import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserbaseService } from 'src/app/services/userbase.service';
import { AuthService } from 'src/app/services/auth.service';
import { Partida, User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-user-scores',
  templateUrl: './user-scores.component.html',
  styleUrls: ['./user-scores.component.css']
})
export class UserScoresComponent {

  constructor(private userbase: UserbaseService,private auth:AuthService,private router: Router){}

  list: Partida[] = [];

  get getUser():User | undefined{
    return this.auth.currentUser;
  }

  get partidas():boolean{
    const user = this.getUser
    if(user){
      if(user.partidas.length <= 0){
        return false
      }else{
        this.list = user.partidas;
        return true
      }
    }else{
      return false
    }
  }

  sortOldDate(){
    this.list.sort((a,b) => a.fecha < b.fecha? -1:1)
  }

  sortNewDate(){
    this.list.sort((a,b) => a.fecha < b.fecha? 1:-1)
  }

  sortHeroName(){
    this.list.sort((a,b) => a.personaje.charName < b.personaje.charName? -1:1)
  }
  
  sortLowScore(){
    this.list.sort((a,b) => a.puntaje < b.puntaje? -1:1)
  }

  sortHighScore(){
    this.list.sort((a,b) => a.puntaje < b.puntaje? 1:-1)
  }

  private dateFormat = new Intl.DateTimeFormat();
  fortmatDate(date: Date){
    return this.dateFormat.format(date);
  }

  
}
