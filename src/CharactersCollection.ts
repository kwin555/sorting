import { Collection } from "./Sorter";

export class CharactersCollection implements Collection {
  data: string;

  constructor(data: string) {
    this.data = data;
  }
  get length(): number {
    return this.data.length;
  }
  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }
  swap(leftIndex: number, rightIndex: number): void {
    const charactersArray = this.data.split("");
    const leftHand = charactersArray[leftIndex];
    charactersArray[leftIndex] = charactersArray[rightIndex];
    charactersArray[rightIndex] = leftHand;
    this.data = charactersArray.join("");
  }
}
