// Linked List Implementation - prepend()
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }
  insert(index,value) {
    if(index<0 || index>this.length){
        console.error("Index Out of Bound");
        return undefined;
    }if(index===0){
       return this.prepend(value)
    }
    //if insert is at end of the list
    if(index===this.length){
       return this.append(value)
    }
    let count =0;
  
    let leadingNode=this.head;
    while(count === index-1){
      leadingNode=leadingNode.next;
      count++
    }
     
  }
  remove() {}
  print() {
    const arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr.join(" -> "), " -> Null");
  }
}
const linkedList = new LinkedList();

linkedList.append(1);
linkedList.append(2);
linkedList.append(3);

linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(300);
linkedList.print();

//Output : 300 -> 20 -> 10 -> 1 -> 2 -> 3  -> Null
