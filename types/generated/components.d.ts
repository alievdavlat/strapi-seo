import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleRelatedArticle extends Schema.Component {
  collectionName: 'components_article_related_articles';
  info: {
    displayName: 'relatedArticle';
    icon: 'arrowUp';
  };
  attributes: {
    intro: Attribute.String;
    articles: Attribute.Relation<
      'article.related-article',
      'oneToMany',
      'api::article.article'
    >;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'Seo';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    sharedImage: Attribute.Component<'shared.shared-image'>;
  };
}

export interface SharedSharedImage extends Schema.Component {
  collectionName: 'components_shared_shared_images';
  info: {
    displayName: 'sharedImage';
    icon: 'arrowLeft';
  };
  attributes: {
    media: Attribute.Media;
    alt: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.related-article': ArticleRelatedArticle;
      'shared.seo': SharedSeo;
      'shared.shared-image': SharedSharedImage;
    }
  }
}
