export const useSingleProduct = async ({ params }) => {
    const data = await fetch(
        `https://fakestoreapi.com/products/${params.id}`
    );
    const product = await data.json();
    return { product };
};