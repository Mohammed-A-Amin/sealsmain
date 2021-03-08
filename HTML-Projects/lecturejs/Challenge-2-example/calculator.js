 document.getElementById('butt').addEventListener('click', calc);
 
 function calc()
            {
                const n1 = parseFloat(document.getElementById('n1').value);
                const n2 = parseFloat(document.getElementById('n2').value);
                
                const oper = document.getElementById('operators').value;
                
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }
            }
            