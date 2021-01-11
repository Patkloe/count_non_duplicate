function count_non_duplicate(s,window){

 var dis = {};

 //var ins = "";

 var res = {};

 var deb = 0;

 while(deb < s.length){

  dis[s[deb]] = s[deb];

  let getkeys = Object.keys(dis);

  if(getkeys.length == window){

    var ins = "";

    for(var i of getkeys){

      ins = ins + i;

      if(ins.length == window){

        res[ins] = ins.length;

      }

    }
 
     ins = ""/*s[deb]*/;

     dis = {};
 
  } // end if
 
  deb++;

 } // end while

  return res;

} //end function
var test = "rtyuijjjklloopm";

count_non_duplicate(test,4)
