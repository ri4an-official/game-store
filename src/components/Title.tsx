export const Title = (props: { children: string; noblock?: boolean }) => (
    <h2 className={`center ${props.noblock && "noblock"}`}>{props.children}</h2>
);
