
let RandomNumber=Math.random()*(68-1)+1

let ArrRandomNumber=[];

for(let i=0;i<15;i++){
    ArrRandomNumber.push(Math.floor(Math.random()*(68-1)+1))
}




//for(let i=0;i<ArrRandomNumber.length;i++){
//    arr[ArrRandomNumber[i]]='m';
//}
//generate nibher


const OperationCells=(arr,str,w,h)=>{
    w=w-1;
    h=h-1;
    if(arr.length!=2){return null};
    switch(true){
        case str==='right':
            if(arr[1]+1<=w){return[arr[0],arr[1]+1]}
            break;
        
        case str==='left':
            if(arr[1]-1>=0){return[arr[0],arr[1]-1]}
            break;
        
        case str==='top':
            if(arr[0]-1>=0){return[arr[0]-1,arr[1]]}
          break;
        
        case str==='bottom':
            if(arr[0]+1<=h){return[arr[0]+1,arr[1]]}
            break;
        
        case str==='top-right':
            if(arr[0]-1>=0&&arr[1]+1<=w){return[arr[0]-1,arr[1]+1]}
            break;
        case str==='top-left':
            if(arr[0]-1>=0&&arr[1]-1>=0){return[arr[0]-1,arr[1]-1]}
          break;

        case str==='bottom-right':
            if(arr[0]+1<=h&&arr[1]+1<=w){return[arr[0]+1,arr[1]+1]}
            break;
        
        case str==='bottom-left':
            if(arr[0]+1<=h&&arr[1]-1>=0){return[arr[0]+1,arr[1]-1]}
            break;
       


        }
        

}

const Neighbors=(arr)=>{
    let Neighbors=[]
    if(arr.length!=2){return Error('schema of arr != 2 x 1')}
    let ArrOP=['right','left','top','bottom','top-right','top-left','bottom-right','bottom-left'];
    for(let i=0;i<ArrOP.length;i++){
        if(OperationCells(arr,ArrOP[i],9,14)){Neighbors.push(OperationCells(arr,ArrOP[i],9,14))}
    }
    return Neighbors;

}
console.log(Neighbors([0,1]))