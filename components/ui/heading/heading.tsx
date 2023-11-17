'use client'
interface HeadingPros {
    title: string;
    description: string;
}

export const Heading: React.FC<HeadingPros> = ({
    title,
    description
}) => {
    return (
        <div className="text-3xl font-bold tracking-tight">
            <h2>{title}</h2>
            <p className="text-sm text-muted-foreground">
                {description}
            </p>
        </div>
    )
}