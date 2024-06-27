// src/App.js

import React, { useState } from "react";
import Flashcard from "./components/Flashcard";
import "./App.css";

const sampleFlashcards = [
  //   {
  //     id: 1,
  //     question: "Co to jest React?",
  //     answer: "React to biblioteka JavaScript do budowy interfejsów użytkownika.",
  //   },
  //   {
  //     id: 2,
  //     question: "Co to jest komponent?",
  //     answer: "Komponent to niezależna, wielokrotnego użytku część UI.",
  //   },
  //   {
  //     id: 3,
  //     question: " Jak deklarujesz zmienną w JavaScript?",
  //     answer: "var, let, const",
  //   },
  //   {
  //     id: 4,
  //     question: "Jakiego operatora używasz do przypisania wartości do zmiennej?",
  //     answer: "Operator =",
  //   },
  //   {
  //     id: 5,
  //     question: "Jak wypisujesz wiadomość w konsoli?",
  //     answer: "console.log('Twoja wiadomość')",
  //   },
  //   {
  //     id: 6,
  //     question: " Jakie są typy prymitywne w JavaScript?",
  //     answer: "number, string, boolean, null, undefined, symbol, bigint",
  //   },
  //   {
  //     id: 7,
  //     question: "Jak komentujesz kod w JavaScript?",
  //     answer:
  //       "// dla komentarza jednowierszowego oraz /* dla komentarza wielowierszowego */",
  //   },
  //   {
  //     id: 8,
  //     question: "Jak łączysz dwa ciągi znaków?",
  //     answer: "Używając operatora + lub template literals `${variable}`",
  //   },
  //   {
  //     id: 9,
  //     question: "Jakie są trzy sposoby deklarowania funkcji?",
  //     answer: "Function declaration, function expression, arrow function",
  //   },
  //   {
  //     id: 10,
  //     question: "Co to jest hoisting?",
  //     answer:
  //       "Mechanizm, w którym zmienne i deklaracje funkcji są przenoszone na górę swojego zakresu przed wykonaniem kodu",
  //   },
  //   {
  //     id: 11,
  //     question: "Co to jest closure?",
  //     answer:
  //       "Funkcja mająca dostęp do zmiennych z zakresu nadrzędnego nawet po zakończeniu jego wykonania",
  //   },
  //   {
  //     id: 12,
  //     question: "Jak sprawdzić typ zmiennej?",
  //     answer: "Używając operatora typeof",
  //   },
  //   {
  //     id: 13,
  //     question: "Co zwróci typeof dla null, kupa, undefined, NaN?",
  //     answer: "Zmienna typu object, string, undefined, number .",
  //   },
  //   {
  //     id: 14,
  //     question: "Co to jest NaN?",
  //     answer: "Not-a-Number, wartość reprezentująca błędne operacje arytmetyczne",
  //   },
  //   {
  //     id: 15,
  //     question: "Jak sprawdzić, czy liczba jest NaN?",
  //     answer: "Używając funkcji isNaN()",
  //   },
  //   {
  //     id: 16,
  //     question: "Co to jest null?",
  //     answer: "Wartość reprezentująca brak jakiejkolwiek wartości",
  //   },
  //   {
  //     id: 17,
  //     question: "Jak konwertować ciąg znaków na liczbę?",
  //     answer:
  //       "Używając funkcji Number(), parseInt() lub parseFloat() lub dodaniem operatora +",
  //   },
  //   {
  //     id: 18,
  //     question: " Jakie są operatory logiczne w JavaScript?",
  //     answer: `&& (AND), || (OR), ! (NOT), XOR(^ dwa nie moą być prawdziwe)`,
  //   },
  //   {
  //     id: 19,
  //     question: `Co zwróci: <br>
  //     console.log (false != "false") <br>
  //     console.log(false === "false") <br>
  //     console.log(false == "false") <br>
  //     console.log(false == "")`,
  //     answer: `console.log(false != "false") odp: true <br>
  //   console.log(false === "false") odp: false <br>
  //   console.log(false == "false") odp: false <br>
  //   console.log(false == "") odp: true`,
  //   },
  //   {
  //     id: 20,
  //     question: "Co to jest tablica?",
  //     answer:
  //       "Struktura danych pozwalająca na przechowywanie wielu wartości w jednej zmiennej.",
  //   },
  //   {
  //     id: 21,
  //     question: "Jak dodajesz element do tablicy?",
  //     answer: "Używając metody push()",
  //   },
  //   {
  //     id: 22,
  //     question: "Jak usuwasz ostatni element z tablicy?",
  //     answer: "Używając metody pop().",
  //   },
  //   {
  //     id: 23,
  //     question: "Jakie są metody do iteracji po tablicy?",
  //     answer: "forEach(), map(), filter(), reduce().",
  //   },
  //   {
  //     id: 24,
  //     question: "Co zwraca metoda map()?",
  //     answer:
  //       "Nową tablicę z wynikami wywołania funkcji na każdym elemencie tablicy",
  //   },
  //   {
  //     id: 25,
  //     question: "Co robi metoda filter()?",
  //     answer:
  //       "Tworzy nową tablicę z elementami, które spełniają warunek zawarty w funkcji",
  //   },
  //   {
  //     id: 26,
  //     question: "Jak sprawdzić, czy tablica zawiera dany element?",
  //     answer: "Używając metody includes()",
  //   },
  //   {
  //     id: 27,
  //     question: "Co to jest obiekt?",
  //     answer: "Struktura danych reprezentująca zbiór właściwości i metod",
  //   },
  //   {
  //     id: 28,
  //     question: "Jak deklarujesz obiekt?",
  //     answer: `let obj = { <br>
  //       key1: 'value1', <br>
  //       key2: 'value2' }`,
  //   },
  //   {
  //     id: 29,
  //     question: "Jak dodajesz nową właściwość do obiektu?",
  //     answer: "obj.newKey = 'newValue'",
  //   },
  //   {
  //     id: 30,
  //     question: "Jak usunąć właściwość z obiektu?",
  //     answer: "delete obj.key",
  //   },
  //   {
  //     id: 31,
  //     question: "Jak wyjść z pętli wcześniej?",
  //     answer: "Używając instrukcji break",
  //   },
  //   {
  //     id: 32,
  //     question: "CJak pominąć jedną iterację pętli?",
  //     answer: "Używając instrukcji continue",
  //   },
  //   {
  //     id: 33,
  //     question: "Co to jest pętla while?",
  //     answer:
  //       " Konstrukcja pozwalająca na wykonanie bloku kodu tak długo, jak warunek jest prawdziwy",
  //   },
  //   {
  //     id: 34,
  //     question: "Co to jest pętla do-while?",
  //     answer:
  //       "Pętla, która wykonuje blok kodu przynajmniej raz, a następnie powtarza go, jeśli warunek jest prawdziwy",
  //   },
  //   {
  //     id: 35,
  //     question: "Jak wygląda składnia pętli do-while?",
  //     answer: `do { <br>
  //      // kod do wykonania <br>
  //       } while (warunek);`,
  //   },
  //   {
  //     id: 36,
  //     question: "Co to jest funkcja anonimowa?",
  //     answer: "Funkcja bez nazwy, zwykle używana jako argument innej funkcji",
  //   },
  //   {
  //     id: 37,
  //     question: "Jak deklarujesz funkcję anonimową?",
  //     answer: "let anonFunc = function() { // kod }",
  //   },
  //   {
  //     id: 38,
  //     question: "Co to jest IIFE?",
  //     answer: `<b>Immediately Invoked Function Expression</b>, czyli funkcja wywoływana natychmiast po zdefiniowaniu<br>
  //       (function () { <br>
  //   // … <br>
  // })(); <br>
  //  <br>
  // (() => { <br>
  //   // … <br>
  // })(); <br>
  //  <br>
  // (async () => { <br>
  //   // … <br>
  // })(); <br>`,
  //   },
  //   {
  //     id: 39,
  //     question: "Jak wygląda składnia IIFE?",
  //     answer: "(function() { // kod })();",
  //   },
  //   {
  //     id: 40,
  //     question: "Co to jest funkcja strzałkowa?",
  //     answer: " Skrócony zapis funkcji, używający => zamiast function",
  //   },
  //   {
  //     id: 41,
  //     question: "jak wygląda składnia funkcji strzałkowej?",
  //     answer: "let func = () => { // kod }",
  //   },
  //   {
  //     id: 42,
  //     question: "Jakie są różnice między let a var?",
  //     answer:
  //       "let ma blokowy zakres widoczności i nie jest hoistowany, podczas gdy var ma zakres funkcji i jest hoistowany.",
  //   },
  //   {
  //     id: 43,
  //     question: "Co to jest const i kiedy się go używa?",
  //     answer:
  //       " const deklaruje zmienną o stałej wartości, której nie można ponownie przypisać. Używamy go, gdy wartość zmiennej nie powinna się zmieniać.",
  //   },
  //   {
  //     id: 44,
  //     question: "Jakie są różnice między == a ===?",
  //     answer:
  //       "== porównuje wartości po ich przekształceniu do wspólnego typu (sprawdzanie równości), a === porównuje zarówno wartości, jak i typy (sprawdzanie tożsamości).",
  //   },
  //   {
  //     id: 45,
  //     question: "Jak zdefiniować i wywołać funkcję asynchroniczną?",
  //     answer: `Używając async przed definicją funkcji i await wewnątrz niej.<br>
  //      Przykład: <br>
  //      async function myFunc() { <br>
  //      await something(); }`,
  //   },
  //   {
  //     id: 46,
  //     question: "Co to jest obietnica (Promise) w JavaScript?",
  //     answer:
  //       "Obiekt reprezentujący operację asynchroniczną, która może zakończyć się sukcesem (resolve) lub porażką (reject).",
  //   },
  //   {
  //     id: 47,
  //     question: "Jak stworzyć obietnicę?",
  //     answer: " let promise = new Promise((resolve, reject) => { // kod });",
  //   },
  //   {
  //     id: 48,
  //     question: "Jak obsłużyć wynik obietnicy?",
  //     answer: `Używając metod then i catch. Przykład:<br> promise.then(result => { // kod }).catch(error => { // kod });`,
  //   },
  //   {
  //     id: 49,
  //     question: "Co to jest async/await?",
  //     answer:
  //       " Syntactic sugar dla pracy z obietnicami, który pozwala pisać kod asynchroniczny w sposób synchroniczny. Słowa kluczowe wprowadzające asynchroniczność do funkcji, umożliwiające łatwiejsze zarządzanie obietnicami.",
  //   },
  //   {
  //     id: 128,
  //     question: "Jakie są zalety używania async/await?",
  //     answer:
  //       "Lepsza czytelność kodu, łatwiejsze zarządzanie błędami i unikanie zagnieżdżonych obietnic.",
  //   },
  //   {
  //     id: 129,
  //     question: "Jak używać await?",
  //     answer: `await jest używane przed wywołaniem obietnicy, aby zatrzymać wykonanie funkcji asynchronicznej do czasu rozwiązania obietnicy. <br>Przykład:<br> let result = await somePromise;`,
  //   },
  //   {
  //     id: 130,
  //     question: "Co to jest Promise.all?",
  //     answer: ` Metoda, która przyjmuje iterowalny obiekt obietnic i zwraca pojedynczą obietnicę rozwiązaną, gdy wszystkie obietnice zostaną rozwiązane.`,
  //   },
  //   {
  //     id: 131,
  //     question: "Jak używać Promise.all?",
  //     answer: `Promise.all([promise1, promise2]).then(values => { // kod });`,
  //   },
  //   {
  //     id: 132,
  //     question: "Co to jest Promise.race?",
  //     answer: `Metoda, która przyjmuje iterowalny obiekt obietnic i zwraca pojedynczą obietnicę rozwiązującą się, gdy któraś z obietnic zostanie rozwiązana lub odrzucona.`,
  //   },
  //   {
  //     id: 133,
  //     question: "Jak używać Promise.race?",
  //     answer: `Promise.race([promise1, promise2]).then(value => { // kod });`,
  //   },
  //   {
  //     id: 134,
  //     question: "Co to jest AJAX?",
  //     answer: `Asynchronous JavaScript and XML, technika używana do asynchronicznej komunikacji z serwerem.`,
  //   },
  //   {
  //     id: 135,
  //     question: "Jakie są zalety używania AJAX?",
  //     answer: `Umożliwia dynamiczne aktualizowanie stron bez konieczności ich ponownego ładowania.`,
  //   },
  //   {
  //     id: 136,
  //     question: "Jakie są różnice między fetch a XMLHttpRequest?",
  //     answer: `fetch jest bardziej nowoczesnym API z prostszą składnią i zwraca obietnice, podczas gdy XMLHttpRequest używa callbacków.`,
  //   },
  //   {
  //     id: 50,
  //     question: "Jak obsłużyć błąd w funkcji asynchronicznej?",
  //     answer: `Używając try/catch wewnątrz funkcji asynchronicznej. <br> Przykład:<br> try { await something(); <br> } catch (error) { // kod }`,
  //   },
  //   {
  //     id: 51,
  //     question: " Co to jest event loop?",
  //     answer:
  //       "Mechanizm w JavaScript, który pozwala na wykonywanie operacji asynchronicznych poprzez kolejkę zadań i stos wywołań.",
  //   },
  //   {
  //     id: 52,
  //     question: "Jak działa mechanizm event delegation?",
  //     answer:
  //       "Technika polegająca na dodawaniu jednego obsługiwacza zdarzeń do wspólnego przodka zamiast oddzielnie do wielu potomków.",
  //   },
  //   {
  //     id: 53,
  //     question: "Co to jest DOM?",
  //     answer:
  //       "Document Object Model, struktura reprezentująca dokument HTML jako drzewo obiektów.",
  //   },
  //   {
  //     id: 54,
  //     question: "Jak manipulować elementem DOM w JavaScript?",
  //     answer:
  //       "Używając metod takich jak getElementById, querySelector, appendChild, removeChild itp.",
  //   },
  //   {
  //     id: 55,
  //     question: "Jak dodać zdarzenie do elementu DOM?",
  //     answer: `Używając metody addEventListener. <br>Przykład:<br> element.addEventListener('click', function() { // kod });`,
  //   },
  //   {
  //     id: 56,
  //     question: "Co to jest callback?",
  //     answer:
  //       "Funkcja przekazana jako argument do innej funkcji, która jest wywoływana w określonym momencie.",
  //   },
  //   {
  //     id: 57,
  //     question: " Co to jest callback hell i jak go uniknąć?",
  //     answer:
  //       "Zjawisko zagnieżdżania wielu funkcji zwrotnych, które prowadzi do trudności w czytaniu kodu. Można go uniknąć, używając obietnic lub async/await.",
  //   },
  //   {
  //     id: 58,
  //     question: "Co to jest moduł w JavaScript?",
  //     answer:
  //       "Niezależny fragment kodu, który może być eksportowany i importowany w innych plikach.",
  //   },
  //   {
  //     id: 59,
  //     question: "Jak eksportować moduł?",
  //     answer: `Używając export.<br> Przykład:<br> export function myFunc() { // kod }`,
  //   },
  //   {
  //     id: 60,
  //     question: "Jak importować moduł?",
  //     answer: `Używając import. <br> Przykład:<br> import { myFunc } from './myModule.js';`,
  //   },
  //   {
  //     id: 61,
  //     question: " Co to jest this w JavaScript?",
  //     answer:
  //       "Specjalne słowo kluczowe, które odnosi się do obiektu, w kontekście którego jest wywoływana funkcja.",
  //   },
  //   {
  //     id: 62,
  //     question: "Jakie są sposoby na zmianę kontekstu this?",
  //     answer: "Używając metod call, apply lub bind.",
  //   },
  //   {
  //     id: 63,
  //     question: "Jak działa metoda call?",
  //     answer: `call wywołuje funkcję z danym this i argumentami przekazanymi pojedynczo.<br> Przykład: <br> func.call(thisArg, arg1, arg2)`,
  //   },
  //   {
  //     id: 64,
  //     question: "Jak działa metoda apply?",
  //     answer: ` apply wywołuje funkcję z danym this i argumentami przekazanymi jako tablica.<br> Przykład:<br> func.apply(thisArg, [arg1, arg2])`,
  //   },
  //   {
  //     id: 65,
  //     question: "Jak działa metoda bind?",
  //     answer: `bind tworzy nową funkcję z ustalonym this i argumentami przekazanymi podczas jej tworzenia.<br> Przykład:<br> let boundFunc = func.bind(thisArg, arg1, arg2)`,
  //   },
  //   {
  //     id: 66,
  //     question: " Co to jest funkcja konstruktora?",
  //     answer: `Funkcja, która tworzy nowe obiekty i przypisuje im właściwości.<br> Przykład:<br> function Person(name) { this.name = name; }`,
  //   },
  //   {
  //     id: 67,
  //     question: "Jak utworzyć instancję obiektu za pomocą konstruktora?",
  //     answer: `Używając słowa kluczowego new.<br> Przykład<br>: let person = new Person('John');`,
  //   },
  //   {
  //     id: 68,
  //     question: "o to jest dziedziczenie prototypowe?",
  //     answer:
  //       "Mechanizm, w którym obiekty mogą dziedziczyć właściwości i metody z innych obiektów.",
  //   },
  //   {
  //     id: 69,
  //     question: "Jak dodawać metody do prototypu obiektu?",
  //     answer: `Używając Object.prototype.<br> Przykład:<br> Person.prototype.sayHello = function() {<br> console.log('Hello'); };`,
  //   },
  //   {
  //     id: 70,
  //     question: " Co to jest klasy w JavaScript?",
  //     answer:
  //       "Syntactic sugar dla funkcji konstruktorów i dziedziczenia prototypowego, wprowadzona w ES6.",
  //   },
  //   {
  //     id: 71,
  //     question: "Pytanie: Jak deklarujesz klasę?",
  //     answer: `Używając słowa kluczowego class.<br> Przykład:<br> class Person { constructor(name) { this.name = name; } }`,
  //   },
  //   {
  //     id: 72,
  //     question: "Jakie są różnice między class a funkcją konstruktora?",
  //     answer:
  //       "class ma bardziej czytelną składnię, obsługuje dziedziczenie i korzysta z super do wywoływania metod nadklasy..",
  //   },
  //   {
  //     id: 73,
  //     question: " Co to jest dziedziczenie w klasach?",
  //     answer:
  //       "Proces, w którym jedna klasa (podklasa) dziedziczy właściwości i metody innej",
  //   },
  //   {
  //     id: 74,
  //     question: "Co to jest super w kontekście klas?",
  //     answer: `Słowo kluczowe używane do wywoływania konstruktorów nadklasy oraz metod nadklasy w klasie podrzędnej.<br>
  //       class Enemy { //to może być też konstruktor <br>
  //     constructor(x, y) { <br>
  //         this.x = x; <br>
  //         this.y = y; <br>
  //         this.type = "normalny"; <br>
  //     } <br>
  // <br>
  //     fly() { <br>
  //         return this.type + " - lecę"; <br>
  //     } <br>
  // } <br>
  // <br>
  // class EnemyShooter extends Enemy { <br>
  //     constructor(x, y) { <br>
  //         super(x, y); <br>
  //         this.type = "strzelający"; <br>
  //     } <br>
  // <br>
  //     shoot() { <br>
  //         return this.type + " - strzelam"; <br>
  //     } <br>
  // } <br>`,
  //   },
  //   {
  //     id: 75,
  //     question: "Jak wywołać konstruktor nadklasy w podklasie?",
  //     answer: `Używając super().<br> Przykład:<br> class Child extends Parent { constructor() { super(); } }`,
  //   },
  //   {
  //     id: 76,
  //     question: "Jakie są metody statyczne w klasach?",
  //     answer: `Metody, które są wywoływane bez tworzenia instancji klasy.<br> Przykład:<br> static myMethod() { // kod }`,
  //   },
  //   {
  //     id: 77,
  //     question: "Jak zaimplementować metodę statyczną w klasie?",
  //     answer: `Używając słowa kluczowego static.<br> Przykład:<br> class MyClass { static myMethod() { <br> // kod } }`,
  //   },
  //   {
  //     id: 78,
  //     question: "Co to jest destrukturyzacja?",
  //     answer:
  //       "Sposób na wyodrębnienie wartości z tablic lub obiektów i przypisanie ich do zmiennych.",
  //   },
  //   {
  //     id: 79,
  //     question: "Jak zdestrukturyzować obiekt?",
  //     answer: "let { a, b } = obj;",
  //   },
  //   {
  //     id: 80,
  //     question: "Jak zdestrukturyzować tablicę?",
  //     answer: "let [a, b] = arr;",
  //   },
  //   {
  //     id: 81,
  //     question: "Co to jest operator rest (...)?",
  //     answer:
  //       "Operator używany do zbierania reszty elementów w tablicę lub obiekt.",
  //   },
  //   {
  //     id: 82,
  //     question: "Jak używać operatora rest w funkcjach?",
  //     answer: "function myFunc(...args) { // kod }",
  //   },
  //   {
  //     id: 83,
  //     question: "Co to jest operator spread (...)?",
  //     answer: " Operator używany do rozwinięcia elementów tablicy lub obiektu.",
  //   },
  //   {
  //     id: 84,
  //     question: "Jak używać operatora spread?",
  //     answer: "let newArr = [...arr1, ...arr2];",
  //   },
  //   {
  //     id: 85,
  //     question: "Co to jest Map?",
  //     answer:
  //       "Obiekt, który przechowuje pary klucz-wartość, gdzie klucze mogą być dowolnego typu.",
  //   },
  //   {
  //     id: 86,
  //     question: "Jak dodawać elementy do Map?",
  //     answer: "map.set(key, value);",
  //   },
  //   {
  //     id: 87,
  //     question: "Jak uzyskać wartość z Map?",
  //     answer: " map.get(key);",
  //   },
  //   {
  //     id: 88,
  //     question: "Co to jest Set?",
  //     answer: "Obiekt przechowujący unikalne wartości dowolnego typu.",
  //   },
  //   {
  //     id: 89,
  //     question: "Jak dodawać elementy do Set?",
  //     answer: "set.add(value);",
  //   },
  //   {
  //     id: 90,
  //     question: "Jak sprawdzić, czy Set zawiera wartość?",
  //     answer: "set.has(value);",
  //   },
  //   {
  //     id: 91,
  //     question: "Co to jest WeakMap?",
  //     answer:
  //       "Obiekt podobny do Map, ale z kluczami będącymi obiektami i posiadający słabe referencje do kluczy.",
  //   },
  //   {
  //     id: 92,
  //     question: "Co to jest WeakSet?",
  //     answer:
  //       "Obiekt podobny do Set, ale przechowujący jedynie obiekty i posiadający słabe referencje do elementów.",
  //   },
  //   {
  //     id: 93,
  //     question: "Jak działa operator ?? (nullish coalescing)?",
  //     answer:
  //       "Zwraca prawą wartość, jeśli lewa jest null lub undefined. Przykład: let value = a ?? b;",
  //   },
  //   {
  //     id: 94,
  //     question: "Co to jest Proxy?",
  //     answer:
  //       "Obiekt, który pozwala na zdefiniowanie niestandardowego zachowania dla podstawowych operacji (np. odczyt/zapis właściwości)..",
  //   },
  //   {
  //     id: 95,
  //     question: "Jak utworzyć Proxy?",
  //     answer: "let proxy = new Proxy(target, handler);",
  //   },
  //   {
  //     id: 96,
  //     question: "Co to jest Reflect?",
  //     answer:
  //       "Obiekt zawierający metody, które pozwalają na przeprowadzanie operacji na obiektach, które Proxy może przechwycić.",
  //   },
  //   {
  //     id: 97,
  //     question: "Jakie jest zastosowanie Reflect?",
  //     answer:
  //       " Używane do wykonywania operacji podobnych do tych z Proxy bez zmiany ich domyślnego zachowania. Przykład: Reflect.get(target, property);",
  //   },
  //   {
  //     id: 98,
  //     question: "Co to jest Generator?",
  //     answer:
  //       "Funkcja, która może być zatrzymana i wznowiona, umożliwiająca produkowanie sekwencji wartości.",
  //   },
  //   {
  //     id: 99,
  //     question: "Jak deklarować funkcję generatora?",
  //     answer: `Używając function*. <br> Przykład:<br> function* myGenerator() { yield 1; yield 2; }`,
  //   },
  //   {
  //     id: 100,
  //     question: "Jak działa metoda next() w generatorach?",
  //     answer: `Zwraca obiekt z wartością i flagą done.<br> Przykład:<br> let gen = myGenerator(); <br> gen.next();`,
  //   },
  //   {
  //     id: 101,
  //     question: "Co to jest Async Generator?",
  //     answer:
  //       " Generator, który zwraca obietnice i używa await wewnątrz niego.   ",
  //   },
  //   {
  //     id: 102,
  //     question: "Jak deklarować funkcję asynchronicznego generatora?",
  //     answer: `Używając async function*.<br> Przykład:<br> async function* myAsyncGenerator() { await ...; yield ...; }`,
  //   },
  //   {
  //     id: 103,
  //     question: "Co to jest Symbol?",
  //     answer:
  //       "Typ prymitywny unikalnej i niezmiennej wartości, często używany jako identyfikatory dla właściwości obiektów.",
  //   },
  //   {
  //     id: 104,
  //     question: "Jak tworzyć Symbol?",
  //     answer: "let sym = Symbol('description');",
  //   },
  //   {
  //     id: 105,
  //     question: "Jak używać Symbol jako klucza właściwości obiektu?",
  //     answer: "let obj = { [sym]: 'value' };",
  //   },
  //   {
  //     id: 106,
  //     question: "Co to jest for...of?",
  //     answer: `Pętla, która iteruje po iterowalnych obiektach (tablice, mapy, sety). <br>Przykład:<br> for (let item of arr) { // kod }`,
  //   },
  //   {
  //     id: 107,
  //     question: "Co to jest for...in?",
  //     answer: `Pętla, która iteruje po kluczach obiektu.<br> Przykład: <br> for (let key in obj) { // kod }`,
  //   },
  //   {
  //     id: 108,
  //     question: "Jakie są różnice między for...of a for...in?",
  //     answer:
  //       " for...of iteruje po wartościach iterowalnych obiektów, a for...in iteruje po kluczach obiektów.",
  //   },
  //   {
  //     id: 109,
  //     question: "Co to jest fetch?",
  //     answer: "API do wykonywania żądań HTTP.",
  //   },
  //   {
  //     id: 110,
  //     question: "Jak używać fetch do wykonania żądania GET?",
  //     answer: ` fetch('url') <br>.then(response => response.json())<br>.then(data => { // kod });`,
  //   },
  //   {
  //     id: 111,
  //     question: "Co to jest localStorage?",
  //     answer:
  //       "Mechanizm przechowywania danych po stronie klienta w przeglądarce, który pozwala na trwałe przechowywanie danych.",
  //   },
  //   {
  //     id: 112,
  //     question: "Jak zapisywać dane do localStorage?",
  //     answer: "localStorage.setItem('key', 'value');",
  //   },
  //   {
  //     id: 113,
  //     question: "Jak odczytać dane z localStorage?",
  //     answer: "let value = localStorage.getItem('key');",
  //   },
  //   {
  //     id: 114,
  //     question: "Co to jest sessionStorage?",
  //     answer:
  //       "Mechanizm podobny do localStorage, ale dane są przechowywane tylko w trakcie sesji przeglądarki.",
  //   },
  //   {
  //     id: 115,
  //     question: "Jakie są różnice między localStorage a sessionStorage?",
  //     answer:
  //       "localStorage przechowuje dane trwale, a sessionStorage przechowuje dane tylko do zamknięcia przeglądarki.",
  //   },
  //   {
  //     id: 116,
  //     question: "Co to jest cookie?",
  //     answer:
  //       "Dane przechowywane w przeglądarce, używane do śledzenia i przechowywania informacji o użytkowniku.",
  //   },
  //   {
  //     id: 117,
  //     question: "Jak zapisywać dane do cookie?",
  //     answer: `document.cookie = "name=value; expires=date; path=/"`,
  //   },
  //   {
  //     id: 118,
  //     question: "Jak odczytać dane z cookie?",
  //     answer: "let cookies = document.cookie.split(';');",
  //   },
  //   {
  //     id: 119,
  //     question: "Co to jest EventEmitter w Node.js?",
  //     answer: "Klasa, która pozwala na emitowanie i nasłuchiwanie zdarzeń.",
  //   },
  //   {
  //     id: 120,
  //     question: "Jak używać EventEmitter?",
  //     answer: `const EventEmitter = require('events'); <br> const emitter = new EventEmitter();<br> emitter.on('event', () => { // kod });<br> emitter.emit('event');`,
  //   },
  //   {
  //     id: 121,
  //     question: "Co to jest NPM?",
  //     answer:
  //       "Node Package Manager, narzędzie do zarządzania pakietami JavaScript.",
  //   },
  //   {
  //     id: 122,
  //     question: "Jak zainstalować pakiet za pomocą NPM?",
  //     answer: "npm install package-name",
  //   },
  //   {
  //     id: 124,
  //     question: "Co to jest package.json?",
  //     answer:
  //       "Plik konfiguracyjny zawierający informacje o projekcie i jego zależnościach.",
  //   },
  //   {
  //     id: 125,
  //     question: "Jakie informacje można znaleźć w package.json?",
  //     answer: "Nazwa, wersja, skrypty, zależności, autor, licencja.",
  //   },
  //   {
  //     id: 126,
  //     question: "Jak dodać skrypt do package.json?",
  //     answer: `W sekcji scripts, np. "start": "node app.js"`,
  //   },
  //   {
  //     id: 127,
  //     question: "Co to jest yarn?",
  //     answer: "Alternatywny do `npm",
  //   },
  {
    id: 128,
    question: "Podaj definicję DOM",
    answer:
      "DOM (Model Obiektowy Dokumentu) to hierarchiczny model, pozwalający na reprezentację struktury dokumentów HTML oraz XML. Główne elementy stanowiące go to węzły, które mogą mieć różne typy - elementy (tagi HTML), atrybuty, tekst czy komentarze. Każdy element na stronie webowej jest reprezentowany w DOM poprzez węzeł, a zależności pomiędzy nimi tworzą drzewo DOM.",
  },
  {
    id: 129,
    question: "Jakie mogą być typy inputów?",
    answer: ` Podstawowe typy : text, password, , submit, date, radio <br>
    Mniej używane typy: button, color, datetime, DatetimeLocal, FileUpload, hidden, image, month, range, search, time, url, week <br>    `,
  },
  {
    id: 130,
    question: "Główne atrybuty inputa?",
    answer: `<ul>
    <li>accept: przy pliku(audio, video image)</li>
    <li>alt: alternatywny tekst przy type = image</li>
    <li>autocomplete</li>
    <li>autofocus: automatyczne aktywowanie elementu po załadowaniu strony</li>
    <li>checked: element po wczytaniu strony jest domyślnie zaznaczony type="checkbox", type="radio")</li>
    <li>disable: wyłączony element</li>
    <li>form: Służy do określania listy formularzy, z którymi związany jest element input </li>
    <li>height: Określa wysokość w pikselach obrazu elementów z atrybutem type="image" </li>
    <li>list: element zawierający listę opcji do wyboru</li>
    <li>min/max: minimalna/maksymalna wartość elementu</li>
    <li>minlength/maxlenght: minimalna/maksymalna liczba znaków</li>
    <li>name: nazwa elementu</li>
    <li>pattern: wyrażenie wg którego sprawdzana jest zawartość elementu</li>
    <li>placeholder: tekst wyświetlany w polu tekstowym</li>
    <li>readonly: wartość elementu można tylko odczytać</li>
    <li>required: obowiązkowe wypełnienie elementu</li>
    <li>src: adres URL obrazu graficznego type="image"</li>
    <li>step: skok wartości elementu</li>
    <li>title: tytuł</li>
    <li>value: wartość elementu</li>
    <li>width: szerokość elementu w pikselach elementów z atrybutem type="image"</li>
</ul>`,
  },
  {
    id: 131,
    question: "Jakie mamy metody API?",
    answer: `POST -	Tworzy nowy zasób.<br>
GET -	Pobiera zasób.<br>
PUT -	Aktualizuje istniejący zasób.<br>
DELETE - Usuwa zasób.<br>`,
  },
  {
    id: 132,
    question: "Jakie mamy pseudo-klasy w CSS?",
    answer: `Pomagają nam na zmianę wyglądu elementu HTML np. po najechaniu na niego myszką, po kliknięciu na nim<br>
    <ul>
      <li>a:active</li>
      <li>input:checked</li>
      <li>input:disabled</li>
      <li>p:first-child</li>
      <li>p:first-of-type</li>
      <li>input:focus</li>
      <li>a:hover</li>
      <li>p:last-child</li>
      <li>a:link</li>
      <li>p:nth-child(2)</li>
      <li>p:nth-last-child(2)</li>
      <li>a:visited</li>
    </ul>
    `,
  },
  {
    id: 133,
    question: "Jakie mamy pseudo-elementy w CSS?",
    answer: `Tymi częściami są: piersza litera, pierwszy wiersz, zaznaczenie, wstawka przed elementem, wstawka po elemencie.<br>
    <ul>
      <li>p::after</li>
      <li>p::before</li>
      <li>p::first-letter</li>
      <li>p::first-line</li>
      <li>p::selection</li>
    </ul>
    `,
  },
  {
    id: 134,
    question: "Co to jest yarn?",
    answer: `Kombinator tak naprawdę określa relację w drzewie węzłów między wskazywanymi elementami po obu stronach kombinatora<br>
    <ul>
    <li>Kombinator potomka:[ E  F ] - Element F będący potomkiem elementu E.</li>
    <li>Kombinator dziecka: [ E > F ] -	Element F będący dzieckiem elementu E.</li>
    <li>Kombinator brata następującego: [ E + F ] - Element F będący bratem następującym elementu E.</li>
    <li>Kombinator następnika bratowego: [ E ~ F ] - Element F będący następnikiem bratowym elementu E.</li>
    <li>Kombinator kolumny: [ E || F ] - Element F będący komórką w elemencie E określającym kolumnę.</li>
    <li>Kombinator referencji: [ E /ref/ F ] - Element F jawnie powiązany (np. atrybutem) z elementem E.</li>
    </ul>`,
  },
  {
    id: 135,
    question: "Róznice pomiędzy inline <-> inline-block",
    answer:
      "display: inline – sprawia, że element będzie wyświetlany jako element liniowy. display: block – element zostanie wyświetlony jako element blokowy. display: inline-block – łączy cechy elementów liniowych i blokowych.",
  },
];

function App() {
  const [flashcards] = useState(sampleFlashcards);
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [learnedFlashcards, setLearnedFlashcards] = useState([]);
  // const [flip, setFlip] = useState(false);

  const getNextFlashcard = () => {
    const availableFlashcards = flashcards.filter(
      (fc) => !learnedFlashcards.includes(fc.id)
    );
    if (availableFlashcards.length === 0) {
      alert("Wszystkie fiszki zostały nauczone!");
      return;
    }
    const newIndex = Math.floor(Math.random() * availableFlashcards.length);
    const newFlashcardIndex = flashcards.findIndex(
      (fc) => fc.id === availableFlashcards[newIndex].id
    );
    setHistory([...history, currentFlashcardIndex]);
    setCurrentFlashcardIndex(newFlashcardIndex);
  };

  const getPreviousFlashcard = () => {
    if (history.length > 0) {
      const previousIndex = history[history.length - 1];
      setHistory(history.slice(0, history.length - 1));
      setCurrentFlashcardIndex(previousIndex);
    }
  };
  const markAsLearned = () => {
    setLearnedFlashcards([
      ...learnedFlashcards,
      flashcards[currentFlashcardIndex].id,
    ]);
    getNextFlashcard();
  };

  return (
    <div className="App">
      <Flashcard flashcard={flashcards[currentFlashcardIndex]} />
      <div className="buttons">
        <button onClick={getPreviousFlashcard} disabled={history.length === 0}>
          Back
        </button>
        <button onClick={getNextFlashcard}>Next</button>
        <button onClick={markAsLearned}>Learned</button>
      </div>
    </div>
  );
}

export default App;
