function CntVowels(msg)
{
     let cnt = 0;
    for(const char of msg)
    {
       
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || char=='A' || char=='E' || char=='I' || char=='O' || char=='U' )
            {
                cnt++;
            } 
    }
    console.log(cnt);
}

CntVowels("xyz");

const count = (msg)=>{
    let cnt = 0;
     for(const char of msg)
    {
       
        if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u' || char=='A' || char=='E' || char=='I' || char=='O' || char=='U' )
            {
                cnt++;
            } 
    }
    console.log(cnt);
}

count("Amol");