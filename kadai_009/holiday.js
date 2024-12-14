const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

console.log(holidays.length[0]);

//for ｘという変数
for (let x=0;x<=(holidays.length-1);x=x+1){
    console.log(holidays[x]);  
}

let y=0;
while (y<=(holidays.length-1))  {
    console.log(holidays[y]);
    y=y+1;
}
