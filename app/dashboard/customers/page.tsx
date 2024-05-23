export default async function Page(){
    await new Promise((resolve) => setTimeout(resolve, 20000));
    return <p>Customer Page</p>
}