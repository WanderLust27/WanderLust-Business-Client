import Link from "next/link"

export default function Logo({ variant = "default" }: { variant?: "default" | "dashboard" }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      {variant === "dashboard" ? (
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500">
          <div className="text-white text-lg font-bold">✱</div>
        </div>
      ) : (
        <div className="text-3xl">✱</div>
      )}
      <span className="font-bold text-xl">Swiftpay</span>
    </Link>
  )
}
