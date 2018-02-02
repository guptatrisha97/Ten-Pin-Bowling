<!DOCTYPE html>
<html>

<head>
    <title>BOWLING SCORE</title>
    
</head>
<body>
   
    <button onclick="score();">Click to input</button>
    
    <p id="demo"></p>
</body>
<script>
    
    function spare_bonus(s,i){
        if((i+1)>=s.length){
            return 0;
        }
        else
        {
            return s[i+1];
        }
    }
    function strike_bonus(s,i){
        if((i+2)>=s.length){
            return 0;
        }
        else
        {
            return s[i+1]+s[i+2];
        }
    }
    function score(){
        
        var str=prompt("Please enter the frames");
        var ss = str.split(",");
        var s = [];
        var i;
        for(i=0;i<ss.length;i++){
            s.push(parseInt(ss[i]));
        }        
        var c=0;
        var score=0;
        var frame=0;
        for(i=0;i<s.length;i++)
        {
            if((i+1)<s.length & frame<10)
            {
                if((s[i]+s[i+1])==10)
                {
                    score=score+10+spare_bonus(s,i+1);
                    i++;
                }
                else if(s[i]==10)
                {
                    score=score+10+strike_bonus(s,i);
                }
                else
                {
                    score=score+(s[i]+s[i+1]);
                    i=i+1;
                }
                frame++;
            }
            else if(frame<10)
            {
                score=score+s[i];
            }
            else{}
        }
        
        document.getElementById("demo").innerHTML ="SCORE = "+score;
    }
    
</script>
</html>    
