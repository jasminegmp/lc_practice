
 //* Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


function bstInsert(root, node){
    //console.log(root, node)
    
    if (root === null){
        root = node;
    }
    else{
        //console.log(node.val);
        if (root.val > node.val){
            if (root.left === null){
                root.left = node;
            }
            else{
                bstInsert(root.left, node);
            }
        }
        else{
            if (root.right === null){
                root.right = node;
            }
            else{
                bstInsert(root.right, node);
            }
        }
    }

}


function createBST(root, data){
    if (root === null){
        root = new TreeNode(data[0])
    }
    for (let i = 1; i<data.length; i++){
        //console.log(data[i], root);
        bstInsert(root, new TreeNode(data[i]));
    }

    console.log(root);
    return root;
}

const data = [3,9,20,15,7];

let root = new TreeNode();
//console.log(root);
let tree = createBST(null, data);