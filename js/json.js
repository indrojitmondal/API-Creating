console.log('connected json.js');
const myObject={ status: true, message: 'successfully fetched all the data by github.io', id:1, interests: ['Web Development', 'Mobile App Development', 'Machine Learning','Cloud Computing','Cybersecurity'] }

const jsonString= JSON.stringify(myObject);
console.log(jsonString);
