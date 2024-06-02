import classes from "./page.module.css"
export default function ArticleDetailsPage({params}: {params: {slug: string}}) {
    console.log("params", params);
    
    return (
        <div>
            Article Details page
        </div>
    )
}