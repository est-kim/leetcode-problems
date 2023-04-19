class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class SinglyLinkedList{
      constructor(){
          this.head = null;
          this.tail = null;
          this.length = 0;
      }
      push(val) {
          let newNode = new Node(val);
          if (!this.head) {
              this.head = newNode;
              this.tail = this.head;
          } else {
              this.tail.next = newNode;
              this.tail = newNode;
          }
          this.length++;
          return this;
      }
      pop(){
          if (!this.head) return undefined;
          let current = this.head;
          let newTail = current;
          while (current.next) {
              newTail = current;
              current = current.next;
          }
          this.tail = newTail;
          this.tail.next = null;
          this.length--;
          if (this.length === 0) {
              this.head = null;
              this.tail = null;
          }
          return current;
      }
      shift() {
          if (!this.head) return undefined;
          let currentHead = this.head;
          this.head = currentHead.next;
          this.length--;
          if (this.length === 0) {
              this.tail = null;
          }
          return currentHead;
      }
      unshift(val) {
          let newNode = new Node(val);
          if (!this.head) {
              this.head = newNode;
              this.tail = newNode;
          } else {
              newNode.next = this.head;
              this.head = newNode;
          }
          this.length++;
          return this;
      }
      get(index) {
          if(index < 0 || index >= this.length) return null;
          let counter = 0;
          let current = this.head;
          while (counter !== index) {
              current = current.next;
              counter++;
          }
          return current;
      }
      set(index, val) {
          let foundNode = this.get(index);
          if (foundNode) {
              foundNode.val = val;
              return true;
          }
          return false;
      }
      insert(index, val) {
          if (index < 0 || index > this.length) return false;
          if (index === this.length) return !!this.push(val);
          if (index === 0) return !!this.unshift(val);
          let newNode = new Node(val);
          let prev = this.get(index - 1)
          let temp = prev.next;
          prev.next = newNode;
          newNode.next = temp;
          this.length++;
          return true;
      }
      remove(index) {
          if (index < 0 || index >= this.length) return null;
          if (index === 0) return this.shift();
          if (index === this.length - 1) return this.pop();
          let prevNode = this.get(index - 1);
          let removed = prevNode.next;
          prevNode.next = removed.next;
          this.length--;
          return removed;
      }
  }

//   let list = new SinglyLinkedList()
//   list.push("hello")
//   list.push("there")
//   list.push("!")
