export const intdiv = function(a: number, b: number){
    return Math.floor(a/b);
};

export const reverseEndian = function(num: number){
    return (num>>>24&0xff)
    |(num>>>8&0xff00)
    |(num<<8&0xff0000)
    |(num<<24&0xff000000);
};

export const newarr = function<T>(n: number): T[]{
    return new Array(n).fill(0)
}
