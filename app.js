function getSign() {
    const date = new Date(document.getElementById('birthday').value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
  
    let sign = "";
  
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) sign = "Aquarius";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) sign = "Pisces";
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) sign = "Aries";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) sign = "Taurus";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) sign = "Gemini";
    else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) sign = "Cancer";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) sign = "Leo";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) sign = "Virgo";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) sign = "Libra";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) sign = "Scorpio";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) sign = "Sagittarius";
    else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) sign = "Capricorn";
    else sign = "Invalid date";
  
    document.getElementById('sign-result').textContent = `Your Zodiac Sign is: ${sign}`;
  }
  