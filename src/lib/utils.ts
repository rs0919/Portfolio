import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';


const blogDirectory = path.resolve("./static/content/blog");
const relDirectory = "/content/blog";

export async function getAllBlogs(baseUrl: string) {
    const files = fs.readdirSync(blogDirectory);

    return files.map(async (filename: string) => {
        // FIX - change to fetch bc we are using HTTP not local file system
        const filePath: string = path.join(relDirectory, filename);
        // const fileContent = fs.readFileSync(filePath, 'utf-8');
        const res = await fetch(`${baseUrl}${relDirectory}/${filename}`);
        const fileContent = await res.text();
        const { data } = matter(fileContent);

        return {
            title: data.title,
            slug: data.slug,
            date: data.date
        };
    })

    // return {
    //     title: "my title",
    //     slug: "my-title",
    //     date: "today",
    // };


}

export async function getPostBySlug(slug: string) {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    const res = await fetch(filePath);
    const fileContent = await res.text();
    const { data, content } = matter(fileContent);

    return {
        content
    };
}