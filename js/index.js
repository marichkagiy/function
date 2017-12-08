const userA = (prompt('Please enter \"a\" value for  ax2 + bx + c = 0 Attention a not equal 0'));
const userB = (prompt('Please enter \"b\" value for  ax2 + bx + c = 0'));
const userC = (prompt('Please enter \"c\" value for  ax2 + bx + c = 0'));
//Geting users's input as values [a,b,c] for quadratic equatation
  
const result = SolveQuadratic(userA, userB, userC );  
//Storing the calculation of function 

  document.write('a = '+ userA);
  document.write('<br>');
  document.write('b = '+ userB);
  document.write('<br>');
  document.write('c = '+ userC);
  document.write('<br>');
//User input fill in

if (userA != 0) {
   document.write(result);
//Printing to HTML Doc result of solving if a not equal 0
  } else {   
    document.write('Please Reload page \'a\' could not equal 0');
//Notification of problem with putting 0 as value in a
}

function SolveQuadratic(a, b, c) {
  const D = Discriminant(a, b, c);
//Storing calculated Discriminant in variable 
  
  const X1 = (-b + Math.sqrt(D)) / (2 * a);
  const X2 = (-b - Math.sqrt(D)) / (2 * a);
//Discriminant > 0, this means two Real solutions and algorithms respectly for x1 and x2
//Discriminant = 0, this means one Real solution, both answers are the same, using either 
  
  const x1 = Rounding(X1);
  const x2 = Rounding(X2);
//Rounding result is not not necessary, but get more readable output (with 2 decimal places) 
//Able to use within declaration [X1] and [X2] but for here formore readability 
  
  const compSolution = '(' + -b + ' +/- ' + Rounding(Math.sqrt (-D)) + ')'  + ' i' + ' / ' + (2 * a);
//Discriminant < 0 (square root of negative number) this means Complex Solution with Imaginary Numbers
//Algorithm (-b +/- (Sqrt of Discriminant without minus) [i] )/ 2a  
//[i] for Imaginary Numbers
//Concatinate for visible [i] sign and Math operators in final statemant
//Rounding for more readability on screen
  
  if (D > 0) {
    return 'x1 = ' + x1 + ' and x2 = ' + x2 + ' results has been rounded to 2 decimal places';
//Returning for printing to document result (two Real solution)
  } else if (D === 0) {
    return 'x = ' + x1;
//Returning for printing one Real (usage x1, because doesn't matter which of them x1 or x2)
  }  else if (D < 0) {
    return 'Discriminant is negative number so we\'ve used Complex Solution with \"i\" for Imaginary Numbers ' + compSolution + ' results has been rounded to 2 decimal places';
//Returning notification and result for Negative Discriminant
  } else {
    return 'Please Reload page and enter numbers';
//If input aren't numbers
  }
}

function Discriminant(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
//Finding the Discriminant
}

function Rounding(RounUnit){
  return Math.round(RounUnit * 100) / 100;
}
//Rounding function to 2 decimal places


