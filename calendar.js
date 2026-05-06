function Calendar(month){
	sabath = new Date(2008, 0, 1)
	baseday = sabath.getDate();
	baseMonth = sabath.getMonth() + month;
	baseyear = sabath.getYear();
	sab = 0;
	today = new Date;
	
	dat = new Date(today.getFullYear(), today.getMonth() + month, 1)  ;
	da2 = dat.getMonth();
	da1 = dat.getYear();
	first = "<table summary='カレンダー' width=400 border=1><tbody>";
	end = "</tr></tbody></table>";
	thisMonth = da2 + 1;
	dayOfMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	wdays = new Array("日","月","火","水","木","金","土");
	for(nm1 = baseyear; nm1 <= da1; nm1++){
		if (nm1 % 4 == 0){
			dayOfMonth[1] += 1;
		} else {
			dayOfMonth[1] = 28;
		}
		for(nm2 = 0; nm2 <= 11; nm2++){
			if(nm2 == da2 && nm1 == da1) {
				break;
			}	
			
			sab = sab + dayOfMonth[nm2];
		}
	}
	num = dayOfMonth[da2];
	ha = new Array();
	dat.setDate(1);
	firstDay = dat.getDay();
	    start = "<tr id='pbcbg' align='center'>";
	for (y = 1;y <= firstDay;y++){
		start = start + "<td>　</td>";
	}
	y -= 1;
	view = start;
	for (j = 1;j <= num;j++){
		fcolor = "#000000";
		tdcolor = "#ffffff";
		tail = "";

		if (sab % 8 == 0){
			tdcolor = "#B0C4DE";
		} else {
			fcolor = "#000000";
		}
		if (y == 6){
			tail = "</tr><tr id='pbcbg' align='center'>";
			fcolor = "#0000ff";
		}
		if (y == 7){
			fcolor = "#ff0000";
			y = 0;
		}
		if( thisMonth == 9 && j == 21 || thisMonth == 9 && j == 22 || thisMonth == 11 && j == 3 || thisMonth == 11 && j == 23 || thisMonth == 12 && j == 31 || thisMonth == 1 && j <= 1 && j >= 1 || thisMonth == 1 && j == 11 || thisMonth == 2 && j == 11 ||  thisMonth == 2 && j == 23 || thisMonth == 5 && j == 4 || thisMonth == 5 && j == 5 || thisMonth == 5 && j == 6 || thisMonth == 7 && j == 23 || thisMonth == 7 && j == 24 || thisMonth == 8 && j == 10 ) {
		    fcolor = "#ff0000";
		}
		check_holiday = holiday(thisMonth,j);
		if(check_holiday) {
		    fcolor = "#ff0000";
		}
		ha[j] = "<td align=center bgcolor=" + tdcolor + "><font size=+2 color=" + fcolor + ">" + j + "</td>" + tail;
		view = view + ha[j];
		sab += 1;
		y += 1;
	}
	wday = "<tr id='pbcbg'><td bgcolor=#ffddff align=center><font color='#ff0000' size=+2>日</font></td>";
	for(i = 1; i < 6 ; i++){
		wday += "<td  align=center bgcolor=#ffffff>" + wdays[i] + "</td>";
	}
	wday += "<td bgcolor=#ddffff align=center><font color=#0000ff size=+2>土</font></td></tr>";
	da1 = da1 + 1900;
	close1 = first + "<font color=red> " + da1 + "年" + thisMonth + "月</font>";
	close2 = wday + view + end;
	document.write(close1);
	document.write(close2);
}

function test() {
    document.write("TEST");

}
function check_neighber(cur_stone,num){
    var str = num;
    if(str > 266 || str < 11)  {
        return 0;
    } 
    if(document.getElementById(str).value =="　") {
        return 0;
    } else if(document.getElementById(str).value == cur_stone) {
        return 0;
    } else {
        if(document.getElementById(str).value == "〇") {
            return "〇";
        } else {
            return "●";
        }
    } 
}
function holiday(month, day) {
    var holiday =     { "1-1": '成人の日',
                        "2-11": '建国記念日', 
                        "2-23": '天皇誕生日', 
                        "3-20": '春分の日',
                        "11-23": '勤労感謝の日',
                        "12-31": '年末年始'  
                      };
    var str = month + "-" + day;
    if(holiday[str] != "-"){
        //alert(str);
        //document.write(holiday[str]);
        return holiday[str];
    }
    //alert(str);
        

}
function check_corner() {
    var gorobee = document.getElementById("gorobe").value;
    var rtn1 = 0;
    var rtn2 = 0;
    var rtn3 = 0;
    var test = 0;
    var cur_stone = "〇";
    if(document.getElementById(11).value == "　"){
       //for( var i = 0; i < 16; i++ ) {
           //test = 16 * i + 11;

           //rtn3 = check_

           rtn1 = check_down(11, cur_stone);
           rtn2 = check_left(11, cur_stone);
           rtn3 = check_leftdown(11, cur_stone);
           if(parseInt(rtn1) + parseInt(rtn2) + parseInt(rtn3) > 0) {
              document.getElementById(11).value = cur_stone;
              document.getElementById("gorobe").value = parseInt(gorobee) + 1;
              if(parseInt(gorobee)  % 2 == 1) {
                  document.getElementById("gorobe1").value = "黒の番";
              } else {
                  document.getElementById("gorobe1").value = "白の番";
              }
              return 1;
            }
            
    }
    if(document.getElementById(26).value == "　"){
           rtn1 = check_down(26, cur_stone);
           rtn2 = check_right(26, cur_stone);  
           rtn3 = check_rightdown(26, cur_stone);  
           if(parseInt(rtn1) + parseInt(rtn2) + parseInt(rtn3) > 0) {
              document.getElementById(26).value = cur_stone;
              document.getElementById("gorobe").value = parseInt(gorobee) + 1;
              if(parseInt(gorobee)  % 2 == 1) {
                  document.getElementById("gorobe1").value = "黒の番";
              } else {
                  document.getElementById("gorobe1").value = "白の番";
              }
              return 1;
            }        
            //
            
    }
    if(document.getElementById(251).value == "　"){
       //for( var i = 0; i < 16; i++ ) {
           //test = 16 * i + 11;

           //rtn3 = check_

           rtn1 = check_up(251, cur_stone);
           rtn2 = check_left(251, cur_stone);
           rtn3 = check_leftup(251, cur_stone);
           if(parseInt(rtn1) + parseInt(rtn2) + parseInt(rtn3) > 0) {
              document.getElementById(251).value = cur_stone;
              document.getElementById("gorobe").value = parseInt(gorobee) + 1;
              if(parseInt(gorobee)  % 2 == 1) {
                  document.getElementById("gorobe1").value = "黒の番";
              } else {
                  document.getElementById("gorobe1").value = "白の番";
              }
              return 1;
            }
            //

    }
    if(document.getElementById(266).value == "　"){
           rtn1 = check_up(266, cur_stone);
           rtn2 = check_right(266, cur_stone);  
           rtn3 = check_rightup(266, cur_stone);  
           if(parseInt(rtn1) + parseInt(rtn2) + parseInt(rtn3) > 0) {
              document.getElementById(266).value = cur_stone;
              document.getElementById("gorobe").value = parseInt(gorobee) + 1;
              if(parseInt(gorobee)  % 2 == 1) {
                  document.getElementById("gorobe1").value = "黒の番";
              } else {
                  document.getElementById("gorobe1").value = "白の番";
              }
              return 1;
            }        
           // 
    }    
    return 0;
}
function check_border() {
    var rtn1 = 0;
    var rtn2 = 0;
    var rtn3 = 0;
    var test = 0;
    var cur_stone = "〇";
    
    if(document.getElementById(11).value == cur_stone){
       for( var i = 0; i < 16; i++ ) {
           test = 16 * i + 11;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 1; i < 16; i++ ) {
           test = i + 11;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(26).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 26 - i;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 0; i < 16; i++ ) {
           test = i * 16 + 26;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(251).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 251 - i * 16;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 1; i < 16; i++ ) {
           test = 251 + i;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(266).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 266 - i * 16;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    return 0;
}
function check_nearBorder() {
    var rtn1 = 0;
    var rtn2 = 0;
    var ary = [28,29,44,30,45,60,31,46,61,76,32,47,62,77,92];
    var test = 0;
    var cur_stone = "〇";
    
    if(document.getElementById(11).value == cur_stone){
       for( var i = 0; i < 15; i++ ) {
           test = ary[i];
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 1; i < 16; i++ ) {
           test = i + 11;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(26).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 26 - i;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 0; i < 16; i++ ) {
           test = i * 16 + 26;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(251).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 251 - i * 16;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
       for( i = 1; i < 16; i++ ) {
           test = 251 + i;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    }
    if(document.getElementById(266).value == cur_stone){

       for( i = 1; i < 16; i++ ) {
           test = 266 - i * 16;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
           if(document.getElementById(test).value == "　" && rtn2 == 0){
              rtn1 = btnClick(test);
              if(rtn1 >0) {
                  return rtn1;
              } else {
                  rtn2 = 1;
              }
           }   
       }
       rtn2 = 0;
    return 0;
}

function check_done() {
    var all = 256;
    var check = 0;
    for(var i = 0 ; i < all ; i++) {
       if(document.getElementById(i + 11).value == "　") {
           check = 1;
           break;
       }    
    }
    if(check == 0) {
        alert("終りです");
        finalJudge();
    }
}
