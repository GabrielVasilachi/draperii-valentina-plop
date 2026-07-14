export type Product = {
  id: number
  slug: string
  name: string
  category: 'Jaluzele' | 'Perdele' | 'Draperii' | 'Draperii romane' | 'Accesorii'
  subcategory: string
  description: string
  images: string[]
  featured?: boolean
}

const gallery = (slug: string) => Array.from({ length: 4 }, (_, index) =>
  `/images/products/${slug}/0${index + 1}.jpg`,
)

export const products: Product[] = [
  { id: 1, slug: 'jaluzele-din-lemn', name: 'Jaluzele din lemn', category: 'Jaluzele', subcategory: 'Lemn natural', images: gallery('jaluzele-din-lemn'), featured: true, description: 'Jaluzele elegante și durabile, disponibile în mai multe nuanțe, pentru controlul luminii și o atmosferă caldă.' },
  { id: 2, slug: 'perdele-din-in', name: 'Perdele din in', category: 'Perdele', subcategory: 'Tull din in', images: gallery('perdele-din-in'), featured: true, description: 'Textură naturală, ușoară și aerisită, care aduce luminozitate și rafinament în interioare moderne sau clasice.' },
  { id: 3, slug: 'draperii-opace', name: 'Draperii opace', category: 'Draperii', subcategory: 'Opace / Blackout', images: gallery('draperii-opace'), featured: true, description: 'Materiale dense care reduc lumina și oferă intimitate deplină, ideale pentru dormitoare și livinguri.' },
  { id: 4, slug: 'suport-canafi', name: 'Suport canafi', category: 'Accesorii', subcategory: 'Suport canafi', images: gallery('suport-canafi'), description: 'Accesoriu practic și estetic pentru fixarea canafilor, creat să completeze armonios decorul draperiilor.' },
  { id: 5, slug: 'canafi', name: 'Canafi', category: 'Accesorii', subcategory: 'Canafi', images: gallery('canafi'), description: 'Canafi decorativi pentru prinderea draperiilor, cu design sofisticat și detalii atent lucrate.' },
  { id: 6, slug: 'draperii-romane', name: 'Draperii romane', category: 'Draperii romane', subcategory: 'La comandă', images: gallery('draperii-romane'), featured: true, description: 'Soluție compactă, personalizată, cu sistem practic de ridicare și un aspect curat, contemporan.' },
  { id: 7, slug: 'draperii-moi-lenta-de-bara', name: 'Draperii moi pe lentă de bară', category: 'Draperii', subcategory: 'Moi / Soft', images: gallery('draperii-moi-lenta-de-bara'), description: 'Cădere fluidă și finisaj discret pe lentă de bară, potrivite pentru interioare relaxate și luminoase.' },
  { id: 8, slug: 'draperii-opace-cu-inele', name: 'Draperii opace cu inele', category: 'Draperii', subcategory: 'Opace / Blackout', images: gallery('draperii-opace-cu-inele'), description: 'Draperii dense cu inele, ușor de manevrat și potrivite pentru un stil modern, bine structurat.' },
  { id: 9, slug: 'draperii-opace-in-pliu', name: 'Draperii opace în pliu', category: 'Draperii', subcategory: 'Opace / Blackout', images: gallery('draperii-opace-in-pliu'), description: 'Pliuri regulate și material opac pentru un finisaj elegant și control sporit al luminii.' },
  { id: 10, slug: 'draperii-moi-cu-inele', name: 'Draperii moi cu inele', category: 'Draperii', subcategory: 'Moi / Soft', images: gallery('draperii-moi-cu-inele'), description: 'Material moale și fluid, montat pe inele pentru o deschidere ușoară și un aspect contemporan.' },
  { id: 11, slug: 'draperii-moi', name: 'Draperii moi', category: 'Draperii', subcategory: 'Moi / Soft', images: gallery('draperii-moi'), description: 'Țesături plăcute, cu o cădere naturală și o paletă generoasă de culori pentru orice încăpere.' },
  { id: 12, slug: 'draperii-catifea-lenta-de-bara', name: 'Draperii catifea lentă de bară', category: 'Draperii', subcategory: 'Catifea', images: gallery('draperii-catifea-lenta-de-bara'), description: 'Catifea bogată cu prindere pe lentă de bară, pentru o prezență sofisticată și confort vizual.' },
  { id: 13, slug: 'draperii-catifea-cu-inele', name: 'Draperii catifea cu inele', category: 'Draperii', subcategory: 'Catifea', images: gallery('draperii-catifea-cu-inele'), description: 'Textura luxoasă a catifelei într-o variantă practică pe inele, ideală pentru accente elegante.' },
  { id: 14, slug: 'draperii-catifea', name: 'Draperii catifea', category: 'Draperii', subcategory: 'Catifea', images: gallery('draperii-catifea'), description: 'Catifea cusută pe rejansă, apreciată pentru profunzimea culorii, izolare și căderea impecabilă.' },
  { id: 15, slug: 'draperii-catifea-in-pliu', name: 'Draperii catifea în pliu', category: 'Draperii', subcategory: 'Catifea', images: gallery('draperii-catifea-in-pliu'), description: 'Pliuri sculpturale și catifea densă pentru amenajări clasice, glam sau contemporane.' },
]

export const categories = ['Toate', 'Jaluzele', 'Perdele', 'Draperii', 'Draperii romane', 'Accesorii'] as const
