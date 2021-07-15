interface IHeaderProps {
    label: string;
}

export function Header(props: IHeaderProps) {
    return (
        <h1 aria-label="List of All Users"> Users List   <button className="create_user_btn">Create User</button> </h1>
    )
}