// import { getPostBySlug } from '$lib/utils';
import matter from 'gray-matter';

export async function load({ params, url }: any) {

    const myUrl = url.origin;
    // console.log("my url: ", myUrl);

    let slug: string = params.post_id;
    // console.log("slug: ", slug);
    // const content = await getPostBySlug(slug);

    // const res = await fetch(`http://localhost:5173/content/blog/${slug}.md`);
    const res = await fetch(`${myUrl}/content/blog/${slug}.md`);
    const fileContent = await res.text();
    const { data, content } = matter(fileContent);
    // console.log("content:", content);
    return {
        content: content,
        data: data
    };
    // return { content: "test" };
}