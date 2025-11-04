// Stack Implementation using Array(LIFO)
class Stack {
  constructor() {
    this.items = [];
  }

  // -> time complexity   O(1)
  push(value) {
    this.items.push(value);
  }

  // -> time complexity   O(1)
  pop() {
    if (this.items.length) return undefined;
    return this.items.pop(value);
  }

  // -> time complexity   O(1)
  peek() {
    if (this.isEmpty()) {
      return "Nothing To Peek";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}

const stack = new Stack();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.push(10));
console.log(stack.push(20));
stack.print();
console.log(stack.peek());
