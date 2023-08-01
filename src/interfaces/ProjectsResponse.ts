export interface ProjectsResponse {
    data: Project[];
    meta: Meta;
}

export interface Project {
    id:         number;
    attributes: ProjectAttributes;
}

export interface ProjectAttributes {
    name:        string;
    description: string;
    url:         string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    cover:       Cover;
    tecnologies: Ies;
    categories:  Ies;
}

export interface Ies {
    data: CategoriesDatum[];
}

export interface CategoriesDatum {
    id:         number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name:        string;
    createdAt:   Date;
    updatedAt:   Date;
    publishedAt: Date;
    img?:        Cover;
}

export interface Cover {
    data: Data;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats | null;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          Provider;
    provider_metadata: ProviderMetadata;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    PNG = ".png",
    SVG = ".svg",
    Webp = ".webp",
}

export interface Formats {
    large:     Large;
    small:     Large;
    medium:    Large;
    thumbnail: Large;
}

export interface Large {
    ext:               EXT;
    url:               string;
    hash:              string;
    mime:              MIME;
    name:              string;
    path:              null;
    size:              number;
    width:             number;
    height:            number;
    provider_metadata: ProviderMetadata;
}

export enum MIME {
    ImagePNG = "image/png",
    ImageSVGXML = "image/svg+xml",
    ImageWebp = "image/webp",
}

export interface ProviderMetadata {
    public_id:     string;
    resource_type: ResourceType;
}

export enum ResourceType {
    Image = "image",
}

export enum Provider {
    Cloudinary = "cloudinary",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}
