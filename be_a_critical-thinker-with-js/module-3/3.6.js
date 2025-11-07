class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const head = new Node(10);
head.next = new Node(34);
head.next.next = new Node(324);
console.log(head);
let temp=head;

while(temp.next !==null){
    console.log(temp.value);
   temp= temp.next
}