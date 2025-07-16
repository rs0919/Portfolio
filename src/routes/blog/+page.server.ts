import { getAllBlogs } from '$lib/utils';

export async function load() {
    console.log("hello");
    const posts = await getAllBlogs();
    return { posts };
}