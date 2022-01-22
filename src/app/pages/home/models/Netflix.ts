 export interface Netflix {
    nav: Navbar,
    hero: Hero,
    film: Film,
} 

export interface Navbar {
    title:string;
    logo: Image;
}

export interface Hero {
    title: string;
    imgGallery: Image []
}

export interface Film {
    title: string;
    imgGallery: Image []
}

export interface Image {
    src: string;
    alt:string;
}