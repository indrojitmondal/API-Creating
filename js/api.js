console.log('Connected API');
const apiTesting = async()=>{
    const res = await fetch('https://indrojitmondal.github.io/API-Creating/');
    const data = await res.json();
    console.log(data);
}
apiTesting();