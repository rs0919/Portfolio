import matter from "gray-matter";



export async function load() {
    // const modules = import.meta.glob('/static/content/blog/*.md', { as: 'raw' });

    const allPosts = [ // contains all blogs located in blog dir
        { slug: 'my-first-blog-post', published: false, title: 'My First Blog Post' },
        { slug: 'thoughts-on-tailwind', published: true, title: 'Thoughts on Tailwind' }
    ];

    return {
        posts: allPosts
    };
}


// async function getAllBlogs(baseUrl: string) {
//     // const files = fs.readdirSync(blogDirectory);

//     return files.map(async (filename: string) => {
//         // FIX - change to fetch bc we are using HTTP not local file system
//         const filePath: string = path.join(relDirectory, filename);
//         // const fileContent = fs.readFileSync(filePath, 'utf-8');
//         const res = await fetch(`${baseUrl}${relDirectory}/${filename}`);
//         const fileContent = await res.text();
//         const { data } = matter(fileContent);

//         return {
//             title: data.title,
//             slug: data.slug,
//             date: data.date
//         };
//     })

// }