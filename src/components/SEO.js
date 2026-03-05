import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({
  title = "PixelNest - Premium Web Development & Digital Solutions",
  description = "PixelNest builds high-performance websites and React applications that drive business growth. Expert web development, UI/UX design, and SEO optimization services.",
  keywords = "web development, react development, UI/UX design, website design, SEO optimization, digital solutions",
  author = "PixelNest",
  url = "https://pixelnest.example.com",
  image = "https://pixelnest.example.com/og-image.png",
  type = "website",
  structuredData = null,
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    publisher: {
      "@type": "Organization",
      name: "PixelNest",
      url: "https://pixelnest.example.com",
    },
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
