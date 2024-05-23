import { unstable_noStore as noStore} from "next/cache";
export default async function Page(){
    noStore();
    await new Promise((resolve) => setTimeout(resolve, 20000));
    return <p>Customer Page</p>
}