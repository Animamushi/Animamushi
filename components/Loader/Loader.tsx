import { PropsWithChildren } from "react";

interface iLoaderProps {
    children: any;
}
const Loader = () => {
    return (
        <>
            <div className="w-12 h-12 rounded-full animate-spin
        border-y-4 border-solid border-primary border-t-transparent shadow-md"></div>

        </>
    )
}
export const LoaderScreen: React.FC<PropsWithChildren<iLoaderProps>> = ({ children }) => {
    return (<div className="w-screen h-screen flex items-center align-middle flex-col justify-center">{children}</div>)
}

export default Loader