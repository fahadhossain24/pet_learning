function identity<T>(value: T): T {
  return value;
}

function getArray<T>(items: T[]): T[] {
  return items;
}

// const itemsArray = getArray([1, 2, 3]);
// const nameArray = getArray(["Fahad", "Rakib", "Rafi"]);

function printLength<T extends { length: number }>(item: T): number {
  return item.length;
}

// console.log(printLength([1, 2, 3]));
// console.log(printLength("Fahad"));
// console.log(printLength(45));

// generic class
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }
}

const numberStack = new Stack<number>();

numberStack.push(10);
numberStack.push(20);

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const response: ApiResponse<{ name: string; age: number }> = {
  data: {
    name: "Fahad Hossain",
    age: 22,
  },
  success: true,
};

// combining multiple generics
function pair<K, V>(key: K, value: V): [K, V] {
  return [key, value];
}
// console.log(pair('name', "Fahad Hossain"))

class Queue<T> {
  public queueItems: T[] = [];

  enqueue(item: T): void {
    this.queueItems.push(item);
  }

  dequeue(): T | undefined {
    return this.queueItems.shift();
  }
}

const votQueue = new Queue<string>();
votQueue.enqueue("Fahad");
votQueue.enqueue("Zakir");
votQueue.dequeue();
// console.log(votQueue.queueItems)

// merge two object
const mergeObjects = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};

// console.log(mergeObjects<{name: string, age: number}, {company: string, designation: string}>({name: "Fahad", age: 24}, {company: "STA", designation: "Backend Developer"}))

// make my won array traversing function
function myForEach<T>(items: T[], myForEachFunc: (v: T) => void): void {
  items.reduce((a, v) => {
    myForEachFunc(v);
    return undefined;
  }, undefined);
}

function myFilter<T>(items: T[], myFilterFunc: (v: T) => boolean): T[] {
  return items.reduce<T[]>((a, v) => (myFilterFunc(v) ? [...a, v] : a), []);
}

function myMap<T, K>(items: T[], myMapFunc: (v: T) => K): K[] {
  return items.reduce((a, v) => [...a, myMapFunc(v)], [] as K[]);
}

function myFind<T>(items: T[], myFindFunc: (v: T) => boolean): T | undefined {
  return items.reduce<T | undefined>((a, v) => {
    return a !== undefined ? a : myFindFunc(v) ? v : undefined;
  }, undefined);
}

//  myForEach([1, 2, 4, 5], (v) => {
//     console.log('ForEach value: ', v)
//  })

// const filteredList = myFilter([4, 5, 8, 9, 3, 7], (v) => v % 2 !== 0)
// console.log(filteredList)

// const mapedValue = myMap([4, 5, 9, 3, 7, 8], (v) => (v * 2).toString())
// console.log(mapedValue)

const findFromList = myFind([4, 8, 9, 7, 3], (v) => v === 9);
console.log(findFromList);
