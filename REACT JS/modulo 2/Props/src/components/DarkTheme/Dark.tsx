import { useTheme } from "./DarkContext";
import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/DarkTheme/DarkContext';

export type Props = {
    children: ReactNode;
}

export const Dark = ({ children }: Props) => {
    const themeCtx = useTheme();

    const changeTheme = () => {
        if (themeCtx?.theme === 'light') {
            return themeCtx.setTheme('dark')
        } else {
            return themeCtx?.setTheme('light')
        };

    }
    return (

        <ThemeProvider>
            <div className={`flex flex-col h-screen justify-center items-center
                            ${themeCtx?.theme === 'dark' ? 'bg-black text-white' :
                    'bg-white text-black border border-black'}`}>
                <header className="text-3xl p-3">Titulo</header>
                <section className="p-3">Conteudo da página</section>

                <button className={`p-3 rounded-md 
                    ${themeCtx?.theme === 'dark' ? 'bg-black text-white border border-white' :
                        'bg-white text-black border border-black'}`}
                    onClick={changeTheme}>
                    Mudar para
                    {(themeCtx?.theme === 'dark' ? " Light" : " Dark")}
                </button>
            </div>
        </ThemeProvider>
    )
}