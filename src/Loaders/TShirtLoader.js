export const tShirtLoader = async () =>{
    const resp = await fetch('tshirts.json');
    const data = await resp.json();
    console.log(data);
    return data;
}