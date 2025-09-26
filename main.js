const prompt = require("prompt-sync")();

let tablue = [10, 3, 5, 60, 10, 77, 10];

// Challenge 1

function sommeTableau(tab) {
  return tab.reduce((p, c) => p + c, 0);
}

console.log(`La somme de tablue est: ${sommeTableau(tablue)}`);

// Challenge 2

function maxTableau(tab) {
  return Math.max(...tablue);
}

console.log(`Le plus grand élément de tableau est: ${maxTableau(tablue)}`);

// Challenge 3

function compterOccurrences(tab, valeur) {
  let counter = 0;

  for (let val of tab) {
    if (val == valeur) {
      counter++;
    }
  }

  return `La valeur ${valeur} est combien de ${counter} fois dans le tableau`;
}

console.log(compterOccurrences(tablue, 10));

// Challenge 4

function inverserTableau(tab) {
  return tab.reverse();
}

console.log(inverserTableau(tablue));

// Challenge 5

function filtrerPairs(tab) {
  return tab.filter((el) => el % 2 == 0);
}

console.log(filtrerPairs(tablue));

// Challenge 6

function produitTableau(tab) {
  return tab.reduce((p, c) => p * c, 1);
}

console.log(produitTableau(tablue));

// Challenge 7

function moyenne(tab) {
  return tab.reduce((p, c) => p + c, 0) / tab.length;
}

console.log(moyenne(tablue));

// Challenge 8

function doubler(tab) {
  return tab.map((el) => el * 2);
}

console.log(doubler(tablue));

// Challenge 9

let tableau2 = [99, 44, 50, 60];

function fusionner(tab1, tab2) {
  return tab1.concat(tab2);
}

console.log(fusionner(tablue, tableau2));

// Challenge 10

function supprimerDoublons(tab) {
  let newTab = [];

  for (let val of tab) {
    if (!newTab.includes(val)) {
      newTab.push(val);
    }
  }

  return newTab;
}

console.log(supprimerDoublons(tablue));

// Challenge 11

function tableMultiplication(n) {
  let arr = [];

  for (let i = 1; i <= 10; i++) {
    arr.push(n * i);
  }

  return arr;
}

console.log(tableMultiplication(3));

// Challenge 12

let motsTableau = ["cat", "dog", "class", "school"];

function motsLongs(tabMots, longueur) {
  let valideMots = [];

  for (let mot of tabMots) {
    if (mot.length === longueur) {
      valideMots.push(mot);
    }
  }

  return valideMots;
}

console.log(motsLongs(motsTableau, 3));
