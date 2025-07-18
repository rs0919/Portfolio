import { getAllBlogs } from '$lib/utils';

export async function load() {
    const posts = await getAllBlogs();
    return { posts };
}