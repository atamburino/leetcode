/**
 * Reverses a singly linked list.
 *
 * @param {ListNode} head - The head node of the linked list.
 * @return {ListNode} - The new head node of the reversed linked list.
 */
var reverseList = function(head) {
    // Initialize 'prev' to null.
    // This will eventually become the new tail of the reversed list.
    let prev = null;
    
    // Initialize 'current' to the head of the list.
    // This pointer will be used to traverse the list.
    let current = head;

    // Iterate through the linked list until 'current' becomes null.
    while (current !== null) {
        // Step 1: Store the next node.
        // 'nextTemp' holds the reference to the next node in the original list.
        let nextTemp = current.next;

        // Step 2: Reverse the 'next' pointer of the current node.
        // By pointing 'current.next' to 'prev', the direction of the link is reversed.
        current.next = prev;

        // Step 3: Move 'prev' and 'current' one step forward.
        // 'prev' moves to the current node, becoming the new previous node.
        prev = current;

        // 'current' moves to the next node in the original list.
        current = nextTemp;
    }

    // After the loop, 'prev' points to the new head of the reversed list.
    return prev;
};