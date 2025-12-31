interface PropsType {
    username: string
}

export default function Avatar({ username }: PropsType) {
    const splitUsername = username.trim().split(/\s+/);
    const lastName = splitUsername[splitUsername.length - 1];

    return (
        <div className="shrink-0 flex items-center justify-center size-[45px] aspect-square rounded-full bg-zinc-800">
            <p className="text-[20px] text-white font-medium uppercase">{lastName[0]}</p>
        </div>
    )
}