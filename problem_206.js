
 // Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// iterative solution
function reverseList (head) {
    //console.log(head);
    let old_head = null;
    let new_head;

    if (head === null){
        return head;
    }

    while (head) // while head itself isn't null, that means there's items in the LL
    {
        new_head = new ListNode();
        //console.log(head.val);
        new_head.val = head.val;
        new_head.next = old_head;
        old_head = new_head;
        //console.log("old", old_head.val);
        head = head.next;

    }
    return new_head;
};

//recursive solution
function recursiveReverseList (new_head, old_head){

    // base case, reached end of LL
    if (old_head === null)
    {
        return new_head;
    }
    
    let temp = old_head.next;
    old_head.next = new_head;
    recursiveReverseList(old_head, temp);
}

// for testing, create a linked list of [1,2,3,4,5]
// create first node
const head = new ListNode(1);

// add 2nd node
head.next = new ListNode(2);

// add 3rd node
head.next.next = new ListNode(3);

// add 4th node
head.next.next.next = new ListNode(4);

// add 5th node
head.next.next.next.next  = new ListNode(5);

let output = recursiveReverseList(null, head);
console.log(output);