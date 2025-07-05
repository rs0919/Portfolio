import { getAllBlogs } from 'C:/Users/rohit/Documents/ECS/svelte_todoApp/src/content/blog/utils';

export async function load() {
    console.log("hello");
    const posts = await getAllBlogs();
    return { posts };
}