export type RoleType = "khach-hang" | "quan-tri-vien" | "sieu-quan-tri-vien";

const roles = {
    "khach-hang": {
        label: "Khách hàng",
        value: "khach-hang"
    },
    "quan-tri-vien": {
        label: "Quản trị viên",
        value: "quan-tri-vien"
    },
    "sieu-quan-tri-vien": {
        label: "Siêu quản trị viên",
        value: "sieu-quan-tri-vien"
    }
}

export default roles;