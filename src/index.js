module.exports = function toReadable (number) {
  var units = ['zero','one', 'two','three','four','five','six','seven','eight','nine','ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var decads = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var res = '';
  if(number<20)
   res+=units[number];
  if(number>=20&&number<100)
  {if(number%10==0)
    {res+=decads[number/10-2];}
    else
    {res+=decads[Math.floor(number/10-2)];
    res+=' '+units[number%10];}
  } 
  if(number>=100)
  {if(number%100==0)
    {res+=units[Math.floor(number/100)]+' hundred';
    }
    else
    if(number%100<20)
    {res+=units[Math.floor(number/100)]+' hundred ';
        res+=units[number%100];}
        else
      {res+=units[Math.floor(number/100)]+' hundred ';
          if(number%10==0)
    {number=number%100;
        res+=decads[number/10-2];}
    else
    {number=number%100;
        res+=decads[Math.floor(number/10-2)];
    res+=' '+units[number%10];}
    }
} 
return res;}
