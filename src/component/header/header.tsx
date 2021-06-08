interface IHeaderProps {
    title?: string;
    subTitle?: string;
}

export function Header(props:IHeaderProps) {

    return (
    <section className="header-wrapper">
        <div className="header__title">{props.title} </div>
        <div className="header__subTitle">{props.subTitle} </div>
    </section>
    );
}