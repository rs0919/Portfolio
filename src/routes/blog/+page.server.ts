import { getAllBlogs } from '$lib/utils';
import type { PageLoad } from './$types';
import { PUBLIC_API_URL } from "$env/static/public";

// let url = URL;
// export async function load() {
//     const posts = await getAllBlogs(url.origin);
//     return { posts };
// }

export const load: PageLoad = async ({ url }) => {
    const posts = await getAllBlogs(url.origin);
    console.log("loaded posts");
    return { posts };
}
