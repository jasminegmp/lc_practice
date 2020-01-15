
 //* Definition for a binary tree node.
 function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
} 

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    
    if (root === null){
        return 0;
    }
    else{
        let left_height = maxDepth(root.left);
        let right_height = maxDepth(root.right);
        return Math.max(left_height, right_height) + 1;
    }
    
};

//const data = [3,9,20,null,null,15,7];
