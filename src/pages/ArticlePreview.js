const ArticlePreview = ({
    articleTitle,
    articleSecTitle,
    imageSrc,
    imageAlt,
    videoSrc,
    articleContent,
}) => {
    return (
        <section className="flex flex-col justify-center items-center my-3 bg-gray-300 w-[70%] mx-auto rounded-xl">
            <h1>{articleTitle}</h1>
            {articleSecTitle && <h2>{articleSecTitle}</h2>}
            {imageSrc && <img src={imageSrc} alt={imageAlt}></img>}
            {videoSrc && (
                <iframe
                    width="200"
                    height="113"
                    src={
                        "https://www.youtube.com/embed/IwuUEPl2GRA?feature=oembed"
                    }
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="Long spin"
                ></iframe>
            )}
        </section>
    );
};

export default ArticlePreview;
