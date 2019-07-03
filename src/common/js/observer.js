
let eventListener = {}


const $on = (eventName,cb)=>{
   if(!eventListener[eventName]){
      eventListener[eventName] = [];
   }

   eventListener[eventName].push(cb)
}


const $emit = (eventName,params)=>{
    if(eventListener[eventName]){
        eventListener[eventName].map((cb)=>{
            cb(params);
        })
    }
 }


 const $off = (eventName,cb)=>{
    if(eventListener[eventName]){
        if(cb){
            let index = eventListener[eventName].indexOf(cb);
            eventListener[eventName].splice(index,1);
        }else{
            eventListener[eventName].length = 0;
        }
    }
 }

export default {
    $on,
    $emit,
    $off
}