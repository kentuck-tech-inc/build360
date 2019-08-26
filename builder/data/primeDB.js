const builder = require('../handlers/builder');

console.log('priming database....')

console.log('checking builder existance...8d5ff6560cdc51ecba7bd6631a5aa229');
builder.GetBuilderByUUID('8d5ff6560cdc51ecba7bd6631a5aa229');

if(false){
console.log('inserting builder...')
var user1UID = builder.InsertBuilder('Doe Construction', 'John Doe', 'A');
console.log('insert builder completed')
console.log('inserting builder...')
var user2UID = builder.InsertBuilder('Test Company', 'Test McGee', 'F');
console.log('insert builder completed')
}
