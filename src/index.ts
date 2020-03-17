import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedListColllection";

//const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
//const charactersCollection = new CharactersCollection("asdfefasdfmzxcm");
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
const sorter = new Sorter(linkedList);
sorter.sort();
linkedList.print();
