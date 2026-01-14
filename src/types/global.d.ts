type Provider = "credentials" | "google";
type Role = "customer" | "admin" | "super-admin";
type ProductImageRole = "main-image" | "sub-image" | "gallery-image";
type Rank = "new-customer" | "customer" | "regular-customer" | "vip-customer";
type DiscountType = "fixed" | "percent";

interface Pagination {
    page: string,
    totalPage: string
}

interface Account {
    id: string,
    username: string,
    email: string,
    rank: Rank,
    role: Role,
    provider: Provider
}

interface Accounts extends Pagination {
    accounts: Account[]
}

interface Category {
    id: string,
    name: string,
    slug: string
}

interface Categories extends Pagination {
    categories: Category[]
}

interface Color {
    id: string,
    name: string,
    slug: string,
    colorCode: string
}

interface Colors extends Pagination {
    colors: Color[]
}

interface ProductImage {
    id: string,
    url: string,
    blurUrl: string,
    role: ProductImageRole
}

interface ProductCard {
    id: string,
    name: string,
    costPrice: number,
    interestPercent: number,
    discountType: DiscountType,
    discount: number,
    price: number,
    categories: Category[],
    colors: Color[],
    image: ProductImage
}

interface ProductCards extends Pagination {
    products: ProductCard[]
}

interface ProductDetail {
    id: string,
    name: string,
    desc: string,
    costPrice: number,
    interestPercent: number,
    discountType: DiscountType,
    discount: number,
    price: number,
    categories: Category[],
    colors: (
        Color &
        { images: ProductImage[] }
    )[]
}