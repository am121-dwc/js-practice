// let moji = prompt('Your age ?');
// if ( ! isNaN(moji)){
//   let age = parseInt(moji)
//   if ( age >= 6 && age <= 15 ){
//     console.log('義務教育')
//   }else if ( age < 20 ){
//     console.log('not adult')
//   }else if( age < 65){
//     console.log('adult')
//   }else{
//     console.log('senior')
//   }

// }


// for( let cnt = 0; cnt < 10; cnt++ ){
//   console.log( cnt + ' times loop')
// }

// for(let cnt = 10; cnt > 0; cnt-- ){
//   console.log( cnt + ' last')
// }


// for(let x = 1; x < 10; x++ ){
//   for(let y = 1; y < 10; y++ ){
//     console.log( x + 'x' + y + '=' + x * y);
//   }
// }

// let wdays = ['月','火','水','木','金'];
// for( let cnt = 0; cnt < 5; cnt++ ){
//   console.log( wdays[cnt] + '曜日');
// }

// let team = ['A','B','C','D','E'];
// for ( let t1 of team){
//   for( let t2 of team){
//     if( t1 == t2 ){
//       continue
//     }else{
//       console.log( t1 + 'vs' + t2);
//     }
//   }
// }

// let team = ['A','B','C','D','E'];
// for ( let t1 of team){
//   for( let t2 of team){
//     if( t1 == t2 || t1 > t2 ){
//       continue
//     }else{
//       console.log( t1 + 'vs' + t2);
//     }
//   }
// }

// let dir = ['east', 'west', 'south', 'north'];
// for (let i = 0; i < dir.length; i++){
//   let d = dir[i];
//   console.log(d);
// }

// let wdays = ['月','火','水','木','金'];
// for( let cnt = 4; cnt >= 0; cnt-- ){
//   console.log( wdays[cnt] + '曜日');
// }


// for( let c of '月火水木金'){
//   console.log(c);
// }

// let createMail = ( recv ) => {
//   console.log( recv + '様')
//   console.log('こちら○○企画のxxです。');
//   console.log('請求書をお送りします。')
// }
// createMail('yamamoto');
// createMail('yoshida');


// let createMail = (recv, bill) => {
//   let msg = `${recv}様
// PT企画の斎藤です。
// 今月の請求額は${bill}円です。`;
//   console.log( msg );
// };
// createMail('yamamoto', 40000);

// let addCharge = ( bill ) => {
//   return bill * 1.07;
// };
// console.log( addCharge(40000) );

// let data = { name:'yamamoto', bill:40000, crg:true };
// console.log( data['name'] );
// console.log( data['bill'] );


// let data = [
//   { name:'yamamoto', bill:40000, crg:true },
//   { name:'yoshida', bill:25000, crg:false }
// ];
// console.log( data[1]['name'] );
// console.log( data[1]['bill'] );


// メールを作る関数
// let createMail = (recv,bill) => {
//   let msg = `${recv}様
// PT企画の斎藤です。
// 今月の請求額は${bill}円です。`
//   console.log(msg)
// };

// 手数料を追加する関数
// let addCharge = (bill) => {
//   return bill * 1.07;
// };

// 送付先データ
// let data = [
//   {name:'yamamoto', bill:40000, crg:true },
//   {name:'yoshida', bill:25000, crg:false}
// ];
// メール作成実行
// for( let rec of data){
//   let bill = rec['bill']
//   if( rec['crg']){
//     bill = addCharge(bill);
//   }
//   createMail(rec['name'], bill );
// }

// let createMail = ( recv ) => {
//   console.log( recv + '様' );
//   console.log( 'はじめまして' )
// }
// createMail( '山本' );

// let addCharge = ( bill ) => {
//   if( bill < 0 ){
//     return 0;
//   }else{
//     return bill * 1.07;
//   }
// }
// console.log( addCharge( -1000 ) );