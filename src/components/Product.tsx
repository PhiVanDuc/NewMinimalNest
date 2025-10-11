import { FaStar } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";

export default function Product() {
    return (
        <article className="w-full cursor-pointer">
            <figure className="group relative w-full aspect-square rounded-[10px] bg-zinc-300">
                <div className="absolute left-[15px] top-[15px] flex items-center gap-[10px] px-[15px] py-[8px] rounded-full bg-zinc-800 text-white">
                    <IoMdPricetag size={20} />
                    <p className="text-[14px]">999,000 VNĐ</p>
                </div>
            </figure>

            <div className="space-y-[10px] p-[15px]">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Tên sản phẩm</p>

                    <div className="flex items-center gap-[8px]">
                        <p className="text-zinc-600 font-medium leading-tight">4,9</p>
                        <FaStar size={20} className="text-amber-500 translate-y-[-1.5px]" />
                    </div>
                </div>
            </div>
        </article>
    )
}