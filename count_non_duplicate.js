function count_non_duplicate(s,window){
var deb = 0;
ins = "";
var res = {};
 while(deb < s.length){
   if(ins.length >= 0 &&  ins.length <= window){
      ins = ins + s[deb];
   }
   if(ins.length == window){
    res[ins] = ins.length;
    ins = "s[deb]";
   }
  deb++;
 }
return res;
}
var s = "dffrfyopikkl";
count_non_duplicate(s,3);
