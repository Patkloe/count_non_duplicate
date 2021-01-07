// version 0.0.0.1

function count_non_duplicate(s,window){
  var res = {};
  var dis = {};
  var ins = "";
  var deb = 0;
  while(deb < s.length){
   let keys = Object.keys(dis);
   if(ins.length >= 0 || ins.length <= window)/*(keys.length >= 0 || keys.length <= window)*/{
     dis[s[deb]] = s[deb];
      alert(dis);
       if(keys.length == window){
         for( var i of keys){
          ins = ins + i;
         }
          res[ins] = ins.length;
          ins = ""; // reinitialise ins
          // on doit reinitialiser dis
       }
   }
   deb++;
  }
 return res;
}
var test = "aaadddrttyuiop";
count_non_duplicate(test,4);
