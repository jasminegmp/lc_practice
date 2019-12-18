
 // Definition for singly-linked list.
 function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function mergeTwoLists (l1, l2) {
    let  m_head = new ListNode();
    let l3 = m_head;
    

    while (l1 && l2){
        //l1.val
        if (l1.val > l2.val){
            l3.next = l2;
            l2 = l2.next;  
        }
        else{
            l3.next = l1;
            l1 = l1.next;
        }
        l3 = l3.next;
        //console.log(l3.val, l1.val, l2.val);
    }

    l3.next = l1 || l2;

    console.log(m_head);
    return m_head;

};

// for testing, create a linked list of [1,2,4]
// create first node
const head_1 = new ListNode(1);
// add 2nd node
head_1.next = new ListNode(2);
// add 3rd node
head_1.next.next = new ListNode(4);

// for testing, create a linked list of [1,3,4]
// create first node
const head_2 = new ListNode(1);
// add 2nd node
head_2.next = new ListNode(3);
// add 3rd node
head_2.next.next = new ListNode(4);
// add 4th node
head_2.next.next = new ListNode(6);

let output = mergeTwoLists(head_1, head_2);
console.log(output);