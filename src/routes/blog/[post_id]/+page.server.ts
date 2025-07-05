import { getPostBySlug } from 'C:/Users/rohit/Documents/ECS/svelte_todoApp/src/content/blog/utils';

export async function load({ params }: any) {

    let slug: string = params.post_id;
    const content = await getPostBySlug(slug);

    return {
        content
    };
    // return { content: "test" };
}