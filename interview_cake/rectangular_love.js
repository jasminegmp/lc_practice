const RectangularLove = function (rect1, rect2){
    let leftX, bottomY, width, height, resultObj;
    [bottomY, height] = findOverlap(rect1, rect2, 'y');
    [leftX, width] = findOverlap(rect1, rect2, 'x');
    resultObj = {
        leftX,
        bottomY,
        width,
         height
    }
}

const findOverlap = function(rect1, rect2, axis) {
    let arr1, arr2;
    // create two arrays from range of rect1 and rect2
    if (axis === 'x'){
        arr1 = Array.from(new Array(rect1.width + 1), (x, i) => i + rect1.leftX)
        arr2 = Array.from(new Array(rect2.width + 1), (x, i) => i + rect2.leftX)
    }
    else{
        arr1 = Array.from(new Array(rect1.height + 1), (x, i) => i + rect1.bottomY)
        arr2 = Array.from(new Array(rect2.height + 1), (x, i) => i + rect2.bottomY)
    }

    //find intersection
    let intersection = arr1.filter(x => arr2.indexOf(x) !== -1);

    if (axis === 'x'){
        if(intersection.length > 1){
            leftX = Math.min(...intersection);
            width = Math.max(...intersection) - Math.min(...intersection);
            return [leftX, width];
           // console.log(leftX, width)
        }
        else{
            return false;
        }
    }
    else{
        if(intersection.length > 1){
            bottomY = Math.min(...intersection);
            height = Math.max(...intersection) - Math.min(...intersection);
            return [bottomY, height]
        }
        else{
            return false
        }
    }
    
    
}

const rect1 = {

    // Coordinates of bottom-left corner
    leftX: 1,
    bottomY: 1,
  
    // Width and height
    width: 6,
    height: 3,
};


const rect2 = {

    // Coordinates of bottom-left corner
    leftX: 5,
    bottomY: 2,
  
    // Width and height
    width: 3,
    height: 6,
};

RectangularLove(rect1,rect2);