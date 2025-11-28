import { IoAnalytics } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { PiFlagBannerFold } from "react-icons/pi";
import { RiCoupon4Line, RiBillLine } from "react-icons/ri";
import { TbCategory2, TbColorFilter, TbSettings2 } from "react-icons/tb";
import { AiOutlineInbox } from "react-icons/ai";
import { MdOutlineInventory2 } from "react-icons/md";

export const userNavList = [
    {
        id: "1",
        label: "Sản phẩm",
        href: "/products"
    },
    {
        id: "2",
        label: "Phiếu giảm giá",
        href: "/coupons"
    },
    {
        id: "3",
        label: "Hoàn trả",
        href: "/return-request"
    }
];

export const userDrawerNavList = [
    {
        id: "1",
        title: "Chung",
        list: [
            {
                id: "1.1",
                label: "Trang chủ",
                href: "/"
            },
            {
                id: "1.2",
                label: "Trang quản trị",
                href: "/admin"
            }
        ]
    },
    {
        id: "2",
        title: "Điều hướng",
        list: [
            {
                id: "2.1",
                label: "Sản phẩm",
                href: "/products"
            },
            {
                id: "2.2",
                label: "Phiếu giảm giá",
                href: "/coupons"
            },
            {
                id: "2.3",
                label: "Hoàn trả",
                href: "/return-request"
            },
            {
                id: "2.4",
                label: "Giỏ hàng",
                href: "/cart"
            }
        ]
    }
];

export const adminDrawerNavList = [
    {
        id: "1",
        title: "Chung",
        list: [
            {
                id: "1.1",
                label: "Thống kê",
                href: "/admin",
                icon: <IoAnalytics size={20} />
            },
            {
                id: "1.2",
                label: "Tài khoản",
                href: "/admin/accounts",
                icon: <FiUser size={20} />
            }
        ]
    },
    {
        id: "2",
        title: "Sản phẩm",
        list: [
            {
                id: "2.1",
                label: "Danh mục",
                href: "/admin/categories",
                icon: <TbCategory2 size={20} />
            },
            {
                id: "2.2",
                label: "Màu sắc",
                href: "/admin/colors",
                icon: <TbColorFilter size={20} />
            },
            {
                id: "2.3",
                label: "Sản phẩm",
                href: "/admin/products",
                icon: <AiOutlineInbox size={20} />
            },
            {
                id: "2.4",
                label: "Cài đặt sản phẩm",
                href: "/admin/product-settings",
                icon: <TbSettings2 size={20} />
            },
            {
                id: "2.5",
                label: "Tồn kho",
                href: "/admin/inventory",
                icon: <MdOutlineInventory2 size={20} />
            }
        ]
    },
    {
        id: "3",
        title: "Quảng bá",
        list: [
            {
                id: "3.3",
                label: "Phiếu giảm giá",
                href: "/admin/coupons",
                icon: <RiCoupon4Line size={20} />
            },
            {
                id: "3.1",
                label: "Banner quảng cáo",
                href: "/admin/banners",
                icon: <PiFlagBannerFold size={20} />
            }
        ]
    },
    {
        id: "4",
        title: "Khác",
        list: [
            {
                id: "4.1",
                label: "Đơn hàng",
                href: "/admin/orders",
                icon: <RiBillLine size={20} />
            },
            {
                id: "4.2",
                label: "Đơn hoàn trả",
                href: "/admin/return-orders",
                icon: <RiBillLine size={20} />
            }
        ]
    }
];