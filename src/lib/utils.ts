import fs from 'node:fs';
import path from 'path';
import matter from 'gray-matter';


const blogDirectory = path.resolve("src/lib/content/blog");

export async function getAllBlogs() {
    const files = fs.readdirSync(blogDirectory);

    return files.map((filename: string) => {
        const filePath = path.join(blogDirectory, filename);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
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
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    return {
        content
    };
}