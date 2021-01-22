// https://github.com/sazzadmhossain/assignment_3


// kilometerToMeter Function

function kilometerToMeter(distanceInKM) {
    if(distanceInKM >= 0) {
        var distanceInMeter = distanceInKM * 1000;
        return distanceInMeter;
    }
    else {
        return "You can't have a negative distance";
    }
}


// budgetCalculator Function

function budgetCalculator(clock, mobile, laptop) {
    if(clock >= 0 && mobile >=0 && laptop >= 0){
        var total = clock*50 + mobile*100 + laptop*500;
        return total;
    }
    else {
        return "You can't have any negative value";
    } 
}


// hotelCost Function

function hotelCost(days) {
    if(days>=0 && days <= 10) {
        return days*100;
    }
    else if(days >10 && days <=20) {
        return 10*100 + (days-10)*80;
    }
    else if(days > 20) {
        return 10*100+10*80 + (days-20)*50;
    }
    else {
        return "You can't have a negative value";
    }
}


// megaFriend Function

function megaFriend(myArray=[]) {
    var largeName = '';
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].length > largeName.length) {
            largeName = myArray[i];
        }
    }
    return largeName;
}

