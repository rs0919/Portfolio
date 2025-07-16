import { getPostBySlug } from '$lib/utils';

export async function load({ params }: any) {

    let slug: string = params.post_id;
    const content = await getPostBySlug(slug);

    return {
        content
    };
    // return { content: "test" };
}