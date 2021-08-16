import { Component } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular2021';
  myStatus = 'my status';

  sw = true;

  color;string;
  
  video = 1;
  personASub:Subscription;
  tictock = new BehaviorSubject(this.video);

  people = [
    {name: 'Alejandra', lastName: 'Chirinos' },
    {name: 'Juan', lastName: 'Perez' },
    {name: 'Jose', lastName: 'Flores' },
  ];

  constructor(){

    //Person A
    this.personASub = this.tictock.pipe(
      filter(s => s%2 === 0)
    ).subscribe(v => {
      console.log('PERSON A VIDEO', v);
    });

    //Person B
    this.tictock.pipe(
      delay(4000)
    ).subscribe(v => {
      console.log('PERSON B VIDEO', v);
    });

    //Person C 
    this.tictock.subscribe(v => {
      console.log('PERSON C VIDEO', v);
    });


    /*
    const testMap = [1,2,3,4,5,6].map(item => item * 2);
    console.log(testMap);

    const testForeach = [1,2,3,4,5,6].forEach(item => item);
    console.log(testForeach);

    const testFind = [1,2,3,4,5,6].find(item => item === 4);
    console.log(testFind);

    const testFilter = [1,2,3,4,5,6].filter(item => item%2 === 0);
    console.log(testFilter);

    const testFindIndex = [90,2,300,4,5,6].findIndex(item => item === 300);
    console.log(testFindIndex);

    const testIndexOf = 'ricardo'.indexOf('o')
    console.log(testIndexOf);

    const testJoin = [1,2,3,4,5,6].join(',');
    console.log(testJoin);

    const testSplit = '1,2,3,4,5,6'.split(',');
    console.log(testSplit);

    const testSpliceA = [10,20,30,40,50,60];
    const testSpliceB = [1,2,3,4,5,6].splice(1,2);
    testSpliceA.splice(0,1)

    console.log(testSpliceB,  testSpliceA);

    const testReduce = [1,2,3,4,5,6].reduce((acc, value) => acc + value, 100);
    
    const asadasd = {1:'d',2:'d',3:'d',4:'d',5:'d'};

    const testEntries = {value: 'ricardo', key:'RPC'};
    console.log('aaaa', Object.entries(testEntries));
    console.log('bbbbb', Object.keys(testEntries));
    console.log('ccccc', Object.values(testEntries));


     const array1 = [1,2,3,4,5];
     const array2 = [9,10,11, ...array1]

     const per1 = {name: 'a', age: 12};
     const per2 = {data: 'R', ...per1};

     console.log('Spread', array2, per2)


     const per3 = {
      name: 'a', 
      age: 12, 
      phone: 12323234234, 
      extra: 123, 
      response:200,
      response2:200,
      response4:200
      };

   const {phone:ci} = per3;
   console.log('name=', ci); 

   //{1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'} convertir a un array y sumar los numeros pares
   const task1= {1:'a',2:'a',3:'a',4:'a',5:'a',6:'a'};
   const result = Object.keys(task1).map(n => parseInt(n)).reduce((acc, value)=> {
     if(value%2 === 0){
       acc= acc+value;
     }
     return acc; 
   }, 0);
   console.log('Result', result);

   //[1,2,3,4,5,6] filtrar los numeros impares y mostrarlos como cadena
   const task2= [1,2,3,4,5,6].filter(item => item%2 === 0).join(',');
   console.log(task2);
   */
 }

  onAddVideo(){
    this.video++;
    this.tictock.next(this.video);
  }

  person1Unsubscribe(){
    this.personASub.unsubscribe();
    console.log('PERSON A SE DESUSCRIBE')
 }

  printDataAlejandraComponent(event:any){
    console.log('ALEJANDRA COMP: ', event);
  }

  printData(event) {
    console.log('CHILD COMP SEND DATA: ', event);
  }

  test(event){
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', event);
  }
}
