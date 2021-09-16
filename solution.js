function change(cash) {
    // Your code goes here
    let ten, rest, five, two, rest_5, rest_2;
    ten = parseInt(cash / 10);
    rest = cash % 10;

    while(rest > 0 && ten > 0){
        five = parseInt(rest / 5);
        rest_5 = rest % 5;
        two = parseInt(rest_5 / 2);
        rest_2 = rest_5 % 2;
        while (rest_2 > 0 && five > 0){
            five = five -1;
            rest_5 = rest_5 + 5;
            two = parseInt(rest_5 / 2);
            rest_2 = rest_5 % 2;
        }
        if(rest_2 > 0){
            rest = rest + 10;
            ten = ten - 1;
        }
        else{
            rest = rest_2
        }
    }
    if(rest > 0){
        five = parseInt(rest / 5);
        rest_5 = rest % 5;
        two = parseInt(rest_5 / 2);
        rest_2 = rest_5 % 2;
        if(rest_2 > 0)
            return NaN;
    }
    return {
        two: two,
        five: five,
        ten: ten
    };
}
