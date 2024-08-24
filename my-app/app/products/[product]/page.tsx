import Nav from "@/component/Navbar";

export default function Product({params}:{params:{product:string}}){
    return (
       
       <>
        <h1>Product Details</h1>
        <p>{params.product}</p>
        </>
    );

}