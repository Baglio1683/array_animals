const arrayAnimals = [

{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },

{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },

{ nome: 'oca', famiglia: 'fasianidi', classe: 'uccelli' },

{ nome: 'pantera', famiglia: 'felidi', classe: 'mammiferi' },

{ nome: 'cimice', famiglia: 'insectia', classe: 'insetti' },

{ nome: 'rana', famiglia: 'Ranidae', classe: 'anfibi' },

{ nome: 'scimpanzè', famiglia: 'ominidi', classe: 'mammiferi' },

{ nome: 'lucertola', famiglia: 'lacertidi', classe: 'Rettili' },

{ nome: 'pecora', famiglia: 'ovini', classe: 'mammiferi' },

{ nome: 'serpente a sonagli', famiglia: 'elapidi', classe: 'rettili' },

{ nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },

]

console.log(arrayAnimals)

const arrayMammiferi = []; 

let animal = ""; 

for(let i =0 ; i < arrayAnimals.length ; i++){

   if(arrayAnimals[i].classe === 'mammiferi'){

      arrayMammiferi.push(arrayAnimals[i]); 

   }

}

console.log(arrayAnimals)
console.log(arrayMammiferi)


