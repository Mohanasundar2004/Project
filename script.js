/*let button=document.getElementById('btn');
var height=parseInt(document.getElementById('height').value);
var weight=parseInt(document.getElementById('weight').value);
var result=document.getElementById('output');
let h=false,w=false;
 function AddaddEventListener(){
   
    if(height==='' || isNaN(height) || (Number(height)<=0)){
        document.getElementById('height_error').innerHTML='please provide a valid height';
    }
    else{
        document.getElementById('height_error').innerHTML='';
        h=true;
    }
    if(weight==='' || isNaN(weight) || (Number(weight)<=0)){
        document.getElementById('height_error').innerHTML='please provide a valid height';
    }
    else{
        document.getElementById('height_error').innerHTML='';
        w=true;
    }
    if(h && w){
        const bmi=(Number(weight)/((Number(height)**2)/10000)).toFixed(2);
    if(bmi<18.6){
        result.innerHTML='Under Weight :'+bmi;
    }
    else if(bmi>=18.6 && bmi<24.9){
        result.innerHTML='Normal weight :'+bmi;
    }
    else
    result.innerHTML='Over weight:'+bmi;
    }
    else{
        alert('This form is incorrect');
        result.innerHTML='';
    }
}*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateBtn').addEventListener('click', function() {
        const height = parseFloat(document.getElementById('height').value);
        const weight = parseFloat(document.getElementById('weight').value);
        
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            document.getElementById('output').textContent = 'Please enter valid height and weight.';
            return;
        }
        const h=document.getElementById('heicalc');
        const w=document.getElementById('weicalc');
        if( h==='meter'){
            var heightInMeters = height;
        }else if(h==='centimeter'){
            var heightInMeters = height / 100;
        }
        if(w==='kilogram'){
            var weightInkilogram=weight;
        }
        else if(w==='pound'){
            var weightInkilogram=(weight*0.453592);
        }
        //const heightInMeters = height / 100;
        const bmi = weightInkilogram / (heightInMeters * heightInMeters);
        let bmiCategory;

        if (bmi < 18.5) {
            bmiCategory = 'Underweight';
        } else if (bmi < 24.9) {
            bmiCategory = 'Normal weight';
        } else if (bmi < 29.9) {
            bmiCategory = 'Overweight';
        } else {
            bmiCategory = 'Obesity';
        }

        document.getElementById('output').textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
    });
});
