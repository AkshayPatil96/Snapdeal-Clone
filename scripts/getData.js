
    let getData = async(url)=>{
        try {
            let res = await fetch(url);
            let response = await res.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }

export default getData;