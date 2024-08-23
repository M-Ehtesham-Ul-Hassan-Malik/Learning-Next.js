import Nav from "@/component/Navbar";
import Link from "next/link";

export default function Products(){
    return(
        <>
            <Nav />
            <h1>Products List</h1>

            <ul>
                <li><Link href="/products/product">Product 1</Link></li>
                <li><Link href="/products/product">Product 2</Link></li>
                <li><Link href="/products/product">Product 3</Link></li>
            </ul>

        </>
    );
}