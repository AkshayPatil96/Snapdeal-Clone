
    let getData = async()=>{
        let url="https://profound-donut-01ca79.netlify.app/ecom.json"
        try {
            let res = await fetch(url);
            let response = await res.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

export default getData;