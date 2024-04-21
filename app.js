// write code here
<script>
        let num1 = prompt("Enter the first number");
        let num2 = prompt("Enter the second number");

        
        if (!isNaN(num1) && !isNaN(num2)) {
        num1 = Number(num1);
        num2 = Number(num2); 

        let sum = num1 + num2;
        alert("Sum: " + sum);
        } else {
        alert("Invalid number");
        }

</script>
