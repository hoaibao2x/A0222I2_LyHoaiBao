do {
    if (physicMarks && chemistryMarks && biologicalMarks) {
        alert ('Please enter again !');
    }
    var inputPhysic = prompt('Please enter Physic marks');
    var inputChemistry = prompt('Please enter Chemistry marks');
    var inputBiological = prompt('Please enter Biological marks');
    // Parse to Float
    var physicMarks = parseFloat(inputPhysic);
    var chemistryMarks = parseFloat(inputChemistry);
    var biologicalMarks = parseFloat(inputBiological);
    //Calculator
    var avgCalc = (physicMarks + chemistryMarks + biologicalMarks)/3;
    var avg = avgCalc.toFixed(1);
    var sumCalc = physicMarks + chemistryMarks + biologicalMarks;
    var sum = sumCalc.toFixed(1);
} while (physicMarks < 0 || chemistryMarks < 0 || biologicalMarks < 0);
if (avg <= 10 && avg >= 8) {
    document.write('Average marks is: ' + avg);  
    document.write('<br>'); 
    document.write('Sum marks is: ' + sum);
    document.write('<br>');
    document.write('Good Marks');
} else if(avg < 8 && avg >= 6.5){
    document.write('Average marks is: ' + avg);  
    document.write('<br>'); 
    document.write('Sum marks is: ' + sum);
    document.write('<br>');
    document.write('Medium Marks');
} else if ( avg < 6.5 && avg > 0 ) {
    document.write('Average marks is: ' + avg);  
    document.write('<br>'); 
    document.write('Sum marks is: ' + sum);
    document.write('<br>');
    document.write('Bad Marks');
} else {
    alert('Lỗi điểm !');
}