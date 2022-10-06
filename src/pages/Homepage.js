import Header from "../components/Header";
import ArticlePreview from "./ArticlePreview";

import { useAllPrismicDocumentsByType } from "@prismicio/react";

const Homepage = () => {
    const [documents] = useAllPrismicDocumentsByType("textpost");

    if (documents) {
        console.log(documents);
    }

    return (
        <div className="bg-gray-800 min-h-screen min-w-[100vw]">
            <Header pageTitle="Bienvenue sur le blog de Julien Hanslik" />

            {documents?.map((article) => {
                return (
                    <ArticlePreview
                        articleTitle={article.data.main_title[0].text}
                        imageSrc={article.data.image_field.url}
                        imageAlt={article.data.image_field.alt}
                        videoSrc={article.data.embed_link.embed_url}
                    />
                );
            })}
        </div>
    );
};

export default Homepage;
