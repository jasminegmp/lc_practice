 // Definition for singly-linked list.
 function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //console.log(l1, l2)
    let output_stack = [];
    let carry;
    let sum = 0;

    while (l1 || l2){
        sum = 0;
        if (l1){
            console.log(l1.val)
            sum += l1.val;
            l1 = l1.next;

        }
        if (l2){
            console.log(l2.val)
            sum += l2.val;
            l2 = l2.next;
        }
        if (carry > 0){
            sum += carry;
            
            carry = 0;
        }
        if (sum > 9){
            let temp = sum % 10;
            carry = Math.floor(sum / 10);
            output_stack.push(temp);
            console.log("output_stack", output_stack)
            console.log("sum:", sum)
            console.log("sum % 10:", temp)
            console.log("carry:", carry)
        }
        else{
            output_stack.push(sum)
        }
    }
    if (carry > 0){
        output_stack.push(carry);
    }

    console.log(output_stack);
    let node = new ListNode(output_stack.pop());
    while(output_stack.length){
        let prevnode = new ListNode(output_stack.pop());
        prevnode.next = node;
        node = prevnode;
    }


    return node;
};


// for testing, create a linked list of [2, 4, 3]
// create first node
const head_1 = new ListNode(5);
// add 2nd node
//head_1.next = new ListNode(4);
// add 3rd node
//head_1.next.next = new ListNode(3);
//head_1.next.next.next = new ListNode(9);

// for testing, create a linked list of [5,6,4]
// create first node
const head_2 = new ListNode(5);
// add 2nd node
//head_2.next = new ListNode(6);
// add 3rd node
//head_2.next.next = new ListNode(4);

let output = addTwoNumbers(head_1, head_2);
console.log(output);