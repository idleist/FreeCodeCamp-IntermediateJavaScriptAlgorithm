// JavaScript Algorithms and Data Structures Projects: Telephone Number Validator
//Return true if the passed string looks like a valid US phone number. The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers 
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
  let regex = /(1){0,1}\s{0,1}(\({0,1}[0-9]{3}[-)]{0,1}[\s]{0,1})([0-9]{3}[-\s]{0,1})([0-9]{4})/g;
  if(regex.test(str) && (str.match(regex)[0].length === str.length)){
    if(str.includes("(") || str.includes(")")){
      if(str.indexOf("(") === (str.indexOf(")") - 4)){
        return true;
      } else {
        return false;
      }
    }
    return true;
  } else{
      return false;
  }
  
}
