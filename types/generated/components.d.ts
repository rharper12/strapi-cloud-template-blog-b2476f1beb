import type { Schema, Struct } from '@strapi/strapi';

export interface SharedAboutCard extends Struct.ComponentSchema {
  collectionName: 'components_shared_about_cards';
  info: {
    displayName: 'about_card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedBackgroundImage extends Struct.ComponentSchema {
  collectionName: 'components_shared_background_images';
  info: {
    displayName: 'backgroundImage';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedGallery extends Struct.ComponentSchema {
  collectionName: 'components_shared_galleries';
  info: {
    displayName: 'Gallery';
    icon: 'apps';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface SharedHeroBanner extends Struct.ComponentSchema {
  collectionName: 'components_shared_hero_banners';
  info: {
    displayName: 'hero_banner';
    icon: 'apps';
  };
  attributes: {
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {};
}

export interface SharedNavItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'nav_item';
    icon: 'archive';
  };
  attributes: {
    link_name: Schema.Attribute.String;
    link_path: Schema.Attribute.String;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_sections';
  info: {
    displayName: 'Section';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.about-card': SharedAboutCard;
      'shared.background-image': SharedBackgroundImage;
      'shared.gallery': SharedGallery;
      'shared.hero-banner': SharedHeroBanner;
      'shared.media': SharedMedia;
      'shared.nav-item': SharedNavItem;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.section': SharedSection;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
