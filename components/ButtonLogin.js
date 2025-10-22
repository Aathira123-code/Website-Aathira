import Link from "next/link"
function ButtonLogin(isLoggedIn, name, extraStyle) {
    if (isLoggedIn) {
        return (
            <Link href="/dashboard" className="btn btn-primary">
                Welcome back {name}
            </Link>
        )
    }

    return <button>Login</button>
}
export default ButtonLogin