import Nav from "@/component/Navbar";
import Link from "next/link";

export default function Products(){
    return(
        <>
            <h1>Products List</h1>

            <ul>
                <li><Link href="/products/product1">Product 1</Link></li>
                <li><Link href="/products/product2">Product 2</Link></li>
                <li><Link href="/products/product3">Product 3</Link></li>
            </ul>

        </>
    );
}