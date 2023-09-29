export interface Artwork {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: unknown;
  thumbnail: Thumbnail;
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: unknown;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: unknown;
  artist_display: string;
  place_of_origin: string;
  description: string;
  dimensions: string;
  dimensions_detail: DimensionsDetail[];
  medium_display: string;
  inscriptions: string;
  credit_line: string;
  catalogue_display: unknown;
  publication_history: string;
  exhibition_history: string;
  provenance_text: string;
  edition: unknown;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: number;
  fiscal_year_deaccession: unknown;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: string;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: Color;
  latitude: unknown;
  longitude: unknown;
  latlon: unknown;
  is_on_view: boolean;
  on_loan_display: string;
  gallery_title: unknown;
  gallery_id: unknown;
  nomisma_id: unknown;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: unknown[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: unknown;
  style_title: unknown;
  alt_style_ids: unknown[];
  style_ids: unknown[];
  style_titles: unknown[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: unknown;
  alt_subject_ids: unknown[];
  subject_ids: unknown[];
  subject_titles: unknown[];
  material_id: string;
  alt_material_ids: string[];
  material_ids: string[];
  material_titles: string[];
  technique_id: unknown;
  alt_technique_ids: unknown[];
  technique_ids: unknown[];
  technique_titles: unknown[];
  theme_titles: unknown[];
  image_id: string;
  alt_image_ids: string[];
  document_ids: unknown[];
  sound_ids: unknown[];
  video_ids: unknown[];
  text_ids: unknown[];
  section_ids: unknown[];
  section_titles: unknown[];
  site_ids: unknown[];
  suggest_autocomplete_all: SuggestAutocompleteAll[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
}

export interface Thumbnail {
  lqip: string;
  width: number;
  height: number;
  alt_text: string;
}

export interface DimensionsDetail {
  depth_cm: number;
  depth_in: number;
  width_cm: number;
  width_in: number;
  height_cm: number;
  height_in: number;
  diameter_cm: number;
  diameter_in: number;
  clarification: unknown;
}

export interface Color {
  h: number;
  l: number;
  s: number;
  percentage: number;
  population: number;
}

export interface SuggestAutocompleteAll {
  input: string[];
  contexts: Contexts;
  weight?: number;
}

export interface Contexts {
  groupings: string[];
}
