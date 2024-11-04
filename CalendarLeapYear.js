function is_leapyear(year) {
    
    
    if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0){

        return true;
    }
    return false;

}
function days_inMonth(year, month){
    var month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
		if (is_leapyear(year) && days_inMonth(month) == 2) {
			return 29;

		}
		return month_days[month - 1];

}
while(true){
    try {
        const year = prompt("Enter a year: ");
        
        is_leapyear(year);
        const month = prompt("Enter a month: ");
        
        days_inMonth(month);

        if(is_leapyear(year)){
            console.log(year + ' is a leap year');
        }
        else{
            console.log(year + ' is not a leap year');
        }
        if(year == 2020 && month == 2){
            console.log("You Entered:" +year);
            console.log("You Entered:" +month);
            break;

            

        }
    } catch (error) {
        const makeErr = "Opps invalid input";
        const year = prompt("Enter a year: ");
        const month = prompt("Enter a month: ");
        continue;

        console.log(error.makeErr);
    }
    makeErr();
}