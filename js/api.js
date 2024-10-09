console.log('Connected my API');
const apITesting = async ()=>{
    const res= await fetch('https://indrojitmondal.github.io/API-Creating/');
    const data = await res.json();
    console.log(data);
}
apITesting();