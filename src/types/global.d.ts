type Rank = "khach-moi" | "khach-thuong" | "khach-quen" | "khach-vip";
type Role = "khach-hang" | "quan-tri-vien" | "sieu-quan-tri-vien";
type Provider = "credentials" | "google";

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