/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    
    const s_n = n.toString();
    let prod_n = 1;
    let sum_n = 0 ;
    for (let x = 0; x < s_n.length; x++){
        
        let current_num = Number(s_n[x]);
        sum_n += current_num;
        prod_n *= current_num;
    }
    let final_n = prod_n - sum_n;
    return final_n;
    
    
};