const fs = require('fs');
const path = require('path')
// // fs.mkdir(path.join(__dirname, 'notes'), (err) => {
// //     if (err) throw new Error(err);
// //
// //     console.log('Directory was make')
// // });
//
// fs.writeFile(path.join(__dirname, 'notes', 'myNotes.txt'), 'Hello world!', (err) => {
//     if(err) throw err
//
//     console.log('File was make')
//
//     fs.appendFile(path.join(__dirname, 'notes', 'myNotes.txt'), 'From append file', err => {
//         if(err) return
//
//         console.log('File was update')
//     })
// });
//
// fs.readFile(path.join(__dirname, 'notes', 'myNotes.txt'), 'utf-8', (err, data) => {
//     if(err) return
//
//     console.log(data)
// }, )
//
//


fs.rename(path.join(__dirname, 'notes', 'myNotes.txt'), path.join(__dirname, 'notes', 'notes.txt'), err => console.log(
'test'))