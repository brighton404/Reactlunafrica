import { FunctionComponent } from "react";
import styles from '../CustomCSS/Solution.module.css';

interface CardProps {
    image: string;
    imgDesc: string;
    button: string;
    header: string;
    subtext: string;
  }

export const Solutions: FunctionComponent<CardProps> = ({ button, header, subtext, image, imgDesc}) => { 

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`
    };

    return (
    <div className="flex flex-1 self-stretch flex-col h-fit min-h-[400px] max-h-[400px] rounded-md bg-base-blacks-var-4 hover:bg-base-blacks-var-3 p-2">
        <div className={`rounded relative p-2 flex-1 ${styles.background}`} style={backgroundImageStyle}>
            <button className="absolute left-1 bottom-1 px-3 py-2 rounded bg-base-blacks-var-4 text-base-whites-var-1 text-small-x">{button}</button>
        </div>
        <div className="flex flex-col p-4 gap-2">
            <h3 className="text-body-4x m-0 font-semibold">{header}</h3>
            <div className="text-small text-gray-400 m-0 selection:bg-fuchsia-300 selection:text-black font-light">
                <div dangerouslySetInnerHTML={{ __html: subtext }} />
            </div>
        </div>
    </div>
    );
}

export const Pricing: FunctionComponent<CardProps> = ({ button, header, subtext, image, imgDesc}) => { 

    const backgroundImageStyle = {
        backgroundImage: `url(${image})`
    };

    return (
    <div className="flex flex-1 flex-col min-h-fit rounded-md bg-base-blacks-var-4 p-2 gap-2">
        <div className="flex flex-col flex-1 bg-base-blacks-var-5 rounded-md">
            <div className={`rounded flex flex-1 sm:h-[400px] ${styles.background}`} style={backgroundImageStyle}></div>
            <div className="flex flex-col p-4 gap-2">
                <h3 className="text-body-4x m-0 font-semibold">{header}</h3>
                <div className="text-small text-gray-400 selection:bg-fuchsia-300 selection:text-black m-0 font-light">
                    <div dangerouslySetInnerHTML={{ __html: subtext }} />
                </div>
            </div>
        </div>
        <div className="flex gap-2">
            <span className="px-3 py-1 rounded bg-base-blacks-var-5 text-small-x">LUNA</span>
            <button className="px-3 py-1 rounded bg-base-blacks-var-5 text-base-whites-var-1 text-small-x">{button}</button>        
        </div>
    </div>
    );
}

